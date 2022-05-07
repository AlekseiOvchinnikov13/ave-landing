import LogoPng from './images/logo.svg';

const styleLogo = {width: '100%'}

const Logo = () =>
  <img className='logo' src={LogoPng} alt="BITSIDERS" style={styleLogo}/>

export default Logo;