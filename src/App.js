
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Community from './Page/Community';
import Navabar from './Page/Component/Navabar';
import Entertainment from './Page/Entertainment';
import Home from './Page/Home';
import Tech from './Page/Tech';


function App() {
  const [ reload, setReload]=useState(false)
  
  return (
    <div className="App">
     <Navabar/>
     <Routes>
     <Route path='/' element={<Home
     setReload={setReload}
     reload={reload}
     />}>
      <Route index element={<Tech reload={reload } setReload={setReload} />}></Route>
      <Route path='entertainment' element={<Entertainment/>}></Route>
      <Route path='community' element={<Community/>}></Route>
     </Route>
     
     </Routes>
    </div>
  );
}

export default App;
