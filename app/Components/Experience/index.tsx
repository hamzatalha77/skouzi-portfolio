import React from 'react'
import { motion, Variants } from 'framer-motion'
import { fadeIn } from '@/app/utils/variants'

const Experience = () => {
  return (
    <section id="experience">
      <div className="py-10 ">
        <h2 className="mb-8 text-3xl text-gray-300 text-center">
          My <span>Experience</span>
        </h2>

        <motion.div
          variants={fadeIn('up', 0.2) as unknown as Variants}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto"
        >
          <p>First company</p>
          <p className="text-gray-400">(2020 - present)</p>
          <p className="text-gray-500">
            Description of your experience in this company
          </p>
        </motion.div>
        <div className="h-[50px] w-[2px] bg-slate-400  my-1 mx-auto"></div>
        <motion.div
          variants={fadeIn('up', 0.4) as unknown as Variants}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.33 }}
          className="mb-[20px] text-white  bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto"
        >
          <p>First company</p>
          <p className="text-gray-400">(2020 - present)</p>
          <p className="text-gray-500">
            Description of your experience in this company
          </p>
        </motion.div>
        <div className="h-[50px] w-[2px] bg-slate-400  my-1 mx-auto"></div>
        <motion.div
          variants={fadeIn('up', 0.6) as unknown as Variants}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-[20px] text-white  bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto"
        >
          <p>First company</p>
          <p className="text-gray-400">(2020 - present)</p>
          <p className="text-gray-500">
            Description of your experience in this company
          </p>
        </motion.div>
        <div className="h-[50px] w-[2px] bg-slate-400  my-1 mx-auto"></div>
        <motion.div
          variants={fadeIn('up', 0.8) as unknown as Variants}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.48 }}
          className="mb-[20px] text-white  bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto"
        >
          <p>First company</p>
          <p className="text-gray-400">(2020 - present)</p>
          <p className="text-gray-500">
            Description of your experience in this company
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
