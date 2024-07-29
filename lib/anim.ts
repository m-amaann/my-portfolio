export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const slideLeft = {
  initial: {
    x: "30%",
    opacity: 0,
  },
  open: (i: number) => ({
    x: "0%",
    transition: { duration: 0.8, delay: 0.05 * i },
  }),
  closed: {
    x: "30%",
    opacity: 0,
    transition: { duration: 0.8 },
  },
};

export const slideUpHeading = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05 + 2.8,
      duration: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
};

export const slideUpDesc = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 3.5,
      duration: 0.5,
    },
  }),
};

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const projectViewOpacity = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.15 },
  },
};

export const preloaderSlideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const preloaderSlide = {
  hidden: { opacity: 0, y: 50 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05 + 0.3,
      duration: 0.6,
    },
  }),
  closed: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.6,
    },
  },
};

export const slideUpContact = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.6, delay: 0.1 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.6 },
  },
};

export const projectNumberScroll = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};
