const express=require('express');
const app=express();
const PORT=5000;

app.use(express.json());

// app.get('/', (req,res)=>{
//     console.log("Hello aptech")
// })

app.listen(PORT, ()=>{
        console.log("Hello aptech")

    console.log(`Server is running on port ${PORT}`);
})