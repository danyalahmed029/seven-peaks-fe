import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as DropdownIcon } from '../assets/svg/dropdown-svgrepo-com.svg';

const Layout = () => {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
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
            {user ?
              <div className="dropdown">
                <div className="dropbtn">
                  {user.name}
                   <DropdownIcon className="dropdown-icon" />
                   </div>
                <div className="dropdown-content">
                  <a className="#">Profile</a>
                  <a className="#">Preferences</a>
                  <a className="#">Sign out</a>
                </div>
              </div>
              :
              <>
                <Link to={'/login'} className='login-button'>
                  Login
                </Link>
                <Link to={'/signup'} className='login-button'>
                  Signup
                </Link>
              </>
            }
          </div>

        </div>
      </header>
      <div className='content-wrapper'>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
