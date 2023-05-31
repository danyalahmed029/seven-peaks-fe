import { useRef, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { ReactComponent as DropdownIcon } from '../assets/svg/dropdown-svgrepo-com.svg';

const Layout = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchKeyPress = (event) => {
    if (event.key === 'Enter' && searchQuery !== "") {
      navigate(`/search?q=${searchQuery}`);
    }
  }

  const onSearchIconClick = () => {

    if (!searchOpen) {

      setTimeout(() => {
        inputRef.current.focus();
      }, 200);
    }
    else {
      setSearchQuery("")
    }

    setSearchOpen(!searchOpen);
  }

  return (
    <div>
      <header className='header'>
        <div className='nav-container'>
          <div className='logo'>
            <Link to={'/'}>
              <h2>News</h2>
            </Link>
          </div>
          <div className='account-container'>
            {/* <Link to={'/login'} className='login-button'>
              Login
            </Link>
            <Link to={'/signup'} className='login-button'>
              Signup
            </Link> */}
            <div className="dropdown">
              <div className="dropbtn">John Doe <DropdownIcon className="dropdown-icon"/></div>
              <div className="dropdown-content">
                <a className="#">Profile</a>
                <a className="#">Preferences</a>
                <a className="#">Sign out</a>
              </div>
            </div>
          </div>
          {/* <div className='search-container'>

            <div className='search-input-wrapper'>
              <input
                type='text'
                ref={inputRef}
                className={`search-text ${searchOpen ? "hide" : ""}`}
                placeholder='Search all news'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={onSearchKeyPress}
              />
              <div
                className='search-icon'
                onClick={onSearchIconClick}
              >
                <SearchIcon />
              </div>
            </div>
          </div> */}

        </div>
      </header>
      <div className='content-wrapper'>

        <Outlet />
      </div>
      {/* <footer className='footer'></footer> */}
    </div>
  );
};

export default Layout;
