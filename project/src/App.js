// import Filllife from './components/Filllife';
import { Route, Routes } from 'react-router-dom';
import InputBoard from './components/InputBoard';
import NotFound from './components/NotFound';
import Weather from './components/Weather';
//import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/board" element={<InputBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
