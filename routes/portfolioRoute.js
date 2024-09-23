const router=require('express').Router()
const{Intro,About,Project,Contact,Experience,Course}=require("../models/portfoliomodel");
const User=require("../models/usermodel")

//get all routes
router.get("/get-portfolio-data",async(req,res)=>{
    try{
        const intros=await Intro.find();
        const about=await About.find();
        const projects=await Project.find();
        const contacts=await Contact.find();
        const experiences=await Experience.find();
        const courses=await Course.find();
     
        res.status(200).send({
            intro:intros[0],
            about:about[0],
            projects:projects,
            contact:contacts[0],
            experiences:experiences,
            courses:courses,
                });
             

    }catch(err){
        res.status(500).send(err);
    }
})



//update info
router.post("/update-intro",async(req,res)=>{
    try{
        const intro = await Intro.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        
        res.status(200).send({
            data:intro,
            success:true,
            message:"Intro added Successfully"
        });}
        catch(err){
            res.status(500).send(err);
       } });
     //update about
router.post("/update-about",async(req,res)=>{
    try{
        const about = await About.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        res.status(200).send({
            data:about,
            success:true,
            message:"About added Successfully"
        });}
        catch(err){
            res.status(500).send(err);
       } });
       //add experience 

       router.post("/add-experience",async (req,res)=>{
        try{
            const experience=new  Experience(req.body);
            await experience.save();
            res.status(200).send({

                data:experience,
                success:true,
                message:"Experience added Successfully"
            });
        }
            catch(err){
                res.status(500).send(err);
        }
       })
       //update exp
               
              router.post("/update-experience",async (req,res)=>{
                try{
                    const experience=await Experience.findOneAndUpdate(
                        {_id:req.body._id},
                        req.body,
                        {new:true}
                    );
                    
                    res.status(200).send({
        
                        data:experience,
                        success:true,
                        message:"Experience updated successfully"
                    });
                }
                    catch(err){
                        res.status(500).send(err);
                }
               })
                      //deleteexperience 
       router.post("/delete-experience",async (req,res)=>{
        try{
            const experience=await Experience.findOneAndDelete({
                _id: req.body._id
            });
            
            res.status(200).send({

                data:experience,
                success:true,
                message:"Experience deleted successfully"
            });
        }
            catch(err){
                res.status(500).send(err);
        }
       })
       //add project
       router.post("/add-projects",async (req,res)=>{
        try{
            const projects=await Project(req.body);
            await projects.save();
            res.status(200).send({

                data:projects,
                success:true,
                message:"projects added"
            });
        }
            catch(err){
                res.status(500).send(err);
        }
       })
      
              router.post("/update-projects",async (req,res)=>{
                try{
                    const projects=await Project.findOneAndUpdate(
                        {_id:req.body._id},
                        req.body,
                        {new:true}
                    );
                    
                    res.status(200).send({
        
                        data:projects,
                        success:true,
                        message:"projects update"
                    });
                }
                    catch(err){
                        res.status(500).send(err);
                }
               })
                      //deleteexperience 
       router.post("/delete-projects",async (req,res)=>{
        try{
            const projects=await Project.findOneAndDelete({
                _id: req.body._id
            });
            
            res.status(200).send({

                data:projects,
                success:true,
                message:"projects  delete"
            });
        }
            catch(err){
                res.status(500).send(err);
        }
       });
       //add courses
       router.post("/add-courses",async (req,res)=>{
        try{
            const courses=await Course(req.body);
            await courses.save();
            res.status(200).send({

                data:courses,
                success:true,
                message:"courses added"
            });
        }
            catch(err){
                res.status(500).send(err);
        }
       })
       //update exp
              //update courses 
              router.post("/update-courses",async (req,res)=>{
                try{
                    const courses=await Course.findOneAndUpdate(
                        {_id:req.body._id},
                        req.body,
                        {new:true}
                    );
                    
                    res.status(200).send({
        
                        data:courses,
                        success:true,
                        message:"courses update sucessfully"
                    });
                }
                    catch(err){
                        res.status(500).send(err);
                }
               })
                      //deleteexperience 
       router.post("/delete-courses",async (req,res)=>{
        try{
            const courses=await Course.findOneAndDelete({
                _id: req.body._id
            });
            
            res.status(200).send({

                data:courses,
                success:true,
                message:"courses  delete sucessfully"
            });
        }
            catch(err){
                res.status(500).send(err);
        }
       })
       // add contact
       
       
              router.post("/update-contact",async (req,res)=>{
                try{
                    const contact=await Contact.findOneAndUpdate(
                        {_id:req.body._id},
                        req.body,
                        {new:true}
                    );
                    
                    res.status(200).send({
     
                        data:contact,
                        success:true,
                        message:"Contact update Successfully"
                    });
                }
                    catch(err){
                        res.status(500).send(err);
                }
               })
//                     //admin login
//                     router.post("/admin-login",async(req,res)=>{
//                         try{
// const user=await User.findOne({
//     username:req.body.username,
//    password:req.body.password,
// });
// if(user){
//     res.status(200).send({
//         data:user,
//         success:true,
//         message:"Login successfully",
//     });

// }else{
//     res.status(200).send({
//         data:user,
//         success:false,
//         message:" not Login successfully",});
// }
//                         }catch(err){
//                             res.status(500).send(err);
//                         }
//                     }) 
       

module.exports=router;