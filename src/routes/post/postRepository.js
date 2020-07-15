import crypto from 'crypto'
import Post from './postModel'

export const create = (data) => {
	const post = new Post(data)
	return post.save()
}

export const getByUrl = (url) => {
	return Post.findOne({
		url
	})
}