import logo from '../assets/Group.png'
import CustomButton from './CustomButton';
function Navbar() {
  return (
    <div className='container mx-auto relative'>
      <div className="navbar absolute">
        <div className="navbar-start">

          <img src={logo} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-20">

            <li>
              <details>
                <summary className='text-white'>Property Management</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className='text-white'>Owners</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className='text-white'>Residents</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a className='text-white'>Rentals</a></li>
            <li><a className='text-white'>Apply</a></li>
            <li>
              <details>
                <summary className='text-white'>Resources</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a className='text-white'>About</a></li>
            <li><a className='text-white'>Contact</a></li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <CustomButton title="Book a call" />
        </div>
        <div className="lg:navbar">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3  p-2 shadow">
              <li>
                <a className='text-white'>Property Management</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li>
                <a>Owners</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );

}
export default Navbar;
