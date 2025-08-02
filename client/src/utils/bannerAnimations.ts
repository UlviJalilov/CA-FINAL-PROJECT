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
      x: -1000,
      rotate: -45,
      opacity: 0.2,
      scale: 0.9,
    },
    animate: {
      x: [-1000, -600, -300, -100, -30, -10, 0, -5, 0],
      rotate: [-45, -30, -15, -5, 0, 3, -2, 0],
      opacity: [0.2, 0.4, 0.6, 0.8, 1],
      scale: [0.9, 0.95, 1, 1.02, 1],
      transition: {
        duration: 1.8,
        ease: [0.65, 0, 0.35, 1] as const,
      },
    },
  },
];
