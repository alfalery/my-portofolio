import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

// ⬅️ Import foto dari src/assets/images
import avatar from '../assets/images/avatar.jpg';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/alfalery" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alfalery-ady-putra-1ab0b92a3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Alfalery Ady Putra</h1>
          <p>Junior Full Stack Engineer & Artificial Intelligence Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/alfalery" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alfalery-ady-putra-1ab0b92a3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
