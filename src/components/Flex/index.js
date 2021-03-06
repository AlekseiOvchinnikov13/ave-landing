import classNames from "classnames";
import PropTypes from "prop-types";
import './style/index.scss';
import React from "react";

const Flex = React.forwardRef((
    {alignItems, justifyContent, flexDirection, className, flexWrap, children},
    ref
  ) => {
    const classes = classNames(
      'flex-wrapper',
      {[`align-items-${alignItems}`]: alignItems},
      {[`justify-content-${justifyContent}`]: justifyContent},
      {[`flex-direction-${flexDirection}`]: flexDirection},
      {[`flex-wrap-${flexWrap}`]: flexWrap},
      className);

    return (
      <div className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

Flex.propTypes = {
  alignItems: PropTypes.oneOf(['baseline', 'center', 'flex-start', 'flex-end']),
  justifyContent: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-between', 'space-around']),
  flexDirection: PropTypes.oneOf(['row', 'column']),
  flexWrap: PropTypes.oneOf(['wrap', 'nowrap'])
}

export default Flex;