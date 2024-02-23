import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Home></Home>
    </div>
  );
}

export default App;
