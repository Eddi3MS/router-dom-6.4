import { useLoaderData } from 'react-router-dom'
import BlogPost from '../components/BlogPost'
import { getPost } from '../util/api'

function PostDetailPage() {
  const data = useLoaderData()
  return <BlogPost title={data.title} text={data.body} />
}

export default PostDetailPage

export function loader({ params }) {
  const id = params.id
  return getPost(id)
}
