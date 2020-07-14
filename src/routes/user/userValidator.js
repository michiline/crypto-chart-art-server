export const register = (req, res, next) => {
	try {
		const { username, password } = req.body
		if (!username || !password) {
			throw new Error('INVALID_DATA')
		}
		return next()
	} catch (err) {
		return next(err)
	}	
}

export const login = (req, res, next) => {
	try {
		const { username, password } = req.body
		if (!username || !password) {
			throw new Error('INVALID_DATA')
		}
		return next()
	} catch (err) {
		return next(err)
	}	
}