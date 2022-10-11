import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./Components/BookList.jsx";
// import BookDetails from "./Components/BookDetails.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Favorites from "./Components/Favorites.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        {/* <Route path="/books/:id" element={<BookDetails />} /> */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
