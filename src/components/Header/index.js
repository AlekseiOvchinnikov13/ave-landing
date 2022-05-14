import {isMobile} from "../../helpers";
import classNames from "classnames";
import Logo from "../Logo";
import SocialLink from "../SocialLink";
import './style/index.scss';

const Header = () => {
  const classes = classNames('header', {'header-mobile': isMobile()});

  return (
    <header className={classes}>
      <Logo/>
      {!isMobile() && <SocialLink/>}
    </header>
  )
}

export default Header;