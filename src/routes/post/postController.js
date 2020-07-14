export const create = async (req, res, next) => {
	try {
		return res.status(200).send('created')
	} catch (err) {
		return next(err)
	}
}
