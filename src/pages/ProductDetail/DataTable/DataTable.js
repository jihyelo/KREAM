import './DataTable.scss';

const DataTable = ({ tradeHeaders, items = [] }) => {
  if (!tradeHeaders || !tradeHeaders.length) {
    throw new Error('<DataTable /> headers is required.');
  }

  const headerKey = tradeHeaders.map(header => header.value);

  return (
    <div className="dataTable">
      <table>
        <thead>
          <tr>
            {tradeHeaders.map(header => (
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
                  {key === 'tradePrice' ? `${item[key]}원` : item[key]}
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
