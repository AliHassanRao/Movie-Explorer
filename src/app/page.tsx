
import MovieContainer from "@/components/MovieContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      {/* <CaroselBanner /> */}
      <div className="flex flex-col space-y-2">
       
        <MovieContainer movies={popularMovies} title="Popular" />
        <MovieContainer movies={upcomingMovies} title="" />
        <MovieContainer movies={topRatedMovies} title="" />
      </div>
    </main>
  );
}
