interface IPagination {
  total: number;
  сurrent: number;
  setCurrentPage: (current: number) => void;
}

const Pagination: React.FC<IPagination> = ({ total, сurrent, setCurrentPage }) => {
  const pagination = [];

  const start = Math.max(0, сurrent - 3);
  const end = Math.min(total - 1, сurrent + 3);

  for (let i = start; i <= end; i++) {
    if (i > total-1) break
    pagination.push(
      <div
        key={i}
        className={сurrent === i ? 'pagination_item pagination_item_active' : 'pagination_item'}
        onClick={() => setCurrentPage(i)}
      >
        {i + 1}
      </div>
    );
  }
  
    return (
      <div className='pagination'>
        <div
          className={сurrent === 0 ? 'pagination_item pagination_item_disabled' : 'pagination_item'}
          onClick={() => setCurrentPage(сurrent - 1)}
        >
          &lt;
        </div>
        {сurrent > 10
          && <div
          className='pagination_item'
            onClick={() => setCurrentPage(0)}>1
          </div>}
        {pagination}
        {(total-1 - сurrent) > 10
          && <div
          className='pagination_item'
            onClick={() => setCurrentPage(total - 1)}>{total}
          </div>}
        <div
          className={сurrent === total - 1 ? 'pagination_item pagination_item_disabled' : 'pagination_item'}
          onClick={() => setCurrentPage(сurrent + 1)}
        >
          &gt;
        </div>
      </div>
    );
  }

export default Pagination;