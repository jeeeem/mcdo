const express = require('express');
const Message = require('../models/Message');
const auth = require('../middleware/auth')

const router = new express.Router();

Message.bulkCreate([
{
  "id": "20",
  "title": "Take out, bring home, or have food delivered for the whole family! 👌",
  "message": "Check out our app to see the schedule of operating stores near you! ?",
  "date": "05/01/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "21",
  "title": "Craving for McDo? ??",
  "message": "Click me to see which stores are open near you for take-out, Drive-Thru, and McDelivery!",
  "date": "05/02/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "22",
  "title": "Intense cravings at home? ?",
  "message": "Click me to find out which stores are open to serve you via take-out, Drive-Thru, and McDelivery! ?",
  "date": "05/03/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "23",
  "title": "There are McDonald�s stores ready to serve you! ?????",
  "message": "Click me to learn which stores are open for take-out, Drive-Thru, and McDelivery!",
  "date": "05/04/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "24",
  "title": "Drive-Thru McDonald�s to claim NEW DEALS!?",
  "message": "Bring home a 20-pc. McNuggets McShare Box for ONLY P299, perfect for your family!",
  "date": "05/05/2020 9:00",
  "status": "Published",
  "landing_page": "Offer",
  "payload": "NA - System Link"
},
{
  "id": "25",
  "title": "McDonald's is open to serve you! ??",
  "message": "Check out which stores are open for take out, Drive-Thru, and McDelivery.",
  "date": "05/05/2020 12:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "26",
  "title": "Let us satisfy your cravings! ?",
  "message": "Check out our NEW DEALS and redeem your fave McDo meals when via take out or Drive-Thru. ??",
  "date": "05/06/2020 9:00",
  "status": "Published",
  "landing_page": "Deals Page",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-deals'}"
},
{
  "id": "27",
  "title": "Looking for take out options? ?",
  "message": "Click here to check the nearest store open to serve you today!",
  "date": "05/06/2020 12:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "28",
  "title": "Breakfast is back! ?",
  "message": "Get the 2-pc. Hotcakes with Sausage Meal for ONLY ?95, via take out or Drive-Thru!",
  "date": "05/07/2020 7:00",
  "status": "Published",
  "landing_page": "Offer",
  "payload": "NA - System Link"
},
{
  "id": "29",
  "title": "Looking for a nearby McDonald�s? ?",
  "message": "Click here to see the list of open stores with take out, Drive-Thru, and McDelivery!",
  "date": "05/07/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "30",
  "title": "Out for a grocery run? ?",
  "message": "Drive by McDonald�s and claim our deals for take out or Drive-Thru! ??",
  "date": "05/08/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "31",
  "title": "Feeling hungry? ?",
  "message": "We�ve got a 1-pc Chicken McDo DOUBLE RICE Meal for only P95! Claim via take-out or Drive-Thru. ??",
  "date": "05/09/2020 9:00",
  "status": "Published",
  "landing_page": "Offer",
  "payload": "NA - System Link"
},
{
  "id": "32",
  "title": "McDonald�s restaurants are open!???",
  "message": "Click here for nearby stores with take out, Drive-Thru, and McDelivery.",
  "date": "05/09/2020 12:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "33",
  "title": "Treat your mom to McDonald�s on her special day!  ???????",
  "message": "Click here for the list of stores that are open for take out, Drive-Thru, and McDelivery! #LoveKitaMa",
  "date": "05/10/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "34",
  "title": "Craving for a bite of your McDo faves? ?",
  "message": "Click me to find out which stores are ready to serve you via take out, Drive-Thru, and McDelivery! ?",
  "date": "05/11/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "35",
  "title": "Food for two? We�ve got you covered??",
  "message": "Get TWO Cheeseburgers for ONLY ?99 when you claim this deal via take out or Drive-Thru!",
  "date": "05/12/2020 9:00",
  "status": "Published",
  "landing_page": "Offer",
  "payload": "NA - System Link"
},
{
  "id": "36",
  "title": "Been dreaming of McDonald�s? ?",
  "message": "Click here to satisfy your cravings! We�ve got the list of stores open to serve you ?",
  "date": "05/12/2020 12:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "37",
  "title": "There's an open McDo near you! ?",
  "message": "We�re open for take out, Drive-Thru and McDelivery. Click here for the list of open stores.",
  "date": "05/13/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "38",
  "title": "McDonald's is open to serve! ?",
  "message": "Click me to see the schedule of stores ready to satisfy your cravings ?",
  "date": "05/14/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "39",
  "title": "Getting food for the family? ??",
  "message": "Grab a 20-pc. McNuggets McShare Box for ONLY P299 when you take out or Drive-Thru at the nearest McDonald�s!",
  "date": "05/15/2020 9:00",
  "status": "Published",
  "landing_page": "Offer",
  "payload": "NA - System Link"
},
{
  "id": "40",
  "title": "Searching for an open McDonald's? ?",
  "message": "Click me to check which stores are open for take out, Drive-Thru, and McDelivery!",
  "date": "05/15/2020 12:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "41",
  "title": "Let us know how to serve you better! ???",
  "message": "Answer a quick survey so we can improve our service.",
  "date": "05/16/2020 9:00",
  "status": "Published",
  "landing_page": "Survey",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://smartwebview.wtph.digital'}"
},
{
  "id": "42",
  "title": "Searching for an open McDonald's? ?",
  "message": "Click me to check which stores are open for take out, Drive-Thru, and McDelivery!",
  "date": "05/16/2020 12:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "43",
  "title": "Help us serve you better! ?",
  "message": "Answer a quick survey so we can improve our service.",
  "date": "05/17/2020 9:00",
  "status": "Published",
  "landing_page": "Survey",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://smartwebview.wtph.digital'}"
},
{
  "id": "44",
  "title": "Hungry for McNuggets? ?",
  "message": "Click here to get a 20-pc. McNuggets McShare Box for ONLY P299!",
  "date": "05/17/2020 12:00",
  "status": "Published",
  "landing_page": "Offer",
  "payload": "NA - System Link"
},
{
  "id": "45",
  "title": "There's an open McDonald's near you! ?",
  "message": "Click here for the list of stores ready to serve you via take out, Drive-Thru, and McDelivery!",
  "date": "05/18/2020 12:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "46",
  "title": "You deserve a mid-week break! ?",
  "message": "Take out or Drive-Thru the nearest McDonald's for a treat!",
  "date": "05/21/2020 11:00",
  "status": "Published",
  "landing_page": "Store Locator",
  "payload": "{'clickThroughUrl' : 'gmalite://gmalite-smartweb?weburl=https://mcdonalds.com.ph/store-locator'}"
},
{
  "id": "47",
  "title": "Feeling extra hungry 😜😀😊😃",
  "message": "Get this 2-pc. Chicken McDo with Rice Meal for ONLY P149!",
  "date": "05/21/2020 12:30",
  "status": "Published",
  "landing_page": "Offer",
  "payload": "NA - System Link"
}
], {
 validate: true
}).then( () => {
 console.log('Saved');
 
} ).catch( (error) => {
 console.log(error);
 
} )


module.exports = router;
