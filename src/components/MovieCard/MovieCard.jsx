import Image from "next/image"

const MovieCard = ({ movie, isFree }) => {
  const src = "https://image.tmdb.org/t/p/original"

  return (
    <div className="relative embla__slide w-fit">
      <Image
        src={src + movie.poster_path}
        width={100}
        height={100}
        className="min-w-16 max-w-16 rounded-md"
        alt="movie image"
      />
      {!isFree && (
        <Image
          src="/Premium.svg"
          width={14}
          height={14}
          className="absolute top-[4px] left-1"
          alt="premium"
        />
      )}
    </div>
  )
}

export default MovieCard
