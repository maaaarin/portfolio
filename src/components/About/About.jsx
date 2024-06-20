import React, { useEffect } from 'react'

import sassIcon from '../../assets/img/icons/sass.svg';
import jsIcon from '../../assets/img/icons/js.svg';
import reactIcon from '../../assets/img/icons/react.svg';
import gsapIcon from '../../assets/img/icons/gsap.svg';
import tailwindIcon from '../../assets/img/icons/tailwind.svg';
import javaIcon from '../../assets/img/icons/java.svg';
import nodejsIcon from '../../assets/img/icons/nodejs.svg';
import sqlIcon from '../../assets/img/icons/sql.svg';
import graphqlIcon from '../../assets/img/icons/graphql.svg';
import reduxIcon from '../../assets/img/icons/redux.svg';
import typescriptIcon from '../../assets/img/icons/typescript.svg';
import nextjsIcon from '../../assets/img/icons/nextjs.svg';
import mongodbIcon from '../../assets/img/icons/mongodb.svg';

const About = () => {

    useEffect(() => {

        const portfolio = document.querySelector('.bg-portfolio'),
                nav_about = document.querySelector('.nav-about'),
                home_button = document.querySelector('.home-button');

        home_button.classList.remove('lg:hidden');

        nav_about.classList.add('link-active');

        portfolio.classList.add('lg:hidden');

        return () => {
            portfolio.classList.remove('lg:hidden');
            nav_about.classList.remove('link-active');
        }

    }); 

    return (
      <div className="portfolio-about section">
        <div className="about-container">
          <div className="about-main">
            <div className="about-main-title">
              <h2>Hello!</h2>
              <div className="main-title-ellipse"></div>
            </div>
            <p>
              I’m autodidact Web Developer located in Spain, passionate about
              design, challenges and programming. Since I discovered that I can
              combine all of this in web development, it has become my true
              passion.
            </p>
            <p>
              I am aiming to be a Full-Stack Developer, since I want to domain
              as many technologies as possible.
            </p>
          </div>
          <div className="about-sections">
            <div className="about-education">
              <h2>Education</h2>
              <div className="education">
                <span>September 2022 - Present</span>
                <p>Web Application Development | AFA Formación / Unendo</p>
              </div>
              <div className="education">
                <span>January 2020 - Present</span>
                <p>Web Application Development | Self-study</p>
                <p className='subtitle'>Continuous learning on my own.</p>
              </div>
            </div>
            <div className="about-skills">
              <h2>Skills</h2>
              <div className="skills">
                <ul className="skills-list">
                  <li className="skill">
                    <img src={nextjsIcon} />
                    <span>NextJS</span>
                  </li>
                  <li className="skill">
                    <img src={reactIcon} />
                    <span>React</span>
                  </li>
                  <li className="skill">
                    <img src={jsIcon} />
                    <span>JavaScript</span>
                  </li>
                  <li className="skill">
                    <img src={sassIcon} />
                    <span>SASS</span>
                  </li>
                  <li className="skill">
                    <img src={typescriptIcon} />
                    <span>TypeScript</span>
                  </li>
                  <li className="skill">
                    <img src={tailwindIcon} />
                    <span>Tailwind</span>
                  </li>
                </ul>
                <ul className="skills-list">
                  <li className="skill">
                    <img src={javaIcon} />
                    <span>Java</span>
                  </li>
                  <li className="skill">
                    <img src={nodejsIcon} />
                    <span>NodeJS</span>
                  </li>
                  <li className="skill">
                    <img src={sqlIcon} />
                    <span>MySQL</span>
                  </li>
                  <li className="skill">
                    <img src={mongodbIcon} />
                    <span>MongoDB</span>
                  </li>
                  <li className="skill">
                    <img src={reduxIcon} />
                    <span>Redux</span>
                  </li>
                  <li className="skill">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                    <span>More</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About