import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
