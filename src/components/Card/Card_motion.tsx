import { motion } from 'framer-motion';

<motion.div className='mt:800px' 
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

</motion.div>