const express = require('express');
const Message = require('../models/Message');
const auth = require('../middleware/auth')

const router = new express.Router();

//Message.bulkCreate([
//{
  //"id": "20",
  //"title": "Take out, bring home, or have food delivered for the whole family! 👌",
  //"message": "Check out our app to see the schedule of operating stores near you! ?",
  //"date": "05/01/2020 11:00",
  //"status": "Published",
  //"landing_page": "Store Locator",
  //"payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
//},
//{
  //"id": "21",
  //"title": "Craving for McDo? ??",
  //"message": "Click me to see which stores are open near you for take-out, Drive-Thru, and McDelivery!",
  //"date": "05/02/2020 11:00",
  //"status": "Published",
  //"landing_page": "Store Locator",
  //"payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
//},
//], {
 //validate: true
//}).then( () => {
 //console.log('Saved');
 
//} ).catch( (error) => {
 //console.log(error);
 
//} )

router.get('/messages', auth, async (req,res) => {
  try {
    const message = await Message.findAll()

    return res.send(message)
  } catch (err) {
    res.status(404).send()
    console.log(err);
  }
})


router.get('/message/:id',  async (req,res) => {
  const {id} = req.params

  try {
    const message = await Message.findOne({
      where: {
        id
      }
    })

    if (!message) {
      throw new Error('No message')
    } 

    return res.json(message)

  } catch (err) {
    res.status(404).send()
    console.log(error);
  }

})


router.post('/message', async (req,res) => {
  const {
    title,
    message,
    date,
    status,
    landing_page,
    payload
  } = req.body;

  try {
    const data = await Message.create({ 
      title,
      message,
      date,
      status,
      landing_page,
      payload
    })


    return res.json(data)
  } catch (err) {
    res.status(404).send()
    console.log(err);
  }
})


module.exports = router;

