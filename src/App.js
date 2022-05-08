import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


 
function App() {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route path="/login"  element={<Login />}/>
         <Route path="/register"  element={<Register />}/>
         <Route path="/profile/:username"  element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;
