const mongoose=require("mongoose")
const Course=mongoose.Schema({
    // title:{
    //     type:String
    //     require:true
    // },
    // content:{
    //     type:String
    //     require:true
    // }

    title:String,
    content:String,
    videos:Number,
    active:Boolean
});

module.exports=mongoose.model("courses",Course)
