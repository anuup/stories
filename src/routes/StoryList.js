import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function StoryList() {

    const [stories, setStories] = useState([])
    const navigate= useNavigate()
    useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/posts?_page=1 ")
   .then((res)=>res.json())
   .then ((data)=>setStories(data))
    }, [])

    return(
<div className='grid grid-cols-2 gap-6'>
{stories&&
stories.map((story)=>{

return(

<div className='bg-white border p-6'>

<h2 className=" text-3xl mb-4">{story.title}</h2>

<button className='bg-orange-600 text-white px-3 py-1 rounded' onClick={()=>navigate(`${story.id}`)}>Read Story</button>



</div>

)



}





)



}






</div>


    ) 
}

export default StoryList