import React, { useEffect, useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role, description, resume, social } = about;
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const textToType = `Hi, I am ${name}.`;
    const textArray = textToType.split('');
    let currentIndex = 0;
  
    const typingInterval = setInterval(() => {
      if (currentIndex < textArray.length) {
        setTypedText(prevTypedText => prevTypedText + textArray[currentIndex]);
        currentIndex += 1; // Increment outside of setTypedText function
      } else {
        clearInterval(typingInterval);
        // Hide cursor after typing is complete
        setTimeout(() => {
          setCursorVisible(false);
        }, 500); // Adjust time to wait before hiding cursor
      }
    }, 100); // Adjust typing speed
  
    return () => clearInterval(typingInterval);
  }, [name]);
  

  return (
    <div className='about center'>
      <h1>
        {typedText}
        {cursorVisible && <span className='cursor'>&nbsp;</span>}
      </h1>

      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} download="riyad.el-yacoubi_resume.pdf">
            <span className='btn btn--outline'>Resume</span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
