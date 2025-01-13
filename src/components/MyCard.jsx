import React from 'react'
import { sanitizeHTML } from '../utility/utils'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import './MyCard.css'
import { useNavigate } from 'react-router-dom'

export const MyCard = ({ id, title, category, story, photo }) => {
	const navigate=useNavigate()
	return (
		<Card className='myCard'
			style={{
				width: '18rem'
			}}
			onClick={()=>navigate("/detail/"+id)}
		>
			<img className='img-fluid'
				alt={title}
				src={photo['url']}
			/>
			<CardBody>
				<CardTitle className="cardTitlePost" tag="h5">
					{title}
				</CardTitle>
				<CardSubtitle className="mb-2 cardSubtitle" tag="h6">
				{sanitizeHTML(story).substring(0,30)}
				</CardSubtitle>
				<CardText>
					{category}
				</CardText>
			</CardBody>
		</Card>
	)
}

