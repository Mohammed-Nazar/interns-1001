import Link from "next/link"
import React from "react"
import Carousel from "../Carousel/Carousel"
import MovieCard from "../MovieCard/MovieCard"

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
        <div className=" w-64">
          <Carousel isHero={true} data={popularMoviesData} />
        </div>
      </section>
      <section className="bg-navy-900">
        <Carousel title="الاكثر مشاهدة" data={popularMoviesData} />
      </section>
    </main>
  )
}

export default HomePage
