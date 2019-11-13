const express=require("express");
const chalk=require('chalk');
const path=require('path');
var app= new express();
const booksRouter=express.Router();
const authorsRouter=express.Router();

app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);
app.set('views','./src/views');
app.set('view engine','ejs');
var nav=[{link:'/',title:'Home'},
    {link:'/login',title:'Login'},
    {link:'/signup',title:'Signup'},
    {link:'/books',title:'Books'},
    {link:'/authors',title:'authors'}];
var books=[
    {
        title:"War and Peace",
        genre:"Historical Fiction",
        author:"Lev Nicolayavich"
    },
    {
        title:"Les Miserables",
        genre:"Historical Fiction",
        author:"victor Hugo"
    },
    {
        title:"Balarama",
        genre:"Historical Fiction",
        author:"Jamban"
    },
    {
        title:"Vogue",
        genre:"Historical Fiction",
        author:"Thumban"
    },
];      
booksRouter.route('/')
.get((req,res)=>{
    res.render(
        'books',
        {
            nav,
            title:"BOOKS",
            books
        }
    );
});
app.get('/',function(req,res){
    res.render('index',
    {

      nav,
      title:"Library",

    }
);
});

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname,"/src/views/index.html"));
// })   

app.listen(3000,function(){
    console.log('listening to port'+chalk.green('3000'));
});