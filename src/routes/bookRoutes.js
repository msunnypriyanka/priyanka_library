const express=require("express");
const booksRouter=express.Router();

var books=[
    {
        title:'Tom and Jerry',
        author:'Joseph Barbera',
        genre:'Cartoon',
        img:"TomandJerry.jpg"
    },
    {
        title:'Harry Potter',
        author:'J. K Rowling',
        genre:'Fantasy',
        img:"harry.jpg"
    },
    {
        title:'Pathumayude Aadu',
        author:'Basheer',
        genre:'Drama',
        img:"aadu.jpg"
    }
]

booksRouter.get("/",function(req,res){
    res.render("books",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'}],
        title:'Library',
        books
    });
})

booksRouter.get('/:id',function(req,res){
   const id=req.params.id;
    res.render('book',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'}],
        title:'Library',
        book:books[id]
    })
})

module.exports=booksRouter;