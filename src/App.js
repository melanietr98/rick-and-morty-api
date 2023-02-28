import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import Header from "./components/Header";
import NoPage from "./pages/NoPage";
import RickAndMorty from './RickAndMorty';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Episodes" element={<Episodes />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/RickAndMorty" element={<RickAndMorty />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
