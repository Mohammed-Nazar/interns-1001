"use client"
import React, { useCallback, useEffect, useState } from "react"
import MovieCard from "../MovieCard/MovieCard"
import useEmblaCarousel from "embla-carousel-react"

const Carousel = ({ title, popularMoviesData }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    inViewThreshold: 0.2,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla],
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <div dir="rtl">
      <h1 className="text-white text-xl mb-4">{title}</h1>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {popularMoviesData.results.slice(0, 6).map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-full">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
