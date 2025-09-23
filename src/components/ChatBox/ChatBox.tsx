// 이 코드를 실행해보세요!
import { useState, useRef, useEffect } from "react";
interface Message {
  id: number;
  text: string;
  isMine: boolean;
}
function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(()=>{
    if(containerRef.current)
    containerRef.current.scrollTop = containerRef.current?.scrollHeight;
  },[messages]);

  const addMessage = async ()=>{
    let inputValue  = "";
    let newValue = "";
    const chatBox = textRef.current;
    if(chatBox){
        const nowValue = chatBox.value;
        if(chatBox.value.trim() === "") return;

        async function pushData(){
            return new Promise<string>( resolve=>{
    
                setTimeout(()=>{
                     inputValue = nowValue.trim();
                   
                    resolve(inputValue);
                }, Math.ceil(Math.random()*(5 - 3) + 3)*100 );

                
            })
        }

        newValue = await pushData();    
    }

    setMessages((prev) => {
        const newMessages : Message[] = [...prev, { id: Date.now(), text: newValue, isMine: true }];
        return newMessages;
    });
  }

//   const addMessage = () => {
//     let inputValue  = "";
//     if(textRef.current){
//         if(textRef.current.value.trim() === "") return;
//         inputValue = textRef.current.value.trim();
//     }


    
//     console.log("1. setMessages 호출 전");
    


//     setMessages((prev) => {
//         const newMessages : Message[] = [...prev, { id: Date.now(), text: inputValue, isMine: true }];
//         console.log("2. 상태 업데이트 후 (아직 DOM 미반영)");
//         if(containerRef.current != null){
//             console.log("현재 scrollHeight:", containerRef.current.scrollHeight);
//         }
//         return newMessages;
//     });

//     // ❌ 3. 여전히 이전 scrollHeight
//     setTimeout(() => {
//         console.log("3. 0ms 후 (여전히 DOM 미반영)");
//         if(containerRef.current != null){
//             console.log("scrollHeight:", containerRef.current.scrollHeight);
//         }
//     }, 0);

//     setTimeout(() => {
//         console.log("4. 100ms 후 (DOM 반영 후)");
//         if(containerRef.current != null){
//             console.log("scrollHeight:", containerRef.current.scrollHeight);
//         }
//     }, 100);

    
//   };

  
  //const addTextData = ()=>{
    
    //setMessages()
    // if(containerRef.current?.children){
    //     Array.from(containerRef.current.children).forEach(( msg )=>{
    //        msg.getAttribute('id');
    //     });
    // }
    //messages[messages.length-1].id
  //}

  return (
    <div style={{ border: "1px solid black", margin: "20px" }}>
      <button onClick={addMessage}>메시지 추가</button>
      <div
        ref={containerRef}
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid blue",
          padding: "10px",
        }}
      >
        
        { messages.map((msg) => (
          <div
            // id = {String(msg.id)}
            key={msg.id}
            style={{ float:msg.isMine?'right':'left', clear:'both', border:'1px solid red', margin: "5px 0", padding: "5px", background: "#f0f0f0" }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div id="msgInputBox">
        <textarea name="msgTxt" id="msgTxt" ref={textRef}></textarea>
        <button onClick={addMessage}>전송</button>
      </div>
      <div>현재 스크롤 높이: {containerRef.current?.scrollHeight || 0}px</div>
    </div>
  );
}

export default ChatBox;
