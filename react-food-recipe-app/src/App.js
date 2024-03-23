import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navigation";
import { Favourites } from "./pages/favourites";
import { Details } from "./pages/details";
import { Home } from "./pages/home";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar className={"flex flex-row"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-item/:id" element={<Details />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
