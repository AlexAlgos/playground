import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArrayVisualizer from './static-array';
import DynamicArray from './dynamic-array';
import CustomNavbar from './navbar';
import DarkModeProvider from './dark-mode';

function App() {
  return (
  <DarkModeProvider>
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route index element={<ArrayVisualizer />} />
          <Route path="/static-array" element={<ArrayVisualizer />} />
          <Route path="/dynamic-array" element={<DynamicArray />} />
        </Routes>
      </div>
    </Router>
  </DarkModeProvider>
  );
}

export default App;