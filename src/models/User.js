import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    accountType: {
      type: String,
      required: false
    },
    service: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

export default User
