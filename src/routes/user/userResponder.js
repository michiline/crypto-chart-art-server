export const register = async (req, res, next) => {
	try {
		return res.status(200).send(req.user)
	} catch (err) {
		return next(err)
	}
}

export const login = async (req, res, next) => {
	try {
		return res.status(200).send(req.user)
	} catch (err) {
		return next(err)
	}
}

export const checkSession = async (req, res, next) => {
	try {
		return res.status(200).send(req.user)
	} catch (err) {
		return next(err)
	}
}

export const logout = async (req, res, next) => {
	try {
		return res.status(200).send(req.user)
	} catch (err) {
		return next(err)
	}
}