import { Router } from "express";
const router=Router();
import  {Intro,About,Project,Contact,Experience} from "../models/portfolio.model.js";
// import Contact from "../client/src/pages/home/Contect.js";
router.get('/get-portfolio-data',async(req,res)=>{
    try{
        const intros=await Intro.find();
        const abouts=await About.find();
        const projects=await Project.find();
        const contacts=await Contact.find();
        const experinces=await Experience.find();
        res.status(200).send({
            intro:intros[0],
            about:abouts[0],
            project:projects,
            contact:contacts[0],
            experinces:experinces,
            message:"Not found anything"
        })
    }catch(error){
        res.status(500).send(error);
    }
})
export default router;