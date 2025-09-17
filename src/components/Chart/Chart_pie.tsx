//import {motion} from 'framer-motion';
import {  useEffect } from 'react';
import './Chart_pie.css';

function Chart_pie(props:{getData:boolean}){


    useEffect(()=>{
        const draw = (max:number, selector:string, colorname:string)=>{
            var i=1;
            var func1 = setInterval(function(){
                if(i<max){
                    coloring(i,selector,colorname);
                    i++;
                } else{
                    clearInterval(func1);
                }
            },10);
        }
        const coloring = (i: number, selector:string ,colorname:string) => {
            const element = document.querySelector(selector) as HTMLDivElement;
            if(element){
                element.style.background = `conic-gradient(${colorname} 0% ${i}%, #ffffff ${i}% 100%)`;
            }
        }
        draw(80,'.pie-chart', '#ccc');
    },[props.getData]);
   
    return(
        <>
            <div className='pie-chart'>
                <span className='center'></span>
            </div>
        </>
    )

}

export default Chart_pie;