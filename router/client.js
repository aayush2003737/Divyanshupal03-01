import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("/ or /home url invoked & client side")
})

router.get("/client",(req,res)=>{
    res.send("/clinet url invoked & client side")
})

router.get("/epclient", (req,res)=>{
    res.send("/exclient url invoked & clinet side")
})

export default router;