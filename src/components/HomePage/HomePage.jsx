import Link from "next/link"
import React from "react"
import Carousel from "../Carousel/Carousel"
import MovieCard from "../MovieCard/MovieCard"

const HomePage = ({
  popularMoviesData,
  nowPlayingMoviesData,
  topRatedMoviesData,
  topRatedTvShowsData,
  trendingNowMoviesData,
}) => {
  const isFree = false
  return (
    <main dir="rtl">
      <section className="home-section-bg h-72 md:h-5/6 p-5 flex flex-row items-center justify-between">
        <div className="felx  flex-col justify-center w-60 md:w-96">
          <h1 className="text-primary text-sm font-bold mb-4 md:text-4xl">
            اعمال 1001 الاصلية
          </h1>
          <Link href="/1001">
            <button className="bg-primary px-2 py-2 rounded-xl text-sm text-white md:text-2xl">
              تصفح الكل
            </button>
          </Link>
        </div>
        <div className=" w-64 md:w-8/12">
          <Carousel isHero={true} data={popularMoviesData} />
        </div>
      </section>
      <section className="bg-navy-900 ">
        <div className="py-2">
          <Carousel title="أضيف حديثاً" data={nowPlayingMoviesData} />
        </div>
        <div className="py-2">
          <Carousel title="أفلام يجب مشاهدتها" data={topRatedMoviesData} />
        </div>
        <div className="py-2">
          <Carousel title="مسلسلات يجب مشاهدتها" data={topRatedTvShowsData} />
        </div>
        <div className="py-2">
          <Carousel title="الأكثر مشاهدة" data={trendingNowMoviesData} />
        </div>
        <div className="py-2">
          <Carousel title="+OSN أفضل أعمال" data={topRatedMoviesData} />
        </div>
        <div className="py-2">
          <Carousel
            isFree={true}
            title="المشاهدة مجاناً"
            data={nowPlayingMoviesData}
          />
        </div>
      </section>
    </main>
  )
}

export default HomePage
