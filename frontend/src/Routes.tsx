import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Welcome } from './pages/Welcome/Welcome';

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    )
}