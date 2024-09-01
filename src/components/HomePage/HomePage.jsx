import Link from "next/link"
import React from "react"
import MovieCard from "../MovieCard/MovieCard"
import dynamic from "next/dynamic"
const Carousel = dynamic(() => import("../Carousel/Carousel"), {
  ssr: false,
})

const HomePage = ({ popularMoviesData }) => {
  const isFree = false
  return (
    <main dir="rtl">
      <section className="home-section-bg h-72 p-5 flex flex-row items-center justify-between">
        <div className="felx  flex-col justify-center w-60">
          <h1 className="text-primary text-sm font-bold mb-4">
            اعمال 1001 الاصلية
          </h1>
          <Link href="/1001">
            <button className="bg-primary px-2 py-2 rounded-xl text-sm text-white">
              تصفح الكل
            </button>
          </Link>
        </div>
        <div className="flex gap-1">
          {popularMoviesData.results.slice(0, 4).map((movie) => (
            <MovieCard movie={movie} isFree={isFree} />
          ))}
        </div>
      </section>
      <section className="bg-navy-900">
        <Carousel title="الاكثر مشاهدة" popularMoviesData={popularMoviesData} />
      </section>
    </main>
  )
}

export default HomePage
