import Image from "next/image"

const MovieCard = ({ movie, isFree }) => {
  const src = "https://image.tmdb.org/t/p/original"

  return (
    <div className="relative w-fit">
      <Image
        src={src + movie.poster_path}
        width={100}
        height={100}
        className="min-w-20 max-w-20 rounded-md"
        alt="movie image"
        draggable={false}
      />
      {!isFree && (
        <Image
          src="/Premium.svg"
          width={14}
          height={14}
          className="absolute top-[4px] left-1"
          alt="premium"
          draggable={false}
        />
      )}
    </div>
  )
}

export default MovieCard
