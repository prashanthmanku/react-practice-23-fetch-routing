// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogDetails} = this.props
    const {author, avatarUrl, id, imageUrl, title, topic} = blogDetails
    return (
      <Link to={`blogs/${id}`} className="nav-link">
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="title-img" />
          <div className="blog-item-content-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-container">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
export default BlogItem
