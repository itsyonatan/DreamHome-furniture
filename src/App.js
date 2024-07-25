import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./pages/home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
