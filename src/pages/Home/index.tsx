import React, { useState, useEffect, FormEvent } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { useHistory } from "react-router-dom";

import api from '../../services/api'
import './styles.scss'

interface Post {
	id: number
	title: string
	body: string
}

const App: React.FC = () => {

  const history = useHistory();
	
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)

	useEffect(() => {
		const token = 'vyNPiyGpmcuhD4NFtK7GkfV77_YJmLmS0N_O'

		api.get(`/posts?_format=json&access-token=${token}&page=${page}`)
			.then(response => {
				setPosts(response.data.result)
			})
		}, [page])
		
		function handlePage(item: number) {
			if (item > 0) {
				setPage(item)
		}
  }
  
  function handleContent( post: Post) {
    localStorage.setItem('postTitle', post.title);
    localStorage.setItem('postBody', post.body);
    history.push('/post')
  }
	
	return (
		<div className="background">
			<div className="container">
				<h1>Últimas postagens</h1>
				
				<ul>
					<h2>Título</h2>
					<h2>Conteúdo</h2>
				</ul>

					{posts.map((post: Post) => (
						<div key={post.id} className="grid" onClick={() => handleContent(post)}>
							<li><p className="title">{post.title}</p></li>	
							<li><p className="body">{post.body}</p></li>
						</div>
					))}
						
					<div className="page">
						<p>Exibindo {posts.length} postagens</p>
						
						<div className="pages">
							<MdKeyboardArrowLeft className={page === 1 ? "block" : "arrow"} size={30} onClick={() => handlePage(page - 1)} />
							<a className="selected" onClick={() => setPage(page)}><h4>{page}</h4> </a>
							<a onClick={() => setPage(page + 1)}><h4>{page + 1}</h4> </a>
							<a onClick={() => setPage(page + 2)}><h4>{page + 2}</h4> </a>
							<MdKeyboardArrowRight className="arrow" size={30} onClick={() => handlePage(page + 1)} />
						</div>
					</div>
			</div>
		</div>
	)
}

export default App
