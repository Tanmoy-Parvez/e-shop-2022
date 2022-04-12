import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import Header from './Pages/Header/Header';
import Login from './Authentication/Login/Login';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
