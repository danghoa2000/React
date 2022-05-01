import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
        <Header />
        <div className="wrapper__content">
          <Routes>
            <Route path="/" element={ <Home/> }></Route>
          </Routes>
        </div> 
    </>
  );
}

export default App;
