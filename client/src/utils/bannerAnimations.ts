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
      x: [-1200, -800, -400, -150, -50, 0, -10, 0],
      y: [0, 10, -8, 5, -3, 0], 
      rotate: [-50, -35, -20, -5, 0, 5, -3, 0], 
      scale: [0.9, 0.96, 1.02, 1, 1.01, 1],
      opacity: [0.2, 0.5, 0.7, 0.9, 1],
      transition: {
        duration: 2.0,
        ease: [0.65, 0, 0.35, 1],
      },
    },
   
    whileHover: {
      rotate: [-2, 2, -1, 1, 0],
      transition: { duration: 0.6, repeat: Infinity, repeatType: "loop" },
    },
  }


];
