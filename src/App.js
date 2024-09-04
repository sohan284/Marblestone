
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyManagePage from './pages/PropertyManagePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/property-management" element={<PropertyManagePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
