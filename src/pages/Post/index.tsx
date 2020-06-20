import React from 'react'

import './styles.scss'

const Post: React.FC = () => {
  const postTitle = localStorage.getItem('postTitle')
  const postBody = localStorage.getItem('postBody')

  return (
    <div className="post-background">
      <div className="post-container">
        <div className="post-title">
          <h2>Titulo:</h2>
          <p>{postTitle}</p>
        </div>

        <div className="post-body">
          <h2>Conteúdo:</h2>
          <p>{postBody}</p>
        </div>
      </div>
    </div>
  )
}

export default Post;