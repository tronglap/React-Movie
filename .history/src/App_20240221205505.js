import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";
import ListMovie from "./component/ListMovie/ListMovie";
import SearchMovie from "./component/ListMovie/SearchMovie";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/list-movie" element={<ListMovie></ListMovie>}></Route>
        <Route
          path="/search/:slug"
          element={<SearchMovie></SearchMovie>}
        ></Route>
        <Route
          path="/detail-movie/:slug"
          element={<SearchMovie></SearchMovie>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
