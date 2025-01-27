import express from 'express'


const app = express()
const PORT = process.env.PORT || 3005

app.get('/api', (req, res)=>{
    res.json({
        message:"This is the GET product path"
    })
})
app.get('/', (req, res)=>{
    res.json({message: "This is is the GET user path"
        
    })
})
app.post('/', (req, res)=>{
    res.json({message: "This is the post path and something was added"
        
    })
})


app.listen(PORT,()=>{
    console.log ('http://localhost:'+PORT);
   
})