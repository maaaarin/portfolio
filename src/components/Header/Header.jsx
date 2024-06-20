import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";

import musicTrack from '../../assets/audio/music_track.mp3';
import musicThumbnail from '../../assets/img/music_thumbnail.jpeg';

import { Link } from 'react-router-dom';

const Header = () => {

  // Navigation
  const nav_menu = useRef(null);
  const nav_menu_container = useRef(null);

  // Music
  const music_thumbnail = useRef(null);

  useEffect(() => {

    const nav_close = document.querySelector('.nav-close'),
          nav_display = document.querySelector('.nav-display');

    nav_menu.current.classList.add('hidden');

    const tl = gsap.timeline({paused:true})
    .to(nav_menu.current, {
      onReverseComplete: ()=> {
        nav_menu.current.classList.add('hidden');
      },
      opacity: 1,
      duration: 0.25
    })
    .to(nav_menu_container.current, {
      y: 0,
      duration: 0.75,
    });

    const menu_link = document.querySelectorAll('.menu-link');

    nav_display.addEventListener('click', () => {
      nav_menu.current.classList.remove('hidden');
      tl.play();
    });

    nav_close.addEventListener('click', () => {
      tl.reverse();
    });

    menu_link.forEach((link) => {
      link.addEventListener('click', ()=>{
        tl.reverse();
      });
    })

    // Music 

    const music_audio = new Audio(musicTrack),
          music_track = document.querySelector('.music-track'),
          music_start = document.querySelector('.music-start'),
          music_play = document.querySelector('.music-play'),
          music_pause = document.querySelector('.music-pause');
    
    let thumbnail_animation = gsap.to(music_thumbnail.current, {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "none"
    });

    thumbnail_animation.pause();

    // Music Start
    music_start.addEventListener('click', ()=>{
      music_audio.play();
      music_start.classList.add('hidden');
      music_track.classList.remove('hidden');
      music_pause.classList.remove('hidden');
      thumbnail_animation.play();
    });

    // Music Pause
    music_pause.addEventListener('click', ()=>{
        music_audio.pause();
        music_pause.classList.add('hidden');
        music_play.classList.remove('hidden');
        thumbnail_animation.pause();
    });

    // Music Play
    music_play.addEventListener('click', ()=>{
      music_audio.play();
      music_pause.classList.remove('hidden');
      music_play.classList.add('hidden');
      thumbnail_animation.play();
    });

    // Music End
    music_audio.addEventListener('timeupdate', ()=>{
      if(music_audio.ended){
        music_start.classList.remove('hidden');
        music_track.classList.add('hidden');
      }
    })
        
  }, [])

  return (
    <header>
      <div className="nav-display lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="nav-display-icon" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div>
      <Link to="/">
        <div className="home-button hidden lg:flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='home-button-icon' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
          <span>Go Back</span>
        </div>
      </Link> 
      <nav>
        <div className="social hidden md:flex">
          <a href="https://github.com/maaaarin" target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="github-icon" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/andres-marinp/" target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="linkedin-icon"  viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
        </div>
        <div ref={nav_menu} className="nav-menu">
          <div ref={nav_menu_container} className="nav-menu-container">
            <div className="nav-menu-header">
              <div className="menu-social md:hidden">
                <a href="https://github.com/andresmarinn" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="github-icon" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/andres-marin-web/" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="linkedin-icon"  viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
                <div className="nav-close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="nav-close-icon" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
            </div>
            <ul className="nav-menu-list">
              <Link to="/about">
                <li className='menu-link'>ABOUT</li>
              </Link>
              <Link to="/work">
                <li className='menu-link'>WORK</li>
              </Link>
              <Link to="/contact">
                <li className='menu-link'>CONTACT</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="bg-line hidden lg:flex"></div>
        <div className="nav-list">
          <ul className="nav-list-container hidden lg:flex">
            <Link to="/about">
              <li className='nav-about'>About</li>
            </Link>
            <Link to="/work">
              <li className="nav-work">Work</li>
            </Link>
            <Link to="/contact">
              <li className='nav-contact'>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="bg-line hidden lg:flex"></div>
        <div className="music">
          <div className="music-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="music-start-icon" viewBox="0 0 16 16">
              <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
              <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
              <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
            </svg>
          </div>
          <div className="music-track hidden">
            <div className="track-container">
              <img ref={music_thumbnail}className='music-thumbnail' src={musicThumbnail} alt="Music-Thumbnail" />
              <div className="track-information hidden lg:flex">
                <span className=' track-title'>Sea of Problems</span>
                <span className='track-artist'>glichery</span>
              </div>
            </div>
            <div className="music-play hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="music-play-icon" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
              </svg>
            </div>
            <div className="music-pause hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="music-pause-icon" viewBox="0 0 16 16">
                <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </div>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header