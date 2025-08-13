import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [sortType, setSortType] = useState(null); // 'alpha' | 'length' | 'reverse' | null
  const [isReversed, setIsReversed] = useState(false);

  const sortAlphabetically = () => {
    const sorted = [...goodsFromServer].sort((a, b) => a.localeCompare(b));
    setGoods(sorted);
    setSortType('alpha');
    setIsReversed(false);
  };

  const sortByLength = () => {
    const sorted = [...goodsFromServer].sort((a, b) => a.length - b.length);
    setGoods(sorted);
    setSortType('length');
    setIsReversed(false);
  };

  const reverseOrder = () => {
    const reversed = [...goods].reverse();
    setGoods(reversed);
    setIsReversed(!isReversed);
    setSortType('reverse'); // This just tells UI a reverse was applied
  };

  const resetGoods = () => {
    setGoods(goodsFromServer);
    setSortType(null);
    setIsReversed(false);
  };

  const isOriginalOrder =
    goods.join(',') === goodsFromServer.join(',');

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sortType === 'alpha' ? '' : 'is-light'}`}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${sortType === 'length' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${sortType === 'reverse' ? '' : 'is-light'}`}
          onClick={reverseOrder}
        >
          Reverse
        </button>

        {!isOriginalOrder && (
          <button
            type="button"
            className="button is-danger"
            onClick={resetGoods}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map((good) => (
          <li key={good} data-cy="Good">{good}</li>
        ))}
      </ul>
    </div>
  );
};
