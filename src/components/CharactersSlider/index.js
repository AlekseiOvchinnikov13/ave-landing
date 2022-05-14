import {CHARACTERS} from "../../data";
import {Fade} from "react-slideshow-image";
import classNames from "classnames";
import {isLandscapeOrientation, isMobile} from "../../helpers";

const settingsSlider = {
  duration: 2000,
  transitionDuration: 800,
  arrows: false,
  pauseOnHover: false,
};

const CharactersSlider = ({className}) => {
  const classes = classNames('carousel', className);

  return (
    <Fade {...settingsSlider} className={classes}>
      {CHARACTERS.map(character =>
        <img
          key={character.id}
          src={isMobile() ?
            isLandscapeOrientation()
              ? character.img
              : character.imgMobile
            : character.img}
          alt={`person-${character.id}`}/>
      )}
    </Fade>
  )
}

export default CharactersSlider;