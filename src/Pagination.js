import react from 'react'

function Pagination(props) {
    return (
      <div className="pagination">
        <button
          onClick={props.onPrevPage}
          disabled={props.currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {props.currentPage} of {props.totalPages}
        </span>
        <button
          onClick={props.onNextPage}
          disabled={props.currentPage === props.totalPages}
        >
          Next
        </button>
      </div>
    );
  }