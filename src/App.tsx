import { Navigate, Routes, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Album from './pages/Album/Album';
import Home from './pages/Home/Home';
import Location from './pages/Location/Location';
import Message from './pages/Message/Message';
import Upload from './pages/Upload/Upload';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home">
          <Route index element={<Navigate to="/" replace />} />
          <Route path=":album" element={<Album />} />
        </Route>
        <Route path="/location" element={<Location />} />
        <Route path="/message" element={<Message />} />
        <Route path="/upload" element={<Upload />} />
      </Route>
    </Routes>
  );
};

export default App;
