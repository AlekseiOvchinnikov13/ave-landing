import classNames from "classnames";
import {isMobile} from "../../helpers";
import BinanceIcon from './images/binance-icon.png';
import StoresIcon from './images/stores-icon.png';
import './style/index.scss';

const Footer = () => {
  const classes = classNames('footer', {'footer-mobile': isMobile()});

  return (
    <footer className={classes}>
      <img src={BinanceIcon} alt="binance"/>
      <img src={StoresIcon} alt="appStore GooglePay"/>
    </footer>
  )
}

export default Footer;