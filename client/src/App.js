
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbara from './components/Navbara';
import Userlist from './components/Userlist';
import About from './components/About';
import Conatct from './components/Conatct';
import {Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getuser } from './redux/userslice';
import { useDispatch } from 'react-redux';



function App() {

const dispatch = useDispatch();
const [ping, setping] = useState(false);
useEffect(() => {

dispatch(getuser());

}, [ping]);


  return (
    <div className="App">
    <Navbara/>
    <Routes>
                <Route path="/" element={<Userlist ping={ping} setping={setping}/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/conatct" element={<Conatct/>} />
    </Routes>
    </div>
  );
}

export default App;