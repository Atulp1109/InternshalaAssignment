import "./App.css";
import NewsCard from "./components/Card";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import News1 from "./pages/News1";
import News2 from "./pages/News2";
import News3 from "./pages/News3";
import News4 from "./pages/News3";
import News5 from "./pages/News5";


function App() {
  return (
    <>
    <BrowserRouter>
    
     
      <Routes>
        <Route path='/' element={<NewsCard/>} exact/>
        <Route path='/News1' element={<News1/>}/>
        <Route path="/News2" element={<News2/>}/>
        <Route path="/News3" element={<News3/>}/>
        <Route path="/News4" element={<News4/>}/>
        <Route path="/News5" element={<News5/>}/>
      </Routes>
     
      </BrowserRouter>
      </>
  );
}

export default App;
