import { motion } from "framer-motion";

const Box3=()=>{
  const boxVariants={
     hidden:{
       x:"-100vw"
     },
     visible:{
      x:0,
      transition:{
         delay:0.5,
         when:"beforeChildren",
         staggerChildren:0.3
      }
     }
  }

 const ListVariants={
    hidden:{
      opacity:0,
      x:-10
    },
    visible:{
      opacity:1,
      x:0
    }
  }

  return(
   <div className="p-4 pb-[10rem]">
     <motion.div 
        variants={boxVariants}
        animate="visible"
        initial="hidden"
        className="w-[200px] h-[200px] bg-red-400 list-none flex justify-center flex-col"
        >
        {[1,2,3].map(box=>{
          return (
           <div className="w-full flex justify-center">
              <motion.li variants={ListVariants} className="p-4 m-3 w-[20px] bg-white  h-[20px]"></motion.li>
            </div>
          )
         })}
      </motion.div>
    </div>
  );
}

export default Box3;
