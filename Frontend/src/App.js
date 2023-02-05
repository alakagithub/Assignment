import './App.css';
import 'flowbite'
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Content from './components/Content';
import AddHotel from './pages/AddHotel';
import HotelList from './pages/HotelList';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />}>
            <Route path='/' element={<Content />} />
            <Route path='/addHotel' element={<AddHotel/>} />
            <Route path='/hotelList' element={<HotelList/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
