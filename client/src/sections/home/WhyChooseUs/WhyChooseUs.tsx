"use client"

import { FaRocket, FaMoneyBillAlt, FaHeadphones } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
}

const rocketVariants = {
  initial: { y: 0, opacity: 1 },
  animate: {
    y: [-10, -100, 0],  
    opacity: [1, 0, 1], 
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    }
  }
}

const moneyVariants = {
  animate: {
    rotate: [-5, 5, -5],  
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    }
  }
}

const headphonesVariants = {
  animate: {
    x: [0, 3, -3, 3, -3, 0], 
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut" as const ,
    }
  }
}

const WhyChooseUs = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 py-10 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                 
                    <motion.div
                      className="relative border border-[#1F2024] rounded-lg p-6"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05 }}
                    >
                        <motion.div 
                          className="absolute top-1/2 -translate-y-1/2 right-[-25px] text-[#e51515] p-3 rounded-full shadow-md"
                          variants={rocketVariants}
                          initial="initial"
                          animate="animate"
                        >
                            <FaRocket size={35} />
                        </motion.div>
                        <h4 className="text-sm text-gray-400 mb-2">FREE DELIVERY</h4>
                        <p className="text-gray-300 text-sm">Nam liber tempor cum soluta nobis eleifend option congue.</p>
                    </motion.div>

                   
                    <motion.div
                      className="relative border border-[#1F2024] rounded-lg p-6"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                        <motion.div 
                          className="absolute top-1/2 -translate-y-1/2 right-[-25px] text-[#e51515] p-3 rounded-full shadow-md"
                          variants={moneyVariants}
                          animate="animate"
                        >
                            <FaMoneyBillAlt size={40} />
                        </motion.div>
                        <h4 className="text-sm text-gray-400 mb-2">AFFORDABLE PRICES</h4>
                        <p className="text-gray-300 text-sm">Nam liber tempor cum soluta nobis eleifend option congue.</p>
                    </motion.div>

              
                    <motion.div
                      className="relative border border-[#1F2024] rounded-lg p-6"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                        <motion.div 
                          className="absolute top-1/2 -translate-y-1/2 right-[-25px] text-[#e51515] p-3 rounded-full shadow-md"
                          variants={headphonesVariants}
                          animate="animate"
                        >
                            <FaHeadphones size={35} />
                        </motion.div>
                        <h4 className="text-sm text-gray-400 mb-2">24/7 SUPPORT</h4>
                        <p className="text-gray-300 text-sm">Nam liber tempor cum soluta nobis eleifend option congue.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;
