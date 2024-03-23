import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import { AddBlog } from "./pages/add-blog/add-blog";
import { Home } from "./pages/home/home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddBlog />} />
      </Routes>
    </div>
  );
}

export default App;
