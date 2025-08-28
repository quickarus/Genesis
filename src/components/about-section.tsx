'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-15 bg-black">
      <div className="max-w-screen-xl mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dark/75 backdrop-blur-lg rounded-lg p-10 max-w-4xl"
        >
          <p className="text-lg text-white leading-relaxed font-medium">
            Genesis is a premier supplier in the commercial aviation industry. We specialize in inventory solutions to the worldwide aviation marketplace. With over 50 years combined experience in aircraft maintenance, finance solutions, and asset management, our team prides itself in our commitment to integrity, flexibility, and quality of work.
          </p>
          <br />
          <p className="text-lg text-white leading-relaxed font-medium">
            As an international service company, we work closely with our network of partners to meet a wide range of material requirements for customers. From simple parts transactions to highly intricate supply chain management programs, we are committed to providing practical business solutions that meet our customer needs.
          </p>
          <br />
          <p className="text-lg text-white leading-relaxed font-medium">
            We are a trusted partner in the commercial aerospace aftermarket for supply, purchase, exchange, lease, and repair management. We offer a direct link between your commercial aircraft and engine needs and innovative, cost effective, quality driven inventory solutions. At Genesis Aircraft our commitment is to you, the customer and is driven by integrity, technology and the highest quality standards.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
