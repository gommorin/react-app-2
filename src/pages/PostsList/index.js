import React, { Component } from 'react'

import Post from '../../components/Post'

class PostsList extends Component {
  constructor(props){
    super(props)
    this.state ={
      posts: []
    }
  } 

  componentDidMount() {
    this.setState({
      posts: [
        {
          title: 'un titulo',
          subtitle: 'un subtitulo',
          image: 'una imagen',
          author: 'Luis'
        },
        {
          title: 'otro titulo',
          subtitle: 'otro subtitulo',
          image: 'otra imagen',
          author: 'Fernando'
        }
      ]
    })
  }

  renderPosts() {
    // OPCION 1: función flecha entre () para agrupar
    return this.state.posts.map(({title, subtitle, author}) => (
      <Post title={title} subtitle={subtitle} author={author} />
    ))

    // OPCION 2: función flecha entre {}
    // return this.state.posts.map(({title, subtitle, author}) => {
    //   return (
    //   <div>
    //     <h1>{title}</h1>
    //     <h4>{subtitle}</h4>
    //     <p>{author}</p>
    //   </div>
    //   )
    // })
  }

  render() {
    return <div>{this.renderPosts()}</div>
  }

}

export default PostsList