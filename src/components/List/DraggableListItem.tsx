import {motion, useMotionValue} from 'framer-motion'
import { useRef } from 'react'

interface DraggableListItemProps {
  text: string;
  index: number;
  onMove: (fromIndex: number, toIndex: number) => void;
  items: unknown[];
}

function DraggableListItem ({ text, index, onMove, items }:DraggableListItemProps){
    const dragRef  = useRef(null);
    const y = useMotionValue(0); //y의 위치를 추적
    
    //드래그가 끝났을 때의 정보 저장하여 위치를 지정
    const handleDragEnd = (event, info)=>{
        const dragOffset = y.get();
        const itemHeight = dragRef.current.clientHeight;
        const newIndex = Math.round(dragOffset / itemHeight);

        if(newIndex != index && newIndex >= 0 && newIndex < items.length) {}
    }
    return(
        <>
        
        </>
    )
}

export default DraggableListItem;