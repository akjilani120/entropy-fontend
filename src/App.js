
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Community from './Page/Community';
import Entertainment from './Page/Entertainment';
import Home from './Page/Home';
import Tech from './Page/Tech';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<Home/>}>
      <Route index element={<Tech/>}></Route>
      <Route path='entertainment' element={<Entertainment/>}></Route>
      <Route path='community' element={<Community/>}></Route>
     </Route>
     
     </Routes>
    </div>
  );
}

export default App;
