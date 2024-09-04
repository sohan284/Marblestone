import logo from '../assets/Group.png'
import CustomButton from './CustomButton';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate, useParams } from 'react-router-dom';
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const navigateToHome = () => {
        navigate('/');
    }
  const DrawerList = (
    <Box sx={{ width: 350, backgroundColor: 'black', height: 1000 }} role="presentation">
      <div className="text-left my-4">
        <img onClick={()=>navigate('/')}  src={logo} alt="Logo" className="ml-5" />
      </div>
      <ul className="menu menu-vertical text-white px-1 z-20">
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
      <div className='w-full p-2'>
        <CustomButton title="Book a call" />
      </div>
    </Box>
  );


  return (
    <div className='container mx-auto relative'>
      <div className="navbar absolute">
        <div>
          <img onClick={()=>navigate('/')} src={logo} alt='jj' />
        </div>
        <div className="hidden lg:flex xl:mx-[5%]">
          <ul className="menu menu-horizontal px-1 z-20">
            <li>
              <details>
                <summary className='text-white'>Property Management</summary>
                <ul className="p-2">
                  <li><Link to='/property-management'>Properties</Link></li>
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
        <div className='hidden lg:block z-20 absolute right-0'>
          <CustomButton title="Book a call" />
        </div>
        <div className='absolute right-0 lg:hidden'>
          <Button style={{ color: 'white' }} onClick={toggleDrawer(true)}><MenuIcon /></Button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer()}>
            {DrawerList}
          </Drawer>
        </div>
      </div>
    </div>
  );

}
export default Navbar;
