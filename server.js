const http=require('http');  // importing http module
const PORT=3000;  //defining the network port of our project
const app= http.createServer((req,res)=>{      //Initializing the server
    const url=req.url;
     // Home ROute
    if(url==='/' || url==='/home'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(`<html>
            <head>
               <title>Homepage</title>
               <style>
                 body{
                 font-family:Trebuchet MS;
                 background:#FFFD74;
                 text-align:center;
                 padding-top:50px;
                 color:#FF1493;
                 }
                 nav a{
                 background:#FFD1DC;
                  font-family:Trebuchet MS;
                  border:2px solid black;
                  border-radius:8px;
                  max-width:500px;
                  margin:0px auto 30px auto;
                  padding:15px;
                  text-decoration:none;
                  font-weight:bold;
                  color:black
                 }
                 p{
                  border:2px solid black;
                  background:white;
                  color:black;
                  border-radius:8px;
                }
               </style>
            </head>
            <body>
                <nav><a href="/home">Home</a>
                 <a href="/about">About</a>
                 <a href="/contact">Contact</a>
                 </nav>
                <h1>Hello!! This is homePage</h1>
                <p>This page was made using Node.js. <br> You can route to different pages by just changing the page name on the url like for eg: /about or /contact etc. <br>
                Thank Youu for visiting!! <3
                </p>
            </body>
            </html>`);
            res.end();
    }
    //About Route
    else if(url==='/about'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(`<html>
              <head>
                 <title>About Page</title>
                 <style>
                   body{
                     font-family:Trebuchet MS;
                     background:#FFFD74;
                     text-align:center;
                     padding-top:50px;
                     color:FF1493;
                   }
                   p{
                     border:2px solid black;
                     background:white;
                     color:black;
                     border-radius:8px;
                    }
                 </style>
              </head>
              <body>
                <h1>Hey Again!! This is about page.</h1>
                <p>The styling of these pages has been done using simple vanilla css. The html pages are made from scratch without using any previous stored codes.</p>
              </body>
            </html>`);
            res.end();
    }
    // Contact route
    else if(url==='/contact'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(`<html>
              <head>
                 <title>Contact Page</title>
                 <style>
                   body{
                     font-family:Trebuchet MS;
                     background:#FFFD74;
                     text-align:center;
                     padding-top:50px;
                     color:FF1493;
                   }
                   p{
                     border:2px solid black;
                     background:white;
                     color:black;
                     border-radius:8px;
                    }
                 </style>
              </head>
              <body>
                <h1>Hey Again!! This is Contact page.</h1>
                <p>The following project shows how node js library can be used to run javascipt files on server with simple routing techniques <br>
                I was happy to make this assignment and looking forward to learn express js for my next assignment.
                <br> Thank You!!</p>
              </body>
            </html>`);
            res.end();
    }
    // Handling error case
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write(`<html>
            <head>
             <title>Page not found</title>
             <style>
             body{
             text-align:center;
             padding-top:25%;
             }
             </style>
            </head>
            <body>
               <h1>Error 404: Page not Found</h1>
               <p>The page you are looking for does not exist.</p>
            </body>
            </html>
            `);
            res.end();
    }
})
//Listening to network requests
app.listen(PORT,()=>{
    console.log(`Server is up and running on port http://localhost:${PORT}`)
})