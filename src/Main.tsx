import { Routes, Route } from 'react-router-dom';
import PersistentDrawerLeft from './components/dashboard/drawer';
import SignUp from './components/sign-up/Signup';

const Main = () => {
return (         
    <Routes>
    <Route path='/home' element={<PersistentDrawerLeft/>} />
    <Route path='/' element={<SignUp/>} />

  </Routes>
);
}
export default Main;