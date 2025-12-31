'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    title: 'SaaS Barbearia',
    description: 'Plataforma completa de desenvolvimento com Firebase, oferecendo ferramentas integradas para gerenciamento de projetos e banco de dados em tempo real',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800',
    category: 'SaaS',
    icon: '✂',
    details: [
      'SaaS completo para gestão de barbearias',
      'Sistema de agendamentos online',
      'Gerenciamento de clientes e serviços',
      'Dashboard analítico em tempo real',
      'Integração com Firebase e Cloud Functions',
    ],
  },
  {
    title: 'SelfOrder',
    description: 'Sistema inteligente de autoatendimento para restaurantes e lanchonetes, permitindo pedidos rápidos e eficientes diretamente pelo cliente',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    category: 'Mobile',
    icon: '🍔',
    details: [
      'Sistema de autoatendimento para restaurantes',
      'Interface intuitiva para clientes',
      'Painel administrativo para restaurantes',
      'Gestão de cardápio digital',
      'QR Code para acesso rápido',
    ],
  },
  {
    title: 'Landing Page Inovadora',
    description: 'Página de conversão com animações 3D e scroll effects para startup de tecnologia',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    category: 'Web',
    icon: '🚀',
    details: [
      'Design moderno e responsivo',
      'Animações 3D com Three.js',
      'Scroll animations interativas',
      'Otimizado para conversão',
      'Performance de carregamento excepcional',
    ],
  },
  {
    title: 'App de Produtividade',
    description: 'Aplicativo minimalista com foco em usabilidade e design clean para máxima eficiência',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    category: 'Mobile',
    icon: '📱',
    details: [
      'Interface minimalista e intuitiva',
      'Sincronização em nuvem',
      'Notificações inteligentes',
      'Tema claro e escuro',
      'Disponível para iOS e Android',
    ],
  },
  {
    title: 'Dashboard Analytics',
    description: 'Painel interativo com visualizações de dados em tempo real e animações sofisticadas',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Analytics',
    icon: '🎯',
    details: [
      'Visualizações de dados interativas',
      'Gráficos em tempo real',
      'Filtros e segmentações avançadas',
      'Exportação de relatórios',
      'API RESTful integrada',
    ],
  },
  {
    title: 'Branding Completo',
    description: 'Identidade visual única e memorável para empresa inovadora do setor tech',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    category: 'Design',
    icon: '✨',
    details: [
      'Criação de logotipo e identidade visual',
      'Manual de marca completo',
      'Aplicações em diversos materiais',
      'Paleta de cores estratégica',
      'Tipografia customizada',
    ],
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-white dark:bg-[#0a0a0a] dark:bg-gradient-to-b dark:from-[#0a0a0a] dark:via-[#1a0a1a] dark:to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Portfólio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Projetos que transformaram negócios e impulsionaram resultados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10, y: -8 }}
              className="bg-white dark:glass dark:bg-[#3b0354]/20 rounded-xl border-2 border-gray-200 dark:border-[#3b0354]/30 hover:border-indigo-400 dark:hover:border-[#3b0354]/50 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 dark:hover:from-[#3b0354]/30 dark:hover:to-[#3b0354]/10 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/30 dark:hover:shadow-[#3b0354]/50 overflow-hidden cursor-pointer group relative shimmer transition-all duration-300"
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-4xl mr-3">{project.icon}</span>
                  <h3 className="text-xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                      {project.title}
                    </span>
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {selectedProject === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                      Sobre o Projeto
                    </h4>
                    <ul className="space-y-2">
                      {project.details?.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 dark:text-gray-200">
                          <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}