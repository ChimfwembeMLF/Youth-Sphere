export default function Gallery() {
  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      title: 'Entrepreneurship Workshop',
      description: 'Young entrepreneurs learning business fundamentals',
    },
    {
      url: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg',
      title: 'Team Collaboration',
      description: 'Participants working together on business plans',
    },
    {
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      title: 'Mentorship Session',
      description: 'One-on-one guidance from experienced mentors',
    },
    {
      url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      title: 'Business Pitch Event',
      description: 'Entrepreneurs presenting their ideas to investors',
    },
    {
      url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      title: 'Training Program',
      description: 'Interactive sessions on financial management',
    },
    {
      url: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg',
      title: 'Graduation Ceremony',
      description: 'Celebrating successful program completion',
    },
    {
      url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      title: 'Networking Event',
      description: 'Building connections and partnerships',
    },
    {
      url: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      title: 'Hands-On Workshop',
      description: 'Practical business skills development',
    },
    {
      url: 'https://images.pexels.com/photos/3184658/pexels-photo-3184658.jpeg',
      title: 'Community Outreach',
      description: 'Engaging with local communities',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto leading-relaxed">
            Capturing moments of growth, learning, and success in our journey to empower young
            entrepreneurs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from young entrepreneurs who have transformed their lives through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Success story"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "Youth Sphere gave me the skills and confidence to start my own tech company. The
                mentorship was invaluable!"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Sarah Mwanza</h4>
                <p className="text-sm text-teal-600">Tech Startup Founder</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
                  alt="Success story"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "The training programs equipped me with practical business knowledge that I use every
                day in running my agribusiness."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">James Banda</h4>
                <p className="text-sm text-cyan-600">Agribusiness Owner</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
                  alt="Success story"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "Through Youth Sphere, I connected with investors and secured funding to scale my
                fashion business to new markets."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Grace Phiri</h4>
                <p className="text-sm text-blue-600">Fashion Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-xl text-teal-50 mb-10 leading-relaxed">
            Join our community of successful young entrepreneurs and create your own success story.
          </p>
          <button className="bg-white text-teal-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
