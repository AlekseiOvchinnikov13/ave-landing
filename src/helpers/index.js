const MOBILE_WIDTH = '1024';

/**
 * Check for mobile screens width
 * @returns {boolean}
 */
export const isMobile = () =>
  window.innerWidth <= MOBILE_WIDTH;