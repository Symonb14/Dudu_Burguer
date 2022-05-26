import Base from "components/Base";
import Menu from "components/Menu";
import Cardapio from "pages/Menu";
import Home from "pages/Home";
import About from "pages/About";
import Footer from "components/Footer";
import NotFound from "pages/NotFound";
import Dish from "pages/Dish";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<About />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          <Route path="dish/:id" element={<Dish />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
