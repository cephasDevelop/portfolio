import React, { useState,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';
import './navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

const NavBar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    },[location]);

    return (
        <div className='el-navbar' id={expandNavbar?"open":"close" }>
            <div className='el-toggleButton'>
                <button onClick={()=> setExpandNavbar(prev=>!prev)}><ReorderIcon /></button>
            </div>
            <div className='el-links'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
            </div>
        </div>
  )
}

export default NavBar;
