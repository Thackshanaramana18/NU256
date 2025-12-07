export default function About() {
  const stats = [
    { number: '500+', label: 'Research Partners' },
    { number: '2M+', label: 'Genomes Analyzed' },
    { number: '150+', label: 'Countries Served' },
  ];

  return (
    <section id="about" className="page">
      <div className="page-container">
        <div className="mb-12">
          <h2 className="section-title">About NU256</h2>
          <p className="section-subtitle">Leading the future of genomic medicine through innovation and excellence</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">Our Story</h3>
              <p className="text-gray-300 leading-relaxed">
                Founded by a team of visionary genomic researchers, NU256 emerged from a simple belief: great science should be intuitive, accessible, and transformative. We recognized the complexity in genomic analysis and set out to change it.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Our Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                We combine cutting-edge technology with human-centered design. Every tool, every interface, every feature is crafted with the end user in mind—whether researcher or clinician.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-green-500 border-opacity-20"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
