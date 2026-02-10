import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";

function App() {
  return (
    <Router>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Servicos" element={<Servicos />} />
          <Route path="/Projetos" element={<Projetos />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
