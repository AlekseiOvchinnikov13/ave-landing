import {useEffect, useLayoutEffect, useState} from "react";
import Header from "./components/Header";
import Flex from "./components/Flex";
import Footer from "./components/Footer";
import classNames from "classnames";
import {isMobile} from "./helpers";
import BottomShadow from './assets/images/shadow-bottom.svg';
import Phone from './assets/images/phone.png';
import SocialLink from "./components/SocialLink";
import CharactersSlider from "./components/CharactersSlider";
import SignInButton from "./components/SignInButton";
import './app.scss';
import 'react-slideshow-image/dist/styles.css';

const App = () => {
  const [, setSize] = useState([0, 0]);
  const updateSize = () => setSize([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    isMobile()
      ? document.querySelector("html").classList.remove('overflow-hidden')
      : document.querySelector("html").classList.add('overflow-hidden')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile()]);

  const AppWrapperClasses = classNames('app-wrapper', {'app-wrapper-mobile': isMobile()})

  return (
    <>
      <Flex
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        className={AppWrapperClasses}
      >
        {!isMobile() && <img className='bottom-shadow-bg' src={BottomShadow} alt='shadow'/>}
        <img className='phone-bg' src={Phone} alt='phone'/>
        {!isMobile() && <CharactersSlider className='carousel-desktop'/>}
        <Header/>
        <Flex flexDirection='column' justifyContent='space-between' className='content'>
          {isMobile() && <CharactersSlider className='carousel-mobile'/>}
          <Flex flexDirection='column' alignItems='flex-start' justifyContent='center' className='content-text'>
            {isMobile() && <img className='bottom-shadow-bg' src={BottomShadow} alt='shadow'/>}
            <h1 className='content-text__title'>
              WORLDWIDE mobile nft PVP GAME
            </h1>
            <p className='content-text__text'>
              Choose your side in&nbsp;a&nbsp;massive mobile worldwide game where you can earn NFT rewards, and upgrade
              your character. Grind the real world to&nbsp;find preseason rewards
            </p>
            <SignInButton className='content-text__button'/>
            {isMobile() && <SocialLink/>}
          </Flex>
        </Flex>
        <Footer/>
      </Flex>
    </>
  );
}

export default App;
