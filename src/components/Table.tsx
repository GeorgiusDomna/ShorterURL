import { IshortURL } from "../interfaces/IshortURL";

interface ITableProps {
  shorterList: IshortURL[] | undefined;
}

const Table: React.FC<ITableProps> = ({ shorterList }) => {
  
  const trList = shorterList
    && shorterList.map((el) => {
      const shortURL = `https://front-test.hex.team/s/${el.short}`;
      return (
        <tr key={el.id}>
          <td
            className="link_toClipboard"
            title={el.target}
            onClick={() => { navigator.clipboard.writeText(el.target) }}>
            {el.target}
          </td>
          <td
            className="link_toClipboard"
            title={shortURL}
            onClick={() => { navigator.clipboard.writeText(shortURL) }}>
            {el.short}
          </td>
          <td>{el.counter}</td>
        </tr>)
    })

  return (
      <table> 
        <thead>
          <tr>
            <th>URL</th>
            <th>Short URL</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
        {shorterList
          ? trList
          : <tr>
              <td>
                Ничего не найдено
              </td>
            </tr>}
        </tbody>
      </table>
  )
}

export default Table