import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <main>
              <About />
            </main>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
