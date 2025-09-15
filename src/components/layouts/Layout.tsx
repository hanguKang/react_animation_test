import Header from './Header';
import Footer from './Footer';
import AnimatedButton from '../Button/AnimatedButton';
import AnimatedButton2 from '../Button/AnimatedButton2';
import Modal from '../Modal/BasicModal';
import { useState } from 'react';

const Layout = (props: {children:React.ReactNode})=>{
    const [someHappend, setSomeHappend] = useState(false);

    const handleSomeHappend = ()=>{
        setSomeHappend(!someHappend);
    }
    return(
        <>
            <Header/>
                <main>{props.children}</main>
                <AnimatedButton onBtnClick={handleSomeHappend}></AnimatedButton>
                <AnimatedButton2></AnimatedButton2>
            <Footer/>
            <Modal isOpen={someHappend} closeModalBasic = {handleSomeHappend}/>
        </>
    )
}

export default Layout