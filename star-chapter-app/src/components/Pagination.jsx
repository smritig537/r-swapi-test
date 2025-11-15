export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center p-4 space-x-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="px-3 py-1">{currentPage} / {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}