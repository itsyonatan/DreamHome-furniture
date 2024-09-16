import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
