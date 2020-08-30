const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

// module.exports = (req, res, next) => {
// 	try {
//     const decoded = jwt.verify(req.body.token, process.env.TOKEN_SECRET)
//     req.userData = decoded
//     next()
// 	} catch (error) {
// 		return res.status(401).json({
// 			message: 'Auth Failed',
// 		})
// 	}
// }

// Original code
module.exports = (req, res, next) => {
  const { authorization } = req.headers
  // authorizaation === 'Beareeer LAAJDKFJLSDF '

  if(!authorization){
    return res.status(401).send({error: 'you must be logged in '})
  }

  const token = authorization.replace('Bearer ', '' )

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, payload) => {
		if (err) {
			return res.status(401).send({ error: 'you must be logged in ' })
		}

		const { userId } = payload

		const user = await User.findById(userId)
		req.user = user
		next()
	})
}

//another attempt
// https://dev.to/medaymentn/securing-your-node-js-api-with-json-web-token-5o5
// exports.ProtectedRoutes.use((req, res, next) => {

//   var token = req.headers['access-token']

//   if(token) {
//     jwt.verify(token, app.get('Secret'), (err, decoded) => {
//       if(err){
//         return res.json({message: 'invalid token'})
//       } else {
//         req.decoded = decoded
//         next()
//       }
//     })
//   } else {
//     res.send({
//       message: 'No token provided'
//     })
//   }
// })
