import {useState} from "react";
import { motion } from "framer-motion";

const Box1=()=>{
  const [isAnimating,setAnimation]=useState(false);
  return(
   <div className="p-4 pb-[10rem]">
     <motion.div style={{opacity:0.2}} className="w-[200px] h-[200px] bg-blue-400" animate={{
        x:isAnimating ? "100px" :0 ,
        opacity:isAnimating ? 1 : 0.2,
        rotate:isAnimating ? 360 :0
       }}
        
       transition={{
         type:"spring",
         stiffness:100,
         damping:10
        }} 
  
        onClick={()=>setAnimation(!isAnimating)}>
        <h1>Box1</h1>
      </motion.div>
    </div>
  );
}

export default Box1
