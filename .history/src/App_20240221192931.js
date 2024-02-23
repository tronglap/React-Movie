import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";
import ListMovie from "./component/ListMovie/ListMovie";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/list-movie" element={<ListMovie></ListMovie>}></Route>
      </Routes>
    </div>
  );
}

export default App;
