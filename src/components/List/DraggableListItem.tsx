import {motion, useMotionValue} from 'framer-motion'
import { useRef } from 'react'

interface DraggableListItemProps {
  text: string;
  index: number;
  onMove: (fromIndex: number, toIndex: number) => void;
  items: React.ReactNode[];
}

function DraggableListItem ({ text, index, onMove, items }:DraggableListItemProps){
    const dragRef  = useRef<HTMLLinkElement>(null); // 이걸 선언한 이유는 li 아이템들을 선택하려고 하는건데 useRef로 선언한 이유를 알 수 있을까?
    const y = useMotionValue(0); //y의 위치를 추적
    

    //드래그가 끝났을 때의 정보 저장하여 위치를 지정
    const handleDragEnd = (event, info)=>{
        const handleDragStart = ()=>{
            
        }
        const dragOffset = y.get();
        const itemHeight = dragRef.current.clientHeight;
        const newIndex = Math.round(dragOffset / itemHeight);

        if(newIndex != index && newIndex >= 0 && newIndex < items.length) {}
    }
    return(
        <>
            <ul>
                <li>아이템 1 <button onDrag={}>이동</button></li>
                <li>아이템 2 <button onDrag={}>이동</button></li>
                <li>아이템 3 <button onDrag={}>이동</button></li>
            </ul>
        </>
    )
}

export default DraggableListItem;