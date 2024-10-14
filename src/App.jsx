import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/HomePage';
//import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect the base URL to the Home component */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;
