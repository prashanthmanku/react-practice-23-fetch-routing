// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.title,
    }
    console.log(updatedData)
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItem = () => {
    const {blogData} = this.state

    const {author, avatarUrl, content, id, imageUrl, title} = blogData
    return (
      <>
        <h1 className="blogitem-title">{title}</h1>
        <div className="author-container">
          <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
          <p className="blog-Item-author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-item-title_img" />
        <p className="blog-item-content">{content}</p>
        <Link to="/" className="back-link">
          Back
        </Link>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-Item-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItem()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
