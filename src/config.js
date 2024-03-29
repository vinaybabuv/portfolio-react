module.exports = {
  siteTitle: 'Vinay Vanteddu | Software Engineer',
  siteDescription:
    'Vinay Vanteddu is a software engineer based in Dallas, TX who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Vinay Vanteddu, Vinay, Vanteddu, software engineer, front-end engineer, web developer, javascript, usd',
  siteUrl: 'https://vanteddu.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Vinay Vanteddu',
  location: 'Irving, TX',
  email: 'vinay.naidu003@gmail.com',
  github: 'https://github.com/vinaybabuv',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/vinaybabuv',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vinayvanteddu/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/vinaynaiduv',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vinay_vanteddu/?hl=en',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Education',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
