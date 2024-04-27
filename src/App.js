import logo from './logo.svg';
import './App.css';
import UseEffect from './Components/UseEffect/UseEffect';
import { useContext } from 'react';
import { myContext } from './Components/ContextApi/Context';
// import Home from './Components/ContextApi/Home';
import LoginPage from './Components/ContextApi/LoginPage';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Routing/Home';
import Product from './Components/Routing/Product';
import Contact from './Components/Routing/Contact';
import NavBar from './Components/Routing/NavBar/NavBar';
import UseRef from './Components/UseRef/UseRef';
import CounterApp from './Components/UseReducer/CounterApp';
import Comp1 from './Components/Redux/Comp1';
import Comp2 from './Components/Redux/Comp2';
import Result from './Components/Redux/Result';
import Todo from './Components/TodoList/Todo';
import User from './Components/FilterUser/User';

function App() {
  // const { islogin } = useContext(myContext)

  return (
    <div className="App">
      {/* <UseEffect/> */}
      {/* {islogin ?<Home/>:<LoginPage/>} */}
      {/* <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
      {/* <UseRef/> */}
      {/* <CounterApp/> */}

      {/* <Comp1/>
      <Comp2/>
      <Result/> */}

      {/* <Todo/> */}
      {/* <User/> */}
    </div>
  );
}

export default App;
