import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { moodGenreMapping } from "../common/constants";
import MovieList from "../components/Movie/MovieList";

export default function MovieListPage() {
  const { mood } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`/data/movies_data_${moodGenreMapping[mood][0]}.json`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [mood]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8">
            Movies for {mood} Mood
          </h1>
          <MovieList movies={movies} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
