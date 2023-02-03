import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Start from './pages/Start';
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import DiaryStyle from './components/DiaryStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/diary" element={<DiaryStyle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
