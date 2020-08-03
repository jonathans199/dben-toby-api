const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const jwToken = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { reset } = require('nodemon')

const User = mongoose.model('User')

// exports.signin = (req, res ) => {
//   const email = req.body.email
//   const password = req.body.password
//   // const { email, password } = req.body
//   let loadedUser

//   User.findOne({ email: email })
//     .then(user => {
//       if (!user) {
//       const error = new Error('email not found')
//       error.statusCode = 401
//       throw error
//     }

//     loadedUser = user
//     return bcrypt.compare(password, user.password)
//     })
//     .then( doMatch => {
//       if(!doMatch){
//         const error = new Error('Wrong password')
//         error.message = 'Wront Password entered'
//         error.statusCode = 401
//         throw error
//       }
//       const token = jwToken.sign({
//         email: loadedUser.email,
//         userId: loadedUser._id.toString()},
//         'MY_SECRET_KEY', 
//         {expiresIn: '1h'})
//       res.status(200).json({token: token, userId: loadedUser._id.toString()})
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(401).json({message: err.message, statusCode: err.statusCode})
//     })
//   }

    

	  


// exports.logoutUser = (req, res, next) => {
//   req.session.destroy((err) => {
//     console.log(err)
//     res.redirect('/')
//   })
// }



exports.signin = async (req, res) => {
	const { email, password } = req.body

	if (!email || !password) {
		return res.status(422).send({ error: 'Must provide email and password' })
	}

	const user = await User.findOne({ email })
	if (!user) {
		return res.status(404).send({ error: 'Email not found' })
	}

	try {
		await user.comparePassword(password)
		const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    res.send({ token })
    // res.redirect('/stores')
		console.log('logged in ')
	} catch (err) {
		return res.status(422).send({ error: 'Invalid password or email' })
	}
}



// exports.signup = async (req, res) => {
//   const { email, password, userType } = req.body

//   try {
//     const user = new User({ email, password, userType })
//     await user.save()

//     const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
//     res.send({ token })
//   } catch (err) {
//     return res.status(422).send(err.message)
//   }
// }
