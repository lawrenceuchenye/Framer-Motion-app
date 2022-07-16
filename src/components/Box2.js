import {useState} from "react";
import { motion } from "framer-motion";

const Box2=()=>{
  const [isAnimating,setAnimation]=useState(false);
  return(
   <div className="p-4 pb-[10rem]">
     <motion.div 
        className="w-[200px] h-[200px] bg-green-400"
        whileHover={{
         scale:1.1
        }}
        whileTap={{
          scale:0.9
        }} drag dragConstraints={{
          right:20,left:20,top:20,bottom:20
        }}>
        <h1>Box2</h1>
      </motion.div>
    </div>
  );
}

export default Box2;
