export default function Research() {
  const researchAreas = [
    {
      title: 'Genome Sequencing',
      description: 'Ultra-high-throughput DNA sequencing technology enabling complete genome analysis with unprecedented speed and accuracy.',
    },
    {
      title: 'Molecular Analysis',
      description: 'Advanced protein and RNA analysis using state-of-the-art mass spectrometry and bioinformatics platforms.',
    },
    {
      title: 'Genomic Integration',
      description: 'Comprehensive data integration platforms combining multiple genomic data sources for holistic analysis.',
    },
  ];

  return (
    <section id="research" className="page">
      <div className="page-container">
        <h2 className="section-title">Research & Development</h2>
        <p className="section-subtitle">Pioneering genomic breakthroughs through cutting-edge research and innovation.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-l-4 border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition"
            >
              <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-300 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
