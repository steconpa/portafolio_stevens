import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
