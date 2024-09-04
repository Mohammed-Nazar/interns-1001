import Image from "next/image"

const MovieCard = ({ movie, isFree }) => {
  const src = "https://image.tmdb.org/t/p/original"

  return (
    <div className="relative w-fit">
      <Image
        src={src + movie.poster_path}
        width={1000}
        height={1000}
        className="min-w-32 max-w-32 md:min-w-60 md:max-w-60 rounded-md max-h-80"
        alt="movie image"
        draggable={false}
      />
      {!isFree && (
        <Image
          src="/Premium.svg"
          width={14}
          height={14}
          className="absolute top-[4px] left-2"
          alt="premium"
          draggable={false}
        />
      )}
      {isFree && (
        <span className="absolute top-[4px] left-2 text-primary font-inter text-sm">
          Free
        </span>
      )}
    </div>
  )
}

export default MovieCard
