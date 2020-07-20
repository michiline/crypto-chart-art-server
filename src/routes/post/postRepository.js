import crypto from 'crypto'
import Post from './postModel'

export const create = (data) => {
	const post = new Post(data)
	return post.save()
}

export const getByTitle = (title) => {
	return Post.findOne({
		title
	})
}

export const getAll = ({ page, nPerPage = 10 }) => {
	const skip = page * nPerPage
	return Post.find({}).skip(skip).limit(nPerPage)
}