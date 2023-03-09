import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        </Routes>  
    </Router>
  );
}

export default App;
