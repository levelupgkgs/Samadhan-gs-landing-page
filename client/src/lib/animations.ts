// Animation variants and utilities for consistent motion design
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

export const hoverLift = {
  whileHover: { y: -5, scale: 1.02 },
  whileTap: { scale: 0.98 }
};

export const buttonHover = {
  whileHover: { scale: 1.05, y: -2 },
  whileTap: { scale: 0.95 }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const floatingElement = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    scale: [1, 1.1, 1]
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};