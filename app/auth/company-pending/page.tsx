'use client'

import Link from 'next/link'
import { CheckCircle, Clock, Mail, ArrowLeft } from 'lucide-react'

export default function CompanyPendingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-baby-powder to-celeste/20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-classical-pattern opacity-10"></div>
      
      <div className="max-w-md w-full space-y-8 relative">
        <div className="neoclassical-card p-8 rounded-xl shadow-2xl text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-celeste to-bright-pink rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Clock className="w-10 h-10 text-baby-powder" />
          </div>
          
          <h2 className="text-2xl font-serif font-bold text-persian-indigo mb-4">
            Application Under Review
          </h2>
          
          <p className="text-eggplant mb-6 leading-relaxed">
            Thank you for your interest in joining ΠΡΑΞΙΣ! Your company application 
            has been submitted and is currently under review by our team.
          </p>
          
          <div className="bg-celeste/20 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <CheckCircle className="w-5 h-5 text-bright-pink" />
              <span className="font-semibold text-persian-indigo">What happens next?</span>
            </div>
            <ul className="text-left text-eggplant space-y-2 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-bright-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Our team will review your application within 24-48 hours
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-bright-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You'll receive an email notification once approved
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-bright-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Access to your company dashboard will be granted immediately
              </li>
            </ul>
          </div>
          
          <div className="bg-bright-pink/10 border border-bright-pink/20 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Mail className="w-4 h-4 text-bright-pink" />
              <span className="font-semibold text-persian-indigo text-sm">Need assistance?</span>
            </div>
            <p className="text-xs text-eggplant">
              Contact us at <span className="font-semibold">companies@praxis.com</span> for any questions
            </p>
          </div>
          
          <Link 
            href="/" 
            className="inline-flex items-center text-persian-indigo hover:text-bright-pink transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to ΠΡΑΞΙΣ
          </Link>
        </div>
      </div>
    </div>
  )
}