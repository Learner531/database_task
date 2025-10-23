import express from "express";
import mongoose from "mongoose";


const app = express();

app.use(express.json());



const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://admin:J2JXJ$yxMaa9*!w@cluster0.ypxjvwp.mongodb.net/inventory");
      console.log("✅ MongoDB connected successfully");
    } catch (error) {
      console.error("❌ MongoDB connection failed:", error.message);
    }
  };

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
  
  connectDB();

//schema declaration

const postSchema=new mongoose.Schema({
  title:String,
  content:String
});

//model
const Post = mongoose.model("Post", postSchema);






app.get("/test", (req, res) => {
    res.send("Hello Worldd");
});
app.post("/addPosts", async (req, res) => {
  try{
    const {title, content}=req.body;
    const newPost= new Post ({title,content});
    await newPost.save();
    res.json({message:"Post successfully added", post:newPost});
    console.log(req.body);
  }
  catch(error){
    console.log("Error saving post",error.message);
    res.status(500).json({error:"Error saving post"});
  }
 
});

app.get("/getPosts", async (req,res) => {
  try{
const posts=await Post.find();
res.json(posts);
  }
  catch(error){
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Error fetching posts" });
  }
});


app.delete("/delPosts/:id", async(req,res)=>{
  try{
 const id=req.params.id;
 const deletedPost = await Post.findByIdAndDelete(id);
 if (!deletedPost) return res.status(404).json({ error: "Post not found" });
 res.json({ message: `Post with id=${id} deleted successfully` });

console.log("Deleted post with id=",id);
  }
  catch(error){
    console.error("Error deleting post:", error.message);
    res.status(500).json({ error: "Error deleting post" });
  }
});

app.patch("/post/:id", async (req,res)=>{
  try{
const id=req.params.id;
const updateData=req.body;

console.log("Updating post with ID:", id);
console.log("Update data:", updateData);

const updatedPost= await Post.findByIdAndUpdate(id, updateData, { new: true });
if (!updatedPost) return res.status(404).json({ error: "Post not found" });
res.json({ message: "Post updated successfully", updatedPost });

  }
  catch(error){
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Error updating post",details:error.message });
  }
});
