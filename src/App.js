import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import ArticlePage from './pages/article';
import BookmarkPage from './pages/bookmarks';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          
          <Route path='/' element={<HomePage />} />
          <Route path='/article' element={<ArticlePage />} />
          <Route path='/bookmarks' element={<BookmarkPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
