import {useLayoutEffect, useState} from "react";
import Header from "./components/Header";
import Flex from "./components/Flex";
import Footer from "./components/Footer";
import classNames from "classnames";
import {isMobile} from "./helpers";
import YellowStripes from './assets/images/yellow-stripes.png';
import BottomShadow from './assets/images/shadow-bottom.svg';
import Phone from './assets/images/phone.png';
import Logo from "./components/Logo";
import SocialLink from "./components/SocialLink";
import {CHARACTERS} from "./data";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import './app.scss';

const settingsSlider = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000
};

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
        <img className='phone-bg' src={Phone} alt='phone'/>
        <img className='bottom-shadow-bg' src={BottomShadow} alt='shadow'/>
        <Slider {...settingsSlider} className='app-wrapper__carousel'>
          {CHARACTERS.map(character =>
            <img key={character.id} src={character.img} alt={`person-${character.id}`}/>
          )}
        </Slider>
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
