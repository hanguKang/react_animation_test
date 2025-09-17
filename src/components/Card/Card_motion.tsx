import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled  from '@emotion/styled';
import {css, keyframes } from '@emotion/react';
import './Card_motion.css';

const gradientShift = keyframes`
    from {
        background-size:50% 10%;
        --gradient-from: #ff0000;
    }
    to {

        background-size:100% 10%;
        --gradient-from: #0000ff;

    }
`
const DynamicBox = styled.div`
    width:200px; height:50px; 
    border: 1px solid green; 
    background: linear-grident(to right, var(--tw-gradient-from) 100px, #fff 200px) no-repeat;
    transition: --tw-gradient-from 0.5s ease; 
`



function BasicCard () {
    const [gradientColor, setGradientColor] = useState('#ff0000'); // 초기 빨강

    // 예시: 5초마다 색상 변경 (실제로는 필요에 따라 로직 변경)
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //     setGradientColor(gradientColor === '#ff0000' ? '#0000ff' : '#ff0000');
    //     }, 5000);
    //     return () => clearTimeout(timer);
    // }, [gradientColor]);

    function handleGradientDiv() {
        setGradientColor(prev => prev = prev === '#ff0000'? '#0000ff':'#ff0000');
    }

    
    const dynamicGrident = css`
        width:200px; height:50px; border:1px solid green;
        animation: ${gradientShift} 3s infinite alternate;
        background: linear-gradient(to right, ${gradientColor} 100px, #ffffff 200px) repeat-Y;
    `
    const DynamicGradientDiv = styled.div`
        ${dynamicGrident}
    `
    return(
        <>
            <motion.div className="motionDiv"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                    ease: 'easeInOut',
                    duration: 2,
                    x: { duration: 1 },
                }}
            >
                <h1>카드 디자인</h1>
                <p>카드 내용</p>
                <div className="tailwindcssGrident"> 그라디언트 </div>
                <DynamicGradientDiv> 그라디언트 클릭 !! </DynamicGradientDiv>
                <div className="tailwindcssGrident_ver2" style={{'--tw-gradient-from': gradientColor} as React.CSSProperties }> 동적 그라디언트 색상 변경</div>
                <DynamicBox style={ { '--tw-gradient-from': gradientColor } as React.CSSProperties } > 작동 안되는 이유는 scope문제 정적 css와 동적으로 생성되는 emotion 의 css값의 scope가 맞지 않는다. </DynamicBox>
                <button onClick={handleGradientDiv}>색상 변경</button>
            </motion.div>
        </>
    );
}

export default BasicCard;