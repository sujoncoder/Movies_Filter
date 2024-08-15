"use client";

import Filter from "@/components/Filter";
import Movie from "@/components/Movie";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=d44b61a1585148dcdf6c9efdf168063f&language=en-US&page=1"
      );
      const movies = await data.json();
      setPopular(movies.results || []);
      setFiltered(movies.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 my-16 sm:my-24 md:my-32">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      {
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filtered.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </AnimatePresence>
        </motion.div>
      }
    </div>
  );
}
