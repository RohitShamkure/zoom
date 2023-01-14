const express=require("express")
const router=express.Router()
const Course=require("../modules/course")



//creating the routers

//get all the courses


router.get("/",async(req,res)=>{
    //res.send("hello,your courses is here");
    try{
        const cr=await Course.find()
    res.json(cr)
    }
    catch(err)
    {
        res.json(err);
    }
});

//get particular course

    router.get("/:courseId",async(req,res)=>{

        const courseId=req.params.courseId;
        try{
            const c=await Course.findById(courseId)
            res.json(c);
            }
            catch(err)
            {
                res.json(err);
            }
         });

//create course

         router.post("/",async(req,res)=>{
            const cou=await Course.create(req.body)
            res.json(cou)
         });

//delete course

router.delete("/:courseId",async(req,res)=>{
        try{
          await Course.remove({_id:req.params.courseId})
          res.status(200).json({
            message:"done"
          });
        }
        catch(err){
            res.json(err);
        }

});

//update courses

router.put("/:courseId",async(req,res)=>{
    const courseId=req.params.courseId
    try{
        const course= await Course.updateOne(
            {
            _id:courseId
        },
        req.body
    )
    res.json(course)

    }
    catch(err)
    {
        res.json(err);
    }
    
});

module.exports=router;