'use client';

import { useState } from 'react';

const services = [
  {
    icon: 'mdi:dna',
    title: 'Genomic Sequencing',
    description: 'Ultra-high-throughput DNA sequencing with real-time analysis and AI-driven insights.',
  },
  {
    icon: 'mdi:brain',
    title: 'AI Analytics',
    description: 'Machine learning models for pattern recognition and predictive genomics.',
  },
  {
    icon: 'mdi:molecule',
    title: 'Drug Development',
    description: 'Accelerated therapeutic development using genomic insights.',
  },
  {
    icon: 'mdi:microscope',
    title: 'Research Services',
    description: 'Comprehensive genomic research and specialized consulting.',
  },
  {
    icon: 'mdi:chart-box',
    title: 'Data Intelligence',
    description: 'Real-time genomic data platform with advanced visualization.',
  },
  {
    icon: 'mdi:network',
    title: 'Global Network',
    description: 'Strategic partnerships with leading institutions worldwide.',
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="page">
      <div className="page-container">
        <h2 className="section-title">Our Services</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-400 mb-6"></div>
        <p className="section-subtitle">Comprehensive genomic solutions for modern healthcare</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-green-500 border-opacity-20 cursor-pointer hover:border-green-400 hover:border-opacity-50 hover:shadow-lg hover:shadow-green-500/20 transition"
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            >
              <div className="text-4xl mb-3 text-green-400">
                <i className="iconify" data-icon={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
              {expandedIndex === idx && (
                <div className="mt-4 pt-4 border-t border-green-500 border-opacity-20">
                  <p className="text-gray-400 text-xs">Click to explore more details</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
