import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import { Login } from './Pages/Login';
import { Registration } from './Pages/Registration';
import { ForgetPassword } from './Pages/ForgetPassword';
import { Dashboard } from './Pages/Dashboard';
import { Layout } from './Components/Layout';
import { About } from './Pages/About';
import { Error } from './Pages/Error';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Layout>
        <Routes>
        <Route path='/' element={<Dashboard/>} />
          <Route path='/signin' element={<Login/>} />        
          <Route path='/signup' element={<Registration/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<Error/>}></Route>


        </Routes>
        </Layout>
      </BrowserRouter>


    </div>
  );
}

export default App;
