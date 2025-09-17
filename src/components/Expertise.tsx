import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';   // ikon AI
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "React", "JavaScript", "HTML5", "CSS3", "SASS", "PHP", "Git", "Laravel",
  "Python", "SQL", "PostgreSQL", "Postman"
];

const labelsAI = [
  "Python",
  "PyTorch",
  "Google Colab",
  "Scikit-learn",
  "Captum"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {/* Full Stack */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch using modern
              technologies such as Laravel. I have a strong proficiency in the SDLC process
              and frontend + backend development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Artificial Intelligence */}
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>Artificial Intelligence</h3>
            <p>
              I am passionate about exploring the field of Artificial Intelligence, focusing
              on deep learning and Transformer-based models. I work with tools and frameworks
              commonly used in building, training, and interpreting AI models.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools & Frameworks:</span>
              {labelsAI.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
