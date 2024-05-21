
import "../styles/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Rules from "./Rules";
import Options from "./Options";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/howtoplay" element={<Rules/>}/>
          <Route path="/options" element={<Options/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
