import React from 'react'
import "./CustomModal.css";
import { useSelector } from 'react-redux';

export const CustomModal = ({id, showPopup, setPopup}) => {

    const AllUsers= useSelector((state)=>state.app.users);

    const singleUser= AllUsers.filter((ele)=> ele.id===id);

  return (
    <div className='modalBackground '>
        <div className='modalContainer'>
            <button onClick={()=>setPopup(false)}>Close</button>
            <h2>{singleUser[0].name}</h2>
            <h3>{singleUser[0].email}</h3>
            <h4>{singleUser[0].age}</h4>
            <p>{singleUser[0].gender}</p>

        </div>
    </div>
  )
}
