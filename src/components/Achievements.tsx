'use client';

import { useEffect, useRef, useState } from 'react';

export default function Achievements() {
  const achievements = [
    { icon: 'mdi:dna', number: 500, label: 'Genomes Processed' },
    { icon: 'mdi:hospital-box', number: 150, label: 'Medical Centers' },
    { icon: 'mdi:beaker', number: 200, label: 'Research Projects' },
    { icon: 'mdi:lightbulb', number: 75, label: 'Patents Filed' },
  ];

  const values = [
    { icon: 'mdi:star', title: 'Excellence', desc: 'Uncompromising scientific rigor in every decision' },
    { icon: 'mdi:handshake', title: 'Collaboration', desc: 'Working together across disciplines' },
    { icon: 'mdi:rocket', title: 'Innovation', desc: 'Pioneering new approaches in genomics' },
    { icon: 'mdi:heart', title: 'Impact', desc: 'Creating tangible change in healthcare' },
  ];

  const [displayedNumbers, setDisplayedNumbers] = useState<Record<number, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          achievements.forEach((achievement, idx) => {
            let current = 0;
            const interval = setInterval(() => {
              current += Math.ceil(achievement.number / 50);
              if (current >= achievement.number) {
                setDisplayedNumbers((prev) => ({ ...prev, [idx]: achievement.number }));
                clearInterval(interval);
              } else {
                setDisplayedNumbers((prev) => ({ ...prev, [idx]: current }));
              }
            }, 30);
          });
          observer.unobserve(entry.target);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="page">
      <div className="page-container">
        <div ref={sectionRef}>
          <h2 className="section-title">What We Have Done</h2>
          <p className="section-subtitle">Transforming genomic science through measurable impact</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-green-500 border-opacity-20 text-center"
              >
                <div className="text-4xl mb-4">
                  <i className={`iconify text-green-400`} data-icon={ach.icon}></i>
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {displayedNumbers[idx] || 0}
                </div>
                <div className="text-gray-300">{ach.label}</div>
              </div>
            ))}
          </div>

          <div className="my-12 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

          <h2 className="section-title mt-12">What We Value</h2>
          <p className="section-subtitle">Core principles driving everything we do</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-green-500 border-opacity-20 text-center hover:border-green-400 hover:border-opacity-50 transition"
              >
                <div className="text-4xl mb-3 text-green-400">
                  <i className="iconify" data-icon={value.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
