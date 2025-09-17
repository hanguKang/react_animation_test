import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
    prefix:'tw-', //자동으로 tailwindcss의 접두사로 tw-md:flex tw-lg:block 이렇게 자동으로 붙음. prefix는 다른 CSS 라이브러리와 클래스 이름 충돌을 피하고 싶을 때 유용
    content: [                                                              // which files to search for tailwind classes
        './app/**/*.{js,ts,jsx,tsx}',                                       /* → Find tailwind classes used as class ='' in files defined here and convert them to CSS */
        './components/**/*.{js,ts,jsx,tsx}',                                 
    ],                                                                      
    theme: {                                                                       
        extend: {                                                           // setting to extend the default tailwind theme
            colors: {
                brand: {                                                    // set brand color
                    DEFAULT: "#FA7275",                                     /* → Register custom color: Use like bg-brand, text-red, bg-light-200 */
                    100: "#EA6365",
                },
                'gray-700':'var(--color-gray-700)', //--color-gray-700 변수를 tail윈드에서 사용하sms 색상 팔레트 gary-700과 연결 
                red: "#FF7474",
                error: "#B80000",
                green: "#3DD9B3",
                orange: "#F9AB72",
                blue: "#56BBFF",
                pink: "#EEA8FD",
                light: {
                    100: "#333F4E",
                    200: "#A3B2C7",
                    300: "#F2F5F9",
                    400: "#F2F4F8",
                },
                dark: {
                    100: "#04050C",
                    200: "#131524"
                }
            },
            fontFamily: {                                                   // set font family
                NotoSans : [                                                 /* → Resister a custom font (ususally a variable declared as @font-face or Google Fonts) with a class name*/
                    "var(--font-notoSansKr)"
                ]
            },
            fontSize: {
                'base': 'var(--text-base)', // --text-base 변수를 Tailwind 폰트 기본 사이즈 연결
            },
            boxShadow: {                                                    // custome shadow setting:
                "drop-1": "0px 10px 30px 0px rgba(66, 71, 97, 0.1)",        // drop-1: default shadow
                "drop-2": "0px 8px 30px 0 rgba(65, 89, 214, 0.3)",          // drop-2: accent shadow     
                "drop-3": "0px 8px 30px 0 rgba(65, 89, 214, 0.1)",          // drop-3: accent shadow
            },
            borderRadius: {                                                 // set border radius
                lg: "var(--radius)",                                        /* → tailwind default rounded-lg classes are mapped to values set here */
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {                                                    // custom animation setting:
                "caret-blink": {                                            /* → custom animation available with tailwind utility animate-caret-blink */
                    "0%, 70%, 100%" : { opacity: "1" },
                    "20%, 50%" : { opacity: "0" }
                }
            },
            animation: {
                "caret-blink": "caret-blink 1.25s ease-out infinite",
            },
        },
    },
    plugins: [                                                              // external tailwind plugins
        tailwindcssAnimate, //require("tailwindcss-animate")는 require와 module.export는 Node.js의 전통적인 모듈 시스템인 Commonjs파일 형식이고 import와 export default는 ESM문법(ECMAScript문법)                                    // tailwindcss-animated: animation plugin
    ],
    
};

export default config;