import { motion } from "framer-motion";
import Image from "next/image";

const Movie = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      className="space-y-2"
    >
      <h1 className="text-slate-700 font-semibold line-clamp-1">
        {movie.title}
      </h1>
      <Image
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        width={400}
        height={400}
        alt={movie.title}
        className="rounded-md"
      />
    </motion.div>
  );
};

export default Movie;
