const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const jwToken = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { reset } = require('nodemon')

const User = mongoose.model('User')	  


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
		const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET)
    res.send({ token, user })		
    // res.redirect('/stores')
		console.log('logged in ')
	} catch (err) {
		return res.status(422).send({ error: 'Invalid password or email' })
	}
}


// exports.logoutUser = (req, res, next) => {
//   req.session.destroy((err) => {
//     console.log(err)
//     res.redirect('/')d
//   })
// }



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
