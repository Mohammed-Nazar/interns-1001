
import HomePage from "@/components/HomePage/HomePage"
import { popularMovies } from "@/API/mainApi"

export async function getStaticProps() {
  const popularMoviesData = await popularMovies()

  return {
    props: {
      popularMoviesData,
    },
    revalidate: 3600,
  }
}

export default function Home({ popularMoviesData }) {
  return <HomePage popularMoviesData={popularMoviesData} />
}
