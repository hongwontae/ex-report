type Props = {
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number;
};

function PreMatchPagingButton({ totalPages, setPage, page }: Props) {
  return (
    <>
      {Array.from({ length: totalPages || 0 }, (_, i) => {
        return (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border ${
              page === i + 1 ? "bg-blue-500" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        );
      })}
    </>
  );
}

export default PreMatchPagingButton;
