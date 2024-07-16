import { Route, Routes } from "react-router-dom";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {
  About,
  AnimeDetails,
  Animes,
  AnimeSearch,
  AnimeTrailers,
  Bookmark,
  Characters,
  EpisodesVideo,
  Genre,
  Home,
  MangaDetail,
  MangaSearch,
  MangaStore,
  PopularEpisodes,
  Search,
  SeasonalAnime,
  TopAnime,
  TopManga,
  UpcomingAnime,
} from "./page";
import Error from "./components/error/Error";

const App = () => {
  return (
    <Container>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/search" element={<Search />} />
          <Route path="/anime-search" element={<AnimeSearch />} />
          <Route path="/manga-search" element={<MangaSearch />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/characters" element={<Characters />} />
          {/* anime  */}
          <Route path="/animes" element={<Animes />} />
          <Route path="/top" element={<TopAnime />} />
          <Route path="/seasonal" element={<SeasonalAnime />} />
          <Route path="/upcoming" element={<UpcomingAnime />} />
          <Route path="/anime-detail/:id" element={<AnimeDetails />} />

          {/* manga  */}
          <Route path="/manga-store" element={<MangaStore />} />
          <Route path="/top-manga" element={<TopManga />} />
          <Route path="/manga-detail/:id" element={<MangaDetail />} />
          {/* watch */}
          <Route path="/episodes" element={<EpisodesVideo />} />
          <Route path="/popular-episodes" element={<PopularEpisodes />} />
          <Route path="/trailers" element={<AnimeTrailers />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Container>
  );
};

export default App;
