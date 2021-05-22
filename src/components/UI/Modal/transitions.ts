/* eslint-disable import/no-anonymous-default-export */
const modal = {
  from: {
    transform: "translate3d(0,100vh,0)",
  },
  enter: {
    transform: "translate3d(0,0vh,0)",
  },
  leave: {
    transform: "translate3d(0,100vh,0)",
  },
  config: {
    mass: 1,
    tension: 700,
    friction: 55,
  },
};

export default {
  modal,
};
