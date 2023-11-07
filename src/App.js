import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
