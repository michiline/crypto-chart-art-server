export const create = async (req, res, next) => {
	try {
		return res.status(200).send({
			message: 'POST_CREATED'
		})
	} catch (err) {
		return next(err)
	}
}
