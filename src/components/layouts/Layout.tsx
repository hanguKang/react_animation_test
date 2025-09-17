import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedButton from '../Button/AnimatedButton';
import AnimatedButton2 from '../Button/AnimatedButton2';
import Modal from '../Modal/BasicModal';
import Card_motion from '../Card/Card_motion';
import Chart_pie from '../Chart/Chart_pie';

const Layout = (props: {children:React.ReactNode})=>{
    const [someHappend, setSomeHappend] = useState(false);
    const [chartData, setChartData] = useState({value:0, color:'#007BFF'});

    const handleSomeHappend = ()=>{
        setSomeHappend(!someHappend);
    }

    const handleChartPie = ()=>{
        
    }

    // 실제 데이터를 가져오는 로직 (예: API 호출)
    useEffect(() => {
        // 실제 데이터 fetch 로직을 여기에 구현
        setTimeout(() => {
            const fetchedData = { value: 80, color: '#007BFF' };
            setChartData(fetchedData);
        }, 1000); // 1초 후 데이터가 도착했다고 가정
    }, []);

    return(
        <>
            <Header/>
                <main>
                    {props.children}
                    <Chart_pie getData={chartData}></Chart_pie>
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