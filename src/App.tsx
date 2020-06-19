import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import api from './services/api';

import logoMoovin from './assets/logo-moovin.svg'
import './App.scss'

interface Posts {
	id: number;
	title: string;
	body: string;
}

const App: React.FC = () => {
	
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)

	useEffect(() => {
		const token = 'vyNPiyGpmcuhD4NFtK7GkfV77_YJmLmS0N_O';

		api.get(`/posts?_format=json&access-token=${token}&page=${page}`)
			.then(response => {
				setPosts(response.data.result);
			})
	}, [page])
	
	return (
		<>
			<header>
				<img alt='Logo da Moovin' src={logoMoovin} />
			</header>

			<div className="background">
				<div className="container">
					<h1>Últimas postagens</h1>
					
					<ul>
						<h2>Título</h2>
						<h2>Conteúdo</h2>

						{posts.map((post: Posts) => (
							<>
								<li key={post.id}><p className="title">{post.title}</p></li>	
								<li key={post.id}><p className="body">{post.body}</p></li>
							</>
						))}
							
					</ul>
							<div className="page">
								<p>Exibindo {posts.length} postagens</p>
								
								<div className="pages">
									<MdKeyboardArrowLeft className="arrow" size={30} onClick={() => setPage(page - 1)} />
									<a onClick={() => setPage(page)}><h4>{page}</h4></a>
									<a onClick={() => setPage(page + 1)}><h4>{page + 1}</h4></a>
									<a onClick={() => setPage(page + 2)}><h4>{page + 2}</h4></a>
									<MdKeyboardArrowRight className="arrow" size={30} onClick={() => setPage(page + 1)} />
								</div>
							</div>
				</div>

			</div>
		</>
	)
}

export default App
