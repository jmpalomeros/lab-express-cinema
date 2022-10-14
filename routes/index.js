const { json } = require('express');
const express = require('express');
const router = express.Router();

const Movies = require ("../models/movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index.hbs'));

//movies page

router.get("/movies", (req,res,next)=>{

    Movies.find().select("title").select("image")
    .then((response)=>{
        console.log(response)
    res.render("./movies.hbs", {
        moviesList :response
    })
    })
    .catch((err)=>{
     next(err)
    })

})

router.get("/movies/:movieId",(req,res,next)=>{
    const{movieId} = req.params

    Movies.findById(movieId)
    .then((response)=>{
        console.log(response)
        res.render("see-more.hbs",{
        details:response
        })

    })
    .catch((err)=>{
        next(err)
    })

})



module.exports = router;
