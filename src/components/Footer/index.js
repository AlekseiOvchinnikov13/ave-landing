import classNames from "classnames";
import {isMobile} from "../../helpers";
import BinanceIcon from './images/binance-icon.svg';
import AppStoreIcon from './images/app-store-icon.svg';
import GooglePlayIcon from './images/google-pay-icon.svg';
import Flex from "../Flex";
import './style/index.scss';

const Footer = () => {
  const classes = classNames('footer', {'footer-mobile': isMobile()});

  return (
    <footer className={classes}>
      <img className='binance-img' src={BinanceIcon} alt="binance"/>
      <Flex>
        <img src={AppStoreIcon} alt="App Store"/>
        <img src={GooglePlayIcon} alt="Google Play"/>
      </Flex>
    </footer>
  )
}

export default Footer;