import './App.css';
import Create from './Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Retrieve from './Retrieve';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route exact path='/' element={<Login/>} />
        <Route path='/Create' element={<Create/>} />
        <Route path='/Retrieve' element={<Retrieve />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
