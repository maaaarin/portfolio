import React, { useEffect, useRef } from 'react'

import work1 from '../../assets/img/work/work_1.png';
import work2 from '../../assets/img/work/work_2.png';
import work3 from '../../assets/img/work/work_3.png';
import work4 from '../../assets/img/work/work_4.png';
import sassIcon from '../../assets/img/icons/sass.svg';
import jsIcon from '../../assets/img/icons/js.svg';
import reactIcon from '../../assets/img/icons/react.svg';
import graphqlIcon from '../../assets/img/icons/graphql.svg';
import reduxIcon from '../../assets/img/icons/redux.svg';
import typescriptIcon from '../../assets/img/icons/typescript.svg';
import nextjsIcon from '../../assets/img/icons/nextjs.svg';
import mongodbIcon from '../../assets/img/icons/mongodb.svg';
import tailwindIcon from '../../assets/img/icons/tailwind.svg';

import { gsap } from "gsap";

const Work = () => {

    const works = useRef(null);

    useEffect(() => {

        const portfolio = document.querySelector('.bg-portfolio'),
                nav_work = document.querySelector('.nav-work'),
                home_button = document.querySelector('.home-button');

        home_button.classList.remove('lg:hidden');

        nav_work.classList.add('link-active');

        portfolio.classList.add('lg:hidden');

        let works_context = gsap.context(() => {

            gsap.from(works.current, { 
                x: -45, 
                opacity: 0, 
                stagger: 0.20
            });
        }, works)

        return () => {
            works_context.revert();
            portfolio.classList.remove('lg:hidden');
            nav_work.classList.remove('link-active');
        }

    }); 

    return (
    <div className='portfolio-work section'>
        <div ref={works} className="works-container">
        <div className="work" style={{ backgroundImage: "url(" + work4 + ")" }}>
                <a className="work-link" href="https://marins-japanese-restaurant.netlify.app/" target="_blank">
                    <div className="work-container">
                        <span className='work-title'>Marín's Asian Store</span>
                        <ul className="work-tech">
                            <li className='tech-icon'>
                                <img src={nextjsIcon}/>
                            </li>
                            <li className='tech-icon'>
                                <img src={typescriptIcon}/>
                            </li>
                            <li className='tech-icon'>
                                <img src={tailwindIcon}/>
                            </li>
                            <li className='tech-icon'>
                                {<img src={reactIcon}/>}
                            </li>
                            <li className='tech-icon'>
                                {<img src={reduxIcon}/>}
                            </li>
                            <li className='tech-icon'>
                                {<img src={sassIcon}/>}
                            </li>
                            <li className='tech-icon'>
                                {<img src={mongodbIcon}/>}
                            </li>
                        </ul>
                    </div>
                </a>
                <div className="work-preview">
                    <a className="work-link" href="https://marins-japanese-restaurant.netlify.app/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="work-link-icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="work" style={{ backgroundImage: "url(" + work2 + ")" }}>
                <a className="work-link" href="https://marins-japanese-restaurant.netlify.app/" target="_blank">
                    <div className="work-container">
                        <span className='work-title'>Marín's Japanese Restaurant</span>
                        <ul className="work-tech">
                            <li className='tech-icon'>
                                <img src={jsIcon}/>
                            </li>
                            <li className='tech-icon'>
                                {<img src={sassIcon}/>}
                            </li>
                        </ul>
                    </div>
                </a>
                <div className="work-preview">
                    <a className="work-link" href="https://marins-japanese-restaurant.netlify.app/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="work-link-icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="work" style={{ backgroundImage: "url(" + work3 + ")" }}>
                <a className="work-link"href="https://animes-app-am.netlify.app/" target="_blank">         
                    <div className="work-container">
                        <span className='work-title'>Anime App</span>
                        <ul className="work-tech">
                            <li className='tech-icon'>
                                {<img src={reactIcon}/>}
                            </li>
                            <li className='tech-icon'>
                                {<img src={graphqlIcon}/>}
                            </li>
                            <li className='tech-icon'>
                                {<img src={reduxIcon}/>}
                            </li>
                            <li className='tech-icon'>
                                <img src={jsIcon}/>
                            </li>
                            <li className='tech-icon'>
                                {<img src={sassIcon}/>}
                            </li>
                        </ul>
                    </div>
                </a>
                <div className="work-preview">
                    <a className="work-link"href="https://animes-app-am.netlify.app/" target="_blank">         
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="work-link-icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="work" style={{ backgroundImage: "url(" + work1 + ")" }}>
                <a className="work-link" href="https://steam-redesign.netlify.app/" target="_blank">
                    <div className="work-container">
                        <span className='work-title'>Steam Re-Design</span>
                        <ul className="work-tech">
                            <li className='tech-icon'>
                                {<img src={sassIcon}/>}
                            </li>
                        </ul>
                    </div>
                </a>
                <div className="work-preview">
                    <a className="work-link" href="https://steam-redesign.netlify.app/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="work-link-icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                        </svg>
                    </a>
                </div>
            </div>


            <div className="work work-empty hidden xl:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='work-empty-icon' viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                </svg>
            </div>
        </div>
    </div>
    )
}

export default Work