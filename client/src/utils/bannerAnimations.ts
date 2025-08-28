export const bannerAnimations = [
  {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  {
    initial: { x: 100, scale: 1, opacity: 1 },
    animate: { x: 0, scale: 1, opacity: 1 },
  },
  {
    initial: {
      x: -1200,
      y: 0,
      rotate: -50,
      scale: 0.9,
      opacity: 0.2,
    },
    animate: {
      x: [-1200, -600, -100, 0, 10, 0],
      y: [0, -20, 5, 0, -5, 0],
      rotate: [-45, -10, 5, 0, -2, 0],
      scale: [0.8, 1.05, 1, 1.02, 1, 1],
      opacity: [0, 0.5, 0.8, 1, 1, 1],
    },
    transition: {
      duration: 5,
      ease: [0.65, 0, 0.35, 1],
    },

    whileHover: {
      rotate: [-2, 2, -1, 1, 0],
      transition: { duration: 0.6, repeat: Infinity, repeatType: "loop" },
    },
  }


];
