import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedButton from '../Button/AnimatedButton';
import AnimatedButton2 from '../Button/AnimatedButton2';
import Modal from '../Modal/BasicModal';
import Card_motion from '../Card/Card_motion';
import Chart_pie from '../Chart/Chart_pie';

const Layout = (props: {children:React.ReactNode})=>{
    const [someHappend, setSomeHappend] = useState(false);

    const handleSomeHappend = ()=>{
        setSomeHappend(!someHappend);
    }

    const handleChartPie = ()=>{
        
    }
    return(
        <>
            <Header/>
                <main>
                    {props.children}
                    <Chart_pie getData={true}></Chart_pie>
                </main>
                <AnimatedButton onBtnClick={handleSomeHappend}></AnimatedButton>
                <AnimatedButton2></AnimatedButton2>
                <button onClick={handleChartPie}></button>

                <Card_motion></Card_motion>
            <Footer/>
            <Modal isOpen={someHappend} closeModalBasic = {handleSomeHappend}/>
        </>
    )
}

export default Layout