export default function Technology() {
  const features = [
    {
      number: '01',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud-based computing infrastructure supporting enterprise-level genomic analysis.',
    },
    {
      number: '02',
      title: 'AI-Powered Analytics',
      description: 'Machine learning algorithms trained on millions of genomic datasets for predictive insights.',
    },
    {
      number: '03',
      title: 'Data Security',
      description: 'Military-grade encryption and compliance with HIPAA, GDPR, and international data protection standards.',
    },
  ];

  return (
    <section id="technology" className="page">
      <div className="page-container">
        <h2 className="section-title">Advanced Technology Platform</h2>
        <p className="section-subtitle">Next-generation tools and infrastructure for genomic discovery.</p>

        <div className="space-y-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <div className="text-5xl font-bold text-green-500 opacity-20">{feature.number}</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
