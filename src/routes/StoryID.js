import React, {useState,useEffect} from 'react'
import{useParams} from "react-router-dom"

function StoryID() {

    const {id}=useParams()
  const [story, setStory] = useState()

 useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id} `)
  .then(res=>res.json())
  .then (data=>setStory(data))
 }, [])
 

  
  
  return (
    <div className='bg-white p-6 border'>

<h2 className='text-5xl mb-6'>
{story?.title}

</h2>
<p>
 {story?.body}   
</p>

    </div>
  )
}

export default StoryID