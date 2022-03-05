import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './components/Login.jsx'
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route  path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
