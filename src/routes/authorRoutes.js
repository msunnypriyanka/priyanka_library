const express=require("express");
const authorsRouter=express.Router();


var authors=[
    {
        name:'Basheer',
        genre:'Drama',
        img:"Basheer.jpg"
    },
    {
        name:'J.K.Rowling',
        genre:'Fantasy',
        img:"jk.jpg"
    },
    {
        name:'Joseph Barbera',
        genre:'Cartoon',
        img:"Jo.jpg"
    }

]

authorsRouter.get("/",function(req,res){
    res.render("authors",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addauthor',name:'Add Author'}],
        title:'Authors',
        authors
    });
})

authorsRouter.get('/:id',function(req,res){
    const id=req.params.id;
     res.render('author',{
         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addauthor',name:'Add Author'}],
         title:'Library',
         author:authors[id]
     })
 })

 module.exports=authorsRouter;
