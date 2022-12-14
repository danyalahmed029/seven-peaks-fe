import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import ArticlePage from './pages/article';
import BookmarkPage from './pages/bookmarks';
import HomePage from './pages/home';
import SearchPage from './pages/search';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route element={<Layout />}>
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
