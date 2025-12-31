'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Desenvolvimento de Software',
    description: 'Criamos aplicações personalizadas sob medida para suas necessidades específicas, utilizando as melhores práticas e tecnologias modernas.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: ['Aplicações Web e Mobile', 'Arquitetura Escalável', 'API RESTful', 'Integração com Sistemas'],
  },
  {
    title: 'Soluções SaaS',
    description: 'Plataformas SaaS completas e escaláveis, prontas para crescer com seu negócio. Multi-tenant, seguras e de fácil manutenção.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: ['Multi-tenant', 'Escalabilidade Automática', 'Billing Integrado', 'Dashboard Analytics'],
  },
  {
    title: 'Implementação ERP',
    description: 'Sistemas ERP completos para gestão empresarial, integrando todos os processos da sua organização em uma única plataforma.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: ['Gestão Financeira', 'Controle de Estoque', 'RH e Folha de Pagamento', 'Relatórios Gerenciais'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#1a0a1a] dark:to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluções completas para transformar sua empresa digitalmente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
              className="bg-white dark:glass dark:bg-[#3b0354]/20 p-8 rounded-xl shadow-lg hover:shadow-2xl dark:hover:shadow-[#3b0354]/30 transition-all duration-300 border border-gray-100 dark:border-[#3b0354]/30"
            >
              <motion.div
                className="text-pink-500 mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                  {service.title}
                </span>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Saiba Mais
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}