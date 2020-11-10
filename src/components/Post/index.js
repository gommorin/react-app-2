const { findAllByTitle } = require("@testing-library/react");

function Post(props) {
  const { title, subtitle, author } = props

  return (
    <div className="Post">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <p>{author}</p>
      </div>
  )
}

export default Post
