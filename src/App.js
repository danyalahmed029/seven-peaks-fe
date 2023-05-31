import { Routes, Route } from 'react-router-dom';

import RequireAuth from './components/authentication/RequireAuth';

import Layout from './layout';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route element={<Layout />}>

          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />

          <Route
            path="/"
            element={
              <RequireAuth>
                < HomePage />
              </RequireAuth>
            } />
        </Route>
      </Routes>
    </div>
  );
}



export default App;
