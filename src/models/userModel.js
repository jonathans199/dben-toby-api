const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema } = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
			lowercase: true,
			max: 255,
			min: 6,
		},
		password: {
			type: String,
			required: true,
			max: 255,
			min: 6,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		userType: {
			type: String,
			required: true,
			// ref: 'UserType'
		},
		notes: {
			type: String,
		},
		active: {
			type: Boolean,
		}
	},
	{ timestamps: true }
)

userSchema.pre('save', function (next) {
  const user = this

  // if user has not modified password
  if (!user.isModified('password')) {
    return next()
  }

  // generate salt with bcrypt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }
    
    // create hash with salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if(err){
        return reject(err)
      }

      if(!isMatch){
        return reject(false)
      }

      resolve(true)

    })
  })
}

module.exports = mongoose.model('User', userSchema)
