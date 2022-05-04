import {useLayoutEffect, useState} from "react";
import Header from "./components/Header";
import Flex from "./components/Flex";
import Footer from "./components/Footer";
import classNames from "classnames";
import {isMobile} from "./helpers";
import YellowStripes from './assets/images/yellow-stripes.png';
import BottomShadow from './assets/images/shadow-bottom.svg';
import Logo from "./components/Logo";
import './app.scss';
import SocialLink from "./components/SocialLink";

const App = () => {

  const [, setSize] = useState([0, 0]);
  const updateSize = () => setSize([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const AppWrapperClasses = classNames('app-wrapper', {'app-wrapper-mobile': isMobile()})

  return (
    <>
      <Flex
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        className={AppWrapperClasses}
      >
        <img className='yellow-stripes-bg' src={YellowStripes} alt='stripes'/>
        <img className='bottom-shadow-bg' src={BottomShadow} alt='shadow'/>
        <Header/>
        <Flex flexDirection='column' justifyContent='space-between' className='content'>
          {!isMobile() && <Logo/>}
          <Flex flexDirection='column' alignItems='flex-start' justifyContent='center' className='content-text'>
            <h1 className='content-text__title'>WORLDWIDE mobile nft PVP GAME</h1>
            <p className='content-text__text'>
              Choose your side in&nbsp;a&nbsp;massive mobile worldwide game where you can earn NFT rewards, and upgrade
              your character. Grind the real world to&nbsp;find preseason rewards
            </p>
            <button className='content-text__button'>REGISTER with METAMASK</button>
            {isMobile() && <SocialLink/>}
          </Flex>
          {!isMobile() && <div className='empty-block'/>}
        </Flex>
        <Footer/>
      </Flex>
    </>
  );
}

export default App;
