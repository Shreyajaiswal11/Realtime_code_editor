import React,{useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

 const Home = () => {
   const navigate=useNavigate();
  const [roomId,setRoomId]=useState('')
  const [username,setusername]=useState('')
   const createNewRoom =(e) =>{
   e.preventDefault();
   const id = uuidV4();
   setRoomId(id)
   toast.success('Created a new room')
   };

const joinRoom =() =>{
  if(!roomId || !username){
    toast.error('Room Id & username is required')
    return;
  }
//redirect
navigate(`/editor/${roomId}`,{
  state:{
    username,
  }
})
}
const handleInputEnter =(e)=>{
  if(e.code==='Enter'){
    joinRoom();
  }
}

  return (
   <div className="homePageWrapper">
     <div className="formWrapper">
       <img className="homePageLogo" src="code-sync.png" alt="code-sync-logo"/>
       <h4 className="mainLabel">Paste Room Invitation Id</h4>
       <div className="formGroup">
         <input type="text" className="inputBox" placeholder="ROOM ID" value={roomId}
           onChange={(e)=>setRoomId(e.target.value)}
           onKeyUp={handleInputEnter}
         />
         <input type="text" className="inputBox" placeholder="USERNAME" value={username} onChange={(e)=>{setusername(e.target.value)}}
           onKeyUp={handleInputEnter}
         />
         <button className="btn joinBtn" onClick={joinRoom}>JOIN</button>
         <span className="createInfo"> If you don't have an invite then create &nbsp; 
         <a onClick={createNewRoom} href="" className="createNewBtn">new room</a>
         </span>
       </div>


     </div>
     <footer>
       <h4>Made with ❤️ by <a href="https://github.com/Shreyajaiswal11">Shreyajaiswal11</a></h4>
     </footer>
   </div>
  ) 
}
export default Home;
