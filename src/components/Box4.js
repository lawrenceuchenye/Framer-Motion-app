import {useState} from "react";
import { motion } from "framer-motion";

const Box1=()=>{
  
  return(
   <div className="p-4 pb-[10rem]">
     <motion.div className="w-[200px] h-[200px] bg-orange-400"
      animate={{
        scale:[1,1.4,1.4,1,1],
        borderRadius:["20%","20%","50%","50%","20%"],
        rotate:[0,0,270,270,0]
      }}
      transition={{
        duration:2
      }}
      >
        <h1>Box1</h1>
      </motion.div>
    </div>
  );
}

export default Box1
