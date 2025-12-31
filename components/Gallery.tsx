'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const developers = [
    {
      name: 'Murilo Reis',
      image: 'https://media.istockphoto.com/id/1175673630/pt/vetorial/nerd-face-emoji-clever-emoticon-with-glasses-geek-or-student.jpg?s=612x612&w=0&k=20&c=wiPDE0VUjGI1K3QUyvN2I1aQxT3PbxK7VArjE9mJwlM=',
      description: 'FullStack Developer | Cybersecurity Enthusiast',
    },
    {
      name: 'Henry Oliveira',
      image: 'https://media.istockphoto.com/id/1175673630/pt/vetorial/nerd-face-emoji-clever-emoticon-with-glasses-geek-or-student.jpg?s=612x612&w=0&k=20&c=wiPDE0VUjGI1K3QUyvN2I1aQxT3PbxK7VArjE9mJwlM=',
      description: 'FullStack Developer | Data Scientist',
    },
  ]

  return (
    <section id="gallery" ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:via-[#1a0a1a] dark:to-[#0a0a0a]">
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Desenvolvedores
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-8" />
          <p className="text-lg font-bold text-gray-800 dark:text-white mb-4-auto">
            Conheça os profissionais que tornam seus projetos realidade
          </p>
        </motion.div>

        <div className="flex justify-center items-stretch gap-12 max-w-5xl mx-auto flex-wrap lg:flex-nowrap">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="slide-card flex flex-col w-full lg:w-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 dark:shadow-[#3b0354]/20 bg-white dark:bg-[#1a0a2e] border border-gray-200 dark:border-purple-900/30"
            >
              {/* Imagem */}
              <div className="relative w-full h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {dev.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {dev.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}