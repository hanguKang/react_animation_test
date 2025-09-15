import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const Modal = (props:{ isOpen:boolean, closeModalBasic:()=>void }) => {

  const handleCloseModal = () => {
    props.closeModalBasic();
  }
  return createPortal(
    <AnimatePresence>
      {props.isOpen && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
         <h1>모달</h1>
         <p><button onClick={handleCloseModal}>모달 닫기</button></p>
        </motion.aside>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default Modal;