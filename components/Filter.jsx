import { useEffect } from "react";

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }

    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );

    setFiltered(filtered);
  }, [activeGenre, popular, setFiltered]);

  return (
    <div className="mb-4 space-x-2">
      <button
        onClick={() => setActiveGenre(0)}
        className="border rounded-full px-4 py-1 focus:text-white focus:bg-blue-500"
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className="border rounded-full px-4 py-1 focus:text-white focus:bg-blue-500"
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className="border rounded-full px-4 py-1 focus:text-white focus:bg-blue-500"
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
