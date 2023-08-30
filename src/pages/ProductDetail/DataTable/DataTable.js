import './DataTable.scss';

const DataTable = ({ Headers, items = [] }) => {
  if (!Headers || !Headers.length) {
    throw new Error('<DataTable /> headers is required.');
  }

  const headerKey = Headers.map(header => header.value);

  return (
    <div className="dataTable">
      <table>
        <thead>
          <tr>
            {Headers.map(header => (
              <th key={header.text} className={header.className}>
                {header.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {headerKey.map(key => (
                <td
                  key={key + index}
                  className={key === 'size' ? 'textLeft' : 'textRight'}
                >
                  {key === 'tradePrice' ||
                  key === 'sellTargetPrice' ||
                  key === 'buyTargetPrice'
                    ? `${item[key]}원`
                    : item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
