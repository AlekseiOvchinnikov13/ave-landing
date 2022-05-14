const MOBILE_WIDTH = '1024';

/**
 * Check for mobile screens width
 * @returns {boolean}
 */
export const isMobile = () =>
  window.innerWidth <= MOBILE_WIDTH;

/**
 * Check for landscape orientation
 * @returns {boolean}
 */
export const isLandscapeOrientation = () =>
  window.orientation === 90 || window.orientation === -90;