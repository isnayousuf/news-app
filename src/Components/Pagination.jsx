const Pagination = ({ nextPage, onNext, onPrevious }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${!nextPage ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={onPrevious}
            disabled={!nextPage}
          >
            Previous
          </button>
        </li>

        <li className={`page-item ${!nextPage ? "disabled" : ""}`}>
          <button className="page-link" onClick={onNext} disabled={!nextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};


export default Pagination; 