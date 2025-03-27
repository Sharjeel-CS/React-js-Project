import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/UserDetailSlice';
import { CustomModal } from './CustomModal';
import { Link } from 'react-router-dom';

const Read = () => {
 
     const dispatch=useDispatch();

     const {users, loading,searchData} = useSelector((state)=>state.app)


     // logic for showing CustomModal
     const [id, setId]= useState()

     const [showPopup, setPopup]=useState(false) 


     //==========/\==============

     //for radio button
     const [radioData , setRadioData]=useState("");

     useEffect(()=>{

        dispatch(showUser());

     },[dispatch])


     if (loading){
        return <h2>Loading...</h2>;
     }
 
 
  
    return (
    <div className='my-50'>

     
        {showPopup && <CustomModal id={id} showPopup={showPopup}  setPopup={setPopup}/>}


        <h2 className="text-center mt-5">All data</h2>

    
       <input className="form-check-input" type="radio"  name="gender"  
       checked={radioData === ""} 
       onChange={(e)=>setRadioData("")}
       />
       <label className="form-check-label" >
        All
        </label>

        
        <input className="form-check-input" type="radio" name="gender"  value="Male"
        checked={radioData === "Male"}
            onChange={(e)=>setRadioData(e.target.value)}
         />
        <label className="form-check-label" >
        Male
       </label>


        <input className="form-check-input" type="radio"   name="gender" value="Female"
        checked={radioData === "Female"}
            onChange={(e)=>setRadioData(e.target.value)}
        />
      <label className="form-check-label">
        Female
       </label>

        
        <div>
        { users && 
            
            users
            .filter((ele)=>{
                if(searchData.length===0){
                    return ele;
                }
                else{
                    return ele.name.toLowerCase().includes(searchData.toLowerCase());
                }
            })
            .filter((ele)=>{
                if(radioData==='Male'){
                    return ele.gender===radioData;
                }
                else if(radioData==='Female'){
                    return ele.gender===radioData;
                }
                else return ele;
            })
            

             .map((ele)=>(<div className="card w-90 mx-auto my-2" key={ele.id}>
  <div className="card-body">
    <h5 className="card-title">{ele.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
    <p className="card-text">{ele.gender}</p>
    <button href="#" className="card-link"  onClick={()=>[setId(ele.id), setPopup(true)]}>View</button>

    <Link to={`/edit/${ele.id}`} className="card-link">Edit</Link>
    <Link onClick={()=>dispatch(deleteUser(ele.id))} className="card-link">Delete</Link>
  </div>
</div>))}
        </div>
        
        </div>
  )
}

export default Read