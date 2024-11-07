'use client'

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


// width = "fit-content" | "100%";
const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    const textControl = useAnimation()
    const revealControl = useAnimation()

    useEffect(() => {
        if(isInView){
            textControl.start("visible")
            revealControl.start("visible")

        }
    
    }, [isInView])
    
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        initial="hidden"
        animate={textControl}
        viewport={{ once: true }}
        transition={{duration:0.5, ease:"easeIn"}}
      >
        {children}
      </motion.div>
      <motion.div
      variants={{
        hidden:{left:0},
        visible:{left:"100%"}
      }}
      initial="hidden"
      animate={revealControl}
      transition={{duration:0.6, ease:"easeIn"}}
      style={
        {
            position:"absolute",
            top:4,
            bottom:4,
            left:0,
            right:0,
            background:"hsl(var(--primary));",
            zIndex:20
        }
    }
      />
    </div>
  );
};

export default Reveal;