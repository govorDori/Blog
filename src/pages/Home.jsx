import React from 'react'
import { useContext } from 'react'
import { CategContext } from '../context/CategContext'
import { Card, CardBody, CardTitle} from 'reactstrap'
import { NavLink } from 'react-router-dom'


export const Home = () => {

	const { categories } = useContext(CategContext)
	console.log(categories);

	return (
		<div className='title'>
			<h1>Blog</h1>
			<div className='imagesContainer'>
				{categories && categories.map(obj =>
					<Card className="card">
						<img alt="Sample" src={obj.photoUrl} />
						<CardBody>
							<CardTitle tag="h5">
								<NavLink className='cardTitle' to={'/posts?ctg='+obj.name}>{obj.name}</NavLink>
							</CardTitle>

						</CardBody>
					</Card>
				)}
			</div>
		</div>
	)
}
