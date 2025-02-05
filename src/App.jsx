import React from 'react'
import { BrowserRouter as Router, Routes, Route,  useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
import background from './assets/background.jpg';
import Faculty from './components/Faculty/Faculty';
import Student from './components/Student/Student';
import Analysis from './components/Analysis/Analysis';


const App = () => {

  return (
    <Router>
      <MainContent />
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation(); 


  const shouldApplyBackground = location.pathname === '/' || location.pathname === '/Login';

  return (
    <>
   
    <div style={shouldApplyBackground ? appStyle : {}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/student" element={<Student />} />
        <Route path="/graphics/:classId" element={<Analysis />} />
        <Route path="/maths/:classId" element={<Analysis/>} />
        <Route path="/objectoriented/:classId" element={<Analysis />} />
      </Routes>
      </div>
    
    </>
  )
}

const appStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};


export default App
