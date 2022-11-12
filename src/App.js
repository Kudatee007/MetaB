
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from './Meta/Head'
import Meta from "./Meta/Meta";
import Foot from './Meta/Foot'
import MetaPlace from './Meta/MetaPlace'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Meta />} />
          <Route path="/Place" element={<MetaPlace />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
