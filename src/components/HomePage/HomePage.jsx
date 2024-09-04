import Link from "next/link"
import React from "react"
import Carousel from "../Carousel/Carousel"

const HomePage = ({
  popularMoviesData,
  nowPlayingMoviesData,
  topRatedMoviesData,
  topRatedTvShowsData,
  trendingNowMoviesData,
}) => {
  const isFree = false
  return (
    <main>
      <section className="home-section-bg h-72 md:h-5/6 p-5 flex flex-row items-center justify-between">
        <div className="flex flex-col justify-center w-60 md:w-96">
          <h1 className="text-primary text-sm font-inter font-bold mb-4 md:text-4xl">
            1001 Original shows
          </h1>
          <Link href="/1001">
            <button className="bg-primary px-4 py-3 rounded-xl text-sm font-inter font-semibold text-white md:text-2xl">
                Browse all
            </button>
          </Link>
        </div>
        <div className="w-64 md:w-8/12">
          <Carousel isHero={true} data={popularMoviesData} />
        </div>
      </section>
      
      <section className="bg-navy-900 pl-5">
        <div className="py-2">
          <Carousel title="Recently added" data={nowPlayingMoviesData} />
        </div>
        <div className="py-2">
          <Carousel title="Movies you Must Watch" data={topRatedMoviesData} />
        </div>
        <div className="py-2">
          <Carousel title="Series You Must Watch" data={topRatedTvShowsData} />
        </div>
        <div className="py-2">
          <Carousel title="Most Watched" data={trendingNowMoviesData} />
        </div>
        <div className="py-2">
          <Carousel title="Best of OSN+" data={topRatedMoviesData} />
        </div>
        <div className="py-2">
          <Carousel
            isFree={true}
            title="Watch For Free"
            data={nowPlayingMoviesData}
          />
        </div>
      </section>
    </main>
  )
}

export default HomePage
