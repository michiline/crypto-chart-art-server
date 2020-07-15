import * as postRepository from './postRepository'

export const create = async (req, res, next) => {
	try {
		const { url, nodes } = req.body
		req.post = await postRepository.create({ url, nodes })
		return next()
	} catch (err) {
		return next(err)
	}
}
