const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./models/User');
//const userRouter = require('./routers/user');
const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
    const { id, username, password_hash } = req.body;

    try {
        const user = await User.create({ id, username, password_hash })


        return res.json(user);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e)
    }
})

app.post('/users/login', async (req, res) => {
    const { username, password_hash } = req.body
    try {
        const user = await User.findOne({
            where: { username }
        })
        const isMatch = await bcrypt.compare(password_hash, user.password_hash)
        if (!user) {
            throw new Error('Unable to login')
        }

        if (!isMatch) {
            throw new Error('Unable to login')
        }
        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Login Unsuccessfully' })
    }
})


app.get('/users', async (req, res) => {

    try {
        const user = await User.findAll();

        return res.json(user)
    } catch (error) {
        console.log(error);
    }
})


/*async function data() {
    const datas = await User.findAll()
    datas.map((data) => {
        console.log(data.dataValues);
    })
    //console.log(data);
}

data();*/


/*router.post('/users', async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    sendWelcomeEmail(user.email, user.name)
    const token = await user.generateAuthToken()
    res.status(201).send({user, token})
  } catch (e) {
    res.status(400).send(e)
  }
})


router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()

    res.send()
  } catch (e) {
    res.status(500).send()
  }
})


userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET);

  user.tokens = user.tokens.concat({token});
  await user.save();

  return token;
};
*/

//app.use(userRouter);

module.exports = app;
