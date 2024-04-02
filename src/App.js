import './App.css';
import SignIn from './components/SignIn/SignIn';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Ecom from './ProductsPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/ecommerce" element={<Ecom/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
