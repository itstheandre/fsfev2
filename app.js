const express = require("express")

const port = 3000;


const app = express()

app.get("/", ()=> {
	res.send("Hello World");
})

app.listen(port, ()=> {
	console.log(`App Running on Port ${port}`)
})
