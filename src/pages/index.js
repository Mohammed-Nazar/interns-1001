import HomePage from "@/components/HomePage/HomePage"
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  topRatedTvShows,
  trendingNowMovies,
} from "@/API/mainApi"
import SubscriptionLandingPage from "@/components/home/SubscriptionLandingPage"

export async function getStaticProps() {
  const popularMoviesData = await popularMovies()
  const nowPlayingMoviesData = await nowPlayingMovies()
  const topRatedMoviesData = await topRatedMovies()
  const topRatedTvShowsData = await topRatedTvShows()
  const trendingNowMoviesData = await trendingNowMovies()

  return {
    props: {
      popularMoviesData,
      nowPlayingMoviesData,
      topRatedMoviesData,
      topRatedTvShowsData,
      trendingNowMoviesData,
    },
    revalidate: 3600,
  }
}

export default function Home({
  popularMoviesData,
  nowPlayingMoviesData,
  topRatedMoviesData,
  topRatedTvShowsData,
  trendingNowMoviesData,
}) {
  return (
    <SubscriptionLandingPage/>
    
  )
}
 {/*<HomePage
      popularMoviesData={popularMoviesData}
      nowPlayingMoviesData={nowPlayingMoviesData}
      topRatedMoviesData={topRatedMoviesData}
      topRatedTvShowsData={topRatedTvShowsData}
      trendingNowMoviesData={trendingNowMoviesData}
    />*/}