import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import { Login } from './Pages/Login';
import { Registration } from './Pages/Registration';
import { ForgetPassword } from './Pages/ForgetPassword';
import { Dashboard } from './Pages/Dashboard';
import { Layout } from './Components/Layout';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          <Route path='/dashboard' element={<Dashboard/>} />


        </Routes>
        </Layout>
      </BrowserRouter>


    </div>
  );
}

export default App;
