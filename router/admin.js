import express from "express";

const router = express.Router();


router.get("/", (req,res)=>{
 res.render("admin")
})

router.get("/admin", (req,res)=>{
 res.render("admin1")
})

router.get("/admincontact", (req,res)=>{
 res.render("admin2")
})

export default router; 