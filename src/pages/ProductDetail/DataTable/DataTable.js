import './DataTable.scss';

const DataTable = ({ askHeaders, items = [] }) => {
  if (!askHeaders || !askHeaders.length) {
    throw new Error('<DataTable /> headers is required.');
  }

  const headerKey = askHeaders.map(header => header.value);

  return (
    <div className="dataTable">
      <table>
        <thead>
          <tr>
            {askHeaders.map(header => (
              <th key={header.text}>{header.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {headerKey.map(key => (
                <td key={key + index}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
