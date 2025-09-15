import { motion } from 'framer-motion';
import React from 'react';

type AnimatedActionProp = {
    hoverScale:number,
    hoverColor: string,
    pressedScale: number, 
    pressedColor:string,
}

const AnimatedButton2 = () => {
  const [someState, setSomeState] = React.useState(false); // 예를 들어, 복잡한 상태

  const buttonVariants = {
    hover: (value : AnimatedActionProp) => ({ // value는 custom prop으로 전달받음
      scale: value.hoverScale, // value 객체에서 hoverScale 추출
      backgroundColor: value.hoverColor, // 다른 속성도 전달 가능
      transition: { duration: 0.3 }
    }),
    pressed: (value: AnimatedActionProp ) => ({ // value는 custom prop으로 전달받음
      scale: value.pressedScale,
      backgroundColor: value.pressedColor,
      transition: { duration: 0.1 }
    }),
    rest: {
      scale: 1,
      backgroundColor: '#fff',
      transition: { duration: 0.2 }
    },
  };

  const handleButtonClick = () => {
    setSomeState(!someState);
    // custom prop으로 전달할 객체의 값을 변경
  };

  // custom prop으로 전달할 객체
  const customProps : AnimatedActionProp = {
    hoverScale: someState ? 1.3 : 1.5,
    hoverColor: someState ? 'lightblue' : 'lightgreen',
    pressedScale: someState ? 0.4 : 0.5,
    pressedColor: someState ? 'darkblue' : 'darkgreen',
  };

  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      variants={buttonVariants}
      custom={customProps} // 객체를 custom prop으로 전달
      onClick={handleButtonClick}
      style={{ backgroundColor: '#fff' }} // 초기 배경색
    >
      Click me!
    </motion.button>
  );
};


export default AnimatedButton2;