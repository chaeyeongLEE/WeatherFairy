import { Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import NotFound from './components/NotFound';
import Start from './pages/Start';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
