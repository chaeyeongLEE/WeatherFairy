import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Start from './pages/Start';
import './App.css';
import Diary from './components/Diary';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
