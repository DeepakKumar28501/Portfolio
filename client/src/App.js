import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/home";
function App() {
  return (
    // <div><h1>Hello</h1></div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
