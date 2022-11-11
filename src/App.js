
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from './Meta/Head'
import Meta from "./Meta/Meta";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Meta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
