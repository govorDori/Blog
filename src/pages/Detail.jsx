import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { MdDelete } from 'react-icons/md';
import { useConfirm } from 'material-ui-confirm';
import { deletePost, ReadPost, readPosts, toggleLikes } from '../utility/crudUtility';
import { delPhoto } from '../utility/uploadFile';
import { Alerts } from '../components/Alerts'
import { BiSolidLike } from "react-icons/bi";
import { MdEdit } from "react-icons/md";



export const Detail = () => {
	const {user} = useContext(UserContext)
	const [post,setPost] = useState(null)
	const confirm = useConfirm()
	const params = useParams()
	const navigate=useNavigate()
	const [txt,setTxt] = useState(null)
	console.log(params.id);


	useEffect(()=>{
		ReadPost(params.id,setPost)
	},[])

	const handleDelete=async()=>{
		try {
			await confirm({
				description:"Warning! This action cannot be undone",
				confirmationText:"Yes",
				cancellationText:"No",
				title: "Are you sure you want to delete this post?"
			})
			deletePost(post.id)
			delPhoto(post.photo.id)
			navigate('/posts')
		} catch (error) {
			console.log("Cancel: ", error);
			
		}
	}

	post && console.log(post);

	const handleLikes =()=>{
		if(!user) setTxt("You must be logged in to like!")
			else toggleLikes(post.id,user.uid)
	}
	
	
  return (
	<div className='page'>
	  {post && <>
	  <div className='detailDiv'>
	  <p className="detailP">{parse(post.story)}</p>
	  	<img className='detailPhoto' src={post.photo['url']} alt={post.title} style={{maxWidth:"500px"}}/>
	  	
		  </div>
	  </>}
	  {post&&<span className='spanTag'>liked by {post?.likes.length} person</span>}
		<button className='likeButton' onClick={handleLikes}><BiSolidLike style={{width:"25px", height:"25px"}}/></button>

		{user && post && (user.uid==post.userId) &&
		<>
			<div>
				<button className='deleteButton' onClick={handleDelete}><MdDelete/></button>
				<button className='editButton' onClick={()=>navigate('/update/'+post.id)}><MdEdit />
</button>
			</div>
		</>
		}
			<button className='returnButton' onClick={()=>navigate('/posts')}>Go back</button>

		{txt && <Alerts txt={txt} err={false}/>}
	</div>
  )
}
