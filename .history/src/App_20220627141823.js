import { React, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
import NotFound from "./pages/NotFound";

//lazy import/ dynamic import : dùng tới thì load
const Homepage = lazy(() => import("./pages/Homepage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <Homepage></Homepage>
                </>
              }
            ></Route>
            <Route path="/Movies" element={<MoviePage></MoviePage>}></Route>
            <Routes
              path="/movie/:movieId"
              element={<MovieDetailPage></MovieDetailPage>}
              <Route></Route>
            ></Routes>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
