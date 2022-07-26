import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import './footer.css';

const Footer = () => {
  return (
      <div className='el-footer'>
          <div className="socialMedia">
              <a href='https://www.linkedin.com/in/simon-kefele-cephas' target='_blank' rel="noreferrer"><LinkedInIcon/></a>
              <a href='https://www.github.com/cephasDevelop' target='_blank' rel="noreferrer"><GitHubIcon/></a>
              <a href='https://www.linkedin.com/in/simon-kefele-cephas' target='_blank' rel="noreferrer"><PersonIcon/></a>
          </div>
          <p> &copy; 2022 Simon Kefele</p>
      </div>
  )
}

export default Footer;
