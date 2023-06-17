import logo from './logo.svg';
import './App.css';
import "./fonts/Nexa-Heavy.ttf";
import './fonts/Nexa-ExtraLight.ttf';
import Landing from './pages/Landing';
import Industry from './pages/industry4-0';
import FabLab from './pages/fab-lab';
import Automation from './pages/automation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentForm from './components/FabLab/AppointmentForm';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='industry-4-0' element={<Industry/>}/>
      <Route path='fab-lab' element={<FabLab/>}/>
      <Route path='automation' element={<Automation/>}/>
      <Route path="/createAppointment" element={<AppointmentForm />} />
    </Routes>
  </Router>
  );
}

export default App;
