
// 01
const express = require("express")
const app = express()

// 02
const port = process.env.port || 3000

// 03
app.set("view engine" , "hbs")

const path = require("path")
const viewsDirectory = path.join(__dirname , "../temp1/views")
app.set("views" , viewsDirectory)

// to read Header in other pages
var hbs = require("hbs")
const partialsPath = path.join(__dirname , "../temp1/partials")
hbs.registerPartials(partialsPath)

app.get("/" ,(req , res)=>{
    res.render("index" , 
        {
            title : "HOME",
            desc  : "This is The Home page"
        }
    )
})


const publicDirectory = path.join(__dirname , "../public")
app.use(express.static(publicDirectory))

app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "SERVICE",
        name: "Metwally",
        city:"Mansoura",
        age: 42,
        img1: "images/img_avatar2.png"
    })
})

app.get("/team" , (req , res)=>{
    res.render("team" ,
        {
            title : "TEAM",
            name : "Zeyad",
            city : "Mansoura",
            age : 11,
            img2 : "Images/img_avatar.png"
        }
    )
})

app.get("/product" , (req , res)=>{
    res.render("product" ,
        {
            title : "PRODUCTS",
            name : "Oppo",
            price : 12000,
            img3 : "Images/oppo-reno-7.jpg"
        }
    )
})

app.get("/about" , (req , res)=>{
    res.render("about" ,
        {
            title : "ABOUT",
            name : "SNIPER COMPANY",
            city : "Mansoura",
            img4 : "Images/el_glala.jpg"
        }
    )
})




















// 04

app.listen( port , ()=>{
    console.log("App Listening on Port 3000")
})

