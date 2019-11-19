import User from '../models/User'

class UserController {
  async index (req, res) {
    const users = await User.find()

    return res.send({ users })
  }

  async show (req, res) {
    const user = await User.findById(req.params.id)

    if (!user) return res.status(400).send({ error: 'Could not find any user.' })

    return res.send({ user })
  }

  async store (req, res) {
    const userCreated = await User.create(req.body)

    return res.send({ userCreated })
  }

  async update (req, res) {
    const user = await User.findById(req.params.id)

    if (!user) return res.status(400).send({ error: 'Could not find any user.' })

    const userUpdated = await user.updateOne(req.body)

    if (userUpdated) return res.send({ success: 'Updated successfully' })
  }

  async delete (req, res) {
    const user = await User.findById(req.params.id)

    if (!user) return res.status(400).send({ error: 'Could not find any user.' })

    User.findOneAndDelete(req.params.id, (err, user) => {
      if (err) return res.status(400).send({ error: 'Could not delete.' })

      return res.send({ success: 'Successfully deleted', id: user._id })
    })
  }

  async login (req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ email, password })

    if (!user) return res.status(400).send({ error: 'User not found.' })

    return res.send({ success: 'Logged' })
  }
}

export default new UserController()
