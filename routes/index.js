var express = require('express');
var router = express.Router();
const { formatDistanceToNow } = require('date-fns');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formatDistanceToNow(new Date(), { addSuffix: true })
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDistanceToNow(new Date(), { addSuffix: true })
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board',  messages: messages});
});

router.get("/new", function(req,res){
  res.render("form", {title: "New Message Form"});
})

router.post("/new", function(req, res, next){
  const data = req.body;
  messages.push({text: data.message,
    user: data.user,
    added: formatDistanceToNow(new Date(), { addSuffix: true })});
  res.redirect("/")
});

module.exports = router;
