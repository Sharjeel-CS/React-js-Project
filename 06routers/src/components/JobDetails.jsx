import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    
    const jobDetails=useLoaderData() 
   
  return (
    <div>
        <p><b>Job Title: </b>{jobDetails.title}</p>
        <p><b>Salry : </b>{jobDetails.salary}</p>
        <p><b>Job Location: </b>{jobDetails.location}</p>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader=async ({params})=> {
    const {id}=params;
    const res= await fetch("http://localhost:5000/jobs/" +id);

    return res.json();

}