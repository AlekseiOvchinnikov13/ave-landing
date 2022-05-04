import {SOCIAL_LINKS} from "../../data";
import './style/index.scss';

const SocialLink = () => {
  return (
    <ul className='social-links'>
      {SOCIAL_LINKS.map(link => 
        <li key={link.id}>
          <a href={link.href}>
            <img src={link.img} alt={link.id}/>
          </a>
        </li>
      )}
    </ul>
  )
}

export default SocialLink;