const express=require("express");

//const booksRouter=express.Router();
// const authorsRouter=express.Router();
const booksRouter=require('./src/routes/bookRoutes');
const authorsRouter=require('./src/routes/authorRoutes');


const app=express();
const port=process.env.PORT||8000;
app.use(express.static('./public'));
app.set('view engine','ejs')
app.set('views',__dirname+"/src/views");
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);

app.get("/",function(req,res){
    res.render("index",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library'
    });
})

app.get("/login",function(req,res){
    res.render("login",
    {
        nav:[{link:'/',name:'Home'},{link:'/SignUp',name:'Signup'}],
        title:'Library'
    });
})


app.get("/signup",function(req,res){
    res.render("signup",
    {
        nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'}],
        title:'Library'
    });
})

app.get("/addbook",function(req,res){
    res.render("addbook",
    {
        nav:[{link:'/books',name:'Books'}],
        title:'Library'
    });
})

app.get("/addauthor",function(req,res){
    res.render("addauthor",
    {
        nav:[{link:'/authors',name:'Authors'}],
        title:'Library'
    });
})



app.listen(port,()=>{console.log("Server started at "+port)});