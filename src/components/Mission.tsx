export default function Mission() {
  return (
    <section id="mission" className="page">
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Our Mission</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-400 mb-6"></div>
          <p className="section-subtitle">Advancing genomic science with elegance and precision</p>

          <div className="space-y-8">
            <div className="animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-3">The Foundation</h3>
              <p className="text-gray-300 leading-relaxed">
                Founded by genomic researchers tired of complexity, NU256 was created to decode the human genome with elegance and precision. We believe great science should feel intuitive, accessible, and transformative.
              </p>
            </div>

            <div className="animate-slideInRight">
              <h3 className="text-2xl font-bold mb-3">Our Commitment</h3>
              <p className="text-gray-300 leading-relaxed">
                We make advanced genomic analysis accessible to everyone—from researchers to patients. No gatekeeping. Pure science for the benefit of humanity. Our commitment is unwavering: excellence in service of discovery.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 border-l-4 border-green-500 bg-gray-900 bg-opacity-50">
            <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
            <p className="text-green-400 text-lg mb-4">
              A world where genomic intelligence drives precision medicine at scale.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where every medical decision is informed by genomic insights. Where personalized treatment becomes standard. Where the boundaries of human health expand beyond what we thought possible. This is the future we're building, today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
