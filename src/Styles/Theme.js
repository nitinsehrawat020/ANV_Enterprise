const size = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export { size, device };
