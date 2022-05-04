import LogoPng from './images/logo.png';

const styleLogo = {width: '100%'}

const Logo = () =>
  <img className='logo' src={LogoPng} alt="BITSIDERS" style={styleLogo}/>

export default Logo;