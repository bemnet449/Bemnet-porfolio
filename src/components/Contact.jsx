import { CONTACT } from "../constants"
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2
          whileInView={{y: 0, opacity: 1}}
          initial ={{y: -100, opacity: 0}}
          transition={{ duration: 1.5}} className="text-center text-4xl mb-10">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p
             whileInView={{x: 0, opacity: 1}}
             initial ={{x: -100, opacity: 0}}
             transition={{ duration: 1.5}}
             className="my-4">{CONTACT.address}</motion.p>
            <motion.p
             whileInView={{x: 0, opacity: 1}}
             initial ={{x: -100, opacity: 0}}
             transition={{ duration: 1.5}}
             className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="mailto:bonvack01@gmail.com" className="my-4 border-b">{CONTACT.email}</a>
        </div>
        
    </div>
  )
}

export default Contact