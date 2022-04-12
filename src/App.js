import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import Header from './Pages/Header/Header';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
      </Routes>
    </>
  );
}

export default App;
