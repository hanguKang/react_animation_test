import { motion } from 'framer-motion';
import React from 'react';

 const AnimatedButton = ( {onBtnClick} : { onBtnClick:()=> void } ) => {
  // 각 상태별로 다른 값을 관리하기 위한 useState
  const [hoverScaleValue, setHoverScaleValue] = React.useState(1.5); // hover 시 적용될 scale 값
  const [pressedScaleValue, setPressedScaleValue] = React.useState(0.5); // pressed 시 적용될 scale 값
  const [isClicked, setIsClicked] = React.useState(false);

  const buttonVariants = {
    rest: {
      scale: 1,
      transition: { duration: 0.2 } // rest 상태로 돌아갈 때 부드럽게
    },
    hover: {
      scale: hoverScaleValue, // useState에서 관리하는 hoverScaleValue를 직접 사용
      transition: { duration: 0.3 }
    },
    pressed: {
      scale: pressedScaleValue, // useState에서 관리하는 pressedScaleValue를 직접 사용
      transition: { duration: 0.1 }
    },
  };

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    // 클릭 시 pressedScaleValue를 변경하는 등 로직 추가
    setPressedScaleValue(0.4); 
    // hoverScaleValue도 필요에 따라 변경 가능
    setHoverScaleValue(1.3);
    
    onBtnClick();
  };

  return (
    <motion.button
      initial="rest"
      whileHover="hover" // whileHover 시 'hover' variant 실행
      whileTap="pressed" // whileTap 시 'pressed' variant 실행
      variants={buttonVariants}
      onClick={handleButtonClick}
    >
      모달 열어!
    </motion.button>
  );
};

export default AnimatedButton;