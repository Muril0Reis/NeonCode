'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const values = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Eficiência',
    description: 'Soluções otimizadas para máxima performance e produtividade',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: 'Escalabilidade',
    description: 'Crescimento sustentável com arquiteturas preparadas para o futuro',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Segurança',
    description: 'Proteção de dados e conformidade com os mais altos padrões',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Inovação',
    description: 'Tecnologias de ponta e metodologias ágeis para resultados excepcionais',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-[#0a0a0a] dark:bg-gradient-to-b dark:from-[#0a0a0a] dark:via-[#1a0a1a] dark:to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
            A <strong className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">NeonCode Solutions</strong> é uma software house especializada
            em transformar ideias em soluções tecnológicas de alto impacto. Com anos
            de experiência no mercado, desenvolvemos software personalizado, plataformas
            SaaS escaláveis e sistemas ERP completos que impulsionam o crescimento
            empresarial.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
            Nossa equipe multidisciplinar combina expertise técnica com visão de negócios,
            garantindo que cada projeto não apenas atenda às necessidades atuais, mas
            também esteja preparado para o futuro. Trabalhamos com metodologias ágeis,
            tecnologias modernas e foco total na experiência do usuário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-indigo-50 to-pink-50 dark:glass dark:bg-[#3b0354]/20 dark:from-[#3b0354]/20 dark:to-[#3b0354]/10 p-6 rounded-xl shadow-lg dark:hover:shadow-[#3b0354]/30 hover:shadow-xl transition-shadow"
            >
              <motion.div
                className="text-pink-500 mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                  {value.title}
                </span>
              </h3>
              <p className="dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

