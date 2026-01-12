import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Youth Sphere</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto leading-relaxed">
            Building a generation of innovative entrepreneurs who drive economic growth and create
            lasting positive change in their communities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Youth Sphere was founded with a simple yet powerful vision: to empower young people
                with the skills, resources, and support they need to become successful entrepreneurs.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Recognizing the immense potential and creativity of youth, we created a comprehensive
                ecosystem that bridges the gap between entrepreneurial dreams and business reality.
                Through hands-on training, expert mentorship, and access to critical resources, we've
                helped hundreds of young entrepreneurs transform their ideas into thriving businesses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Youth Sphere stands as a beacon of hope and opportunity, fostering innovation
                and creating pathways to economic independence for young people across the region.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
                alt="Youth Sphere team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-10 text-center">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To unlock the entrepreneurial potential of young people by providing comprehensive
                training, mentorship, and resources that enable them to build sustainable businesses
                and create meaningful impact.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-10 text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where every young person has the opportunity, skills, and support to become a
                successful entrepreneur, driving innovation, economic growth, and positive social
                change.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-10 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Innovation, integrity, collaboration, empowerment, and excellence guide everything we
                do. We believe in creating inclusive opportunities and fostering sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs are designed to support young entrepreneurs at every stage of
              their journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entrepreneurship Training</h3>
              <p className="text-gray-700 leading-relaxed">
                Intensive workshops and courses covering all aspects of starting and running a
                successful business.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8">
              <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Mentorship</h3>
              <p className="text-gray-700 leading-relaxed">
                One-on-one guidance from experienced entrepreneurs and business professionals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Access</h3>
              <p className="text-gray-700 leading-relaxed">
                Connect with funding opportunities, networking events, and essential business tools.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Networking Events</h3>
              <p className="text-gray-700 leading-relaxed">
                Regular meetups and conferences connecting young entrepreneurs with peers and partners.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-8">
              <div className="bg-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Market Linkages</h3>
              <p className="text-gray-700 leading-relaxed">
                Help connecting businesses with customers, suppliers, and strategic partners.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
              <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow-up Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Ongoing assistance and guidance as businesses grow and face new challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Through dedication and collaboration, we've created lasting change in the lives of young
              entrepreneurs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold text-teal-400 mb-2">500+</div>
                <div className="text-gray-300">Youth Trained</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-400 mb-2">150+</div>
                <div className="text-gray-300">Businesses Launched</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-400 mb-2">85%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-400 mb-2">1000+</div>
                <div className="text-gray-300">Jobs Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
