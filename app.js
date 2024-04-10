if(process.env.NODE_ENV!="production"){
require('dotenv').config();
}


const express = require('express')
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()
const path = require('path');
const multer = require('multer');



const {storage}=require("./cloudConfig.js");
const upload = multer({ storage });


app.use(bodyParser.json())
app.set("view engine","ejs");
app.use(express.static('./public'));




app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function (req, res) {
  res.render("index");
})
app.get('/index', function (req, res) {
  res.render("index");
})

app.get('/contact', function (req, res) {
    res.render("contact");
  })
  app.get('/blog', function (req, res) {
    res.render("blog");
  })

  app.get('/service', function (req, res) {
    res.render("service");
  })
  app.get('/about', function (req, res) {
    res.render("about");
  })
  app.get('/hire', function (req, res) {
    res.render("hire");
  })
  app.get('/apply', function (req, res) {
    res.render("apply");
  })

 const dbUrl=process.env.ATLASDB_URL;
  mongoose.connect(dbUrl)


  
var db = mongoose.connection
db.on('error', () => console.log("Error in Connecting to Database"))
db.once('open', () => console.log("Connected to Database"))

app.post("/msg_received", (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var address = req.body.address
    var phno = req.body.phno
    var subject = req.body.subject
    var description = req.body.description

    var data = {
        "name": name,
        "address": address,
        "email": email,
        "phno": phno,
        "subject": subject,
        "description": description
    }

    db.collection('contact-form').insertOne(data, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error inserting data');
        }
        console.log("Record Inserted Successfully");

    });
   //  Vipin Whatsapp code
   return res.render('contact', {
    flag:true
    // currentUrl: currentUrl
        });

});



app.post("/form_submitted", upload.single('file'), (req, res) => {
  var fname = req.body.first_name
  var lname = req.body.last_name
  var email = req.body.email
  var phone = req.body.phone
  var job_role = req.body.job_rol;
  var portfolio_link = req.body.link
  var address = req.body.address
  var city = req.body.city
  var pin = req.body.pin
  var cv_file = req.file;

  var data = {
      "fname": fname,
      "lname": lname,
      "email": email,
      "phone": phone,
      "job_role": job_role,
      "portfolio": portfolio_link,
      "address": address,
      "city": city,
      "pin": pin,
      "cv_file": cv_file
  }

  db.collection('apply-form').insertOne(data, (err, result) => {
      if (err) {
          console.error('Error inserting data:', err);
          return res.status(500).send('Error inserting data');
      }
      console.log("Record Inserted Successfully");

  });

 return res.render('apply', {
  flag:true

        });
});


app.get("/", (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": '*'
    })
    return res.render('contact')
});


app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});