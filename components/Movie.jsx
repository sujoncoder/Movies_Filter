import Image from "next/image";

const Movie = ({ movie }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-slate-700 font-semibold line-clamp-1">
        {movie.title}
      </h1>
      <Image
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        width={300}
        height={400}
        alt={movie.title}
        className="rounded-md"
      />
    </div>
  );
};

export default Movie;
