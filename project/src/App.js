// import Filllife from './components/Filllife';
import { Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Weather from './components/Weather';
//import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
