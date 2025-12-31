'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Erro ao enviar')
      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#1a0a1a] dark:to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pronto para transformar sua empresa? Vamos conversar sobre seu projeto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Nome Completo *
                </label>
                <input
                  {...register('name', { required: 'Nome é obrigatório' })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  E-mail *
                </label>
                <input
                  {...register('email', { required: 'E-mail é obrigatório' })}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Empresa</label>
                  <input {...register('company')} className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Telefone</label>
                  <input {...register('phone')} className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Mensagem *</label>
                <textarea {...register('message', { required: true })} rows={5} className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none" />
              </div>

              <motion.button type="submit" className="w-full py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg">
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:glass dark:bg-[#3b0354]/20 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800 dark:text-white">E-mail</p>
                    <a href="mailto:contato@NeonCode.com" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">contato@NeonCode.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800 dark:text-white">Telefone</p>
                    <a href="tel:+5511999999999" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">+55 (11) 99999-9999</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800 dark:text-white">Endereço</p>
                    <p className="text-gray-600 dark:text-gray-300">Pindamonhangaba, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}