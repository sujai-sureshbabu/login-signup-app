import Login from './components/login/login';
import { Routes, Route } from 'react-router-dom';
import PersistentDrawerLeft from './components/dashboard/drawer';
import SignUp from './components/login/Signup';
import Tasks  from './components/ToDoList/ToDo';

const Main = () => {
return (         
    <Routes>
    <Route path='/home' element={<PersistentDrawerLeft/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/todo' element={<Tasks/>} />
    <Route path='/' element={<Login/>} />

  </Routes>
);
}
export default Main;