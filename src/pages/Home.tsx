import { Link } from 'react-router-dom';
import { TrendingUp, Users, Target, Award, ArrowRight, Briefcase, GraduationCap, Handshake } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Young Entrepreneurs
              </h1>
              <p className="text-xl mb-8 text-teal-50 leading-relaxed">
                Youth Sphere is dedicated to nurturing the next generation of business leaders through
                comprehensive training, mentorship, and access to resources that transform ideas into
                thriving enterprises.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/programs"
                  className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Programs
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all"
                >
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Young entrepreneurs collaborating"
                className="rounded-lg shadow-2xl w-full h-64 object-cover transform hover:scale-105 transition-transform"
              />
              <img
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg"
                alt="Business workshop"
                className="rounded-lg shadow-2xl w-full h-64 object-cover mt-8 transform hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Youth Empowered</p>
            </div>
            <div className="p-6">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Businesses Started</p>
            </div>
            <div className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
              <p className="text-gray-600">Training Programs</p>
            </div>
            <div className="p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">85%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Youth-Led Enterprise Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures young entrepreneurs have everything they need to succeed
              in today's competitive business landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Training</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive workshops covering business planning, financial management, marketing
                strategies, and operational excellence tailored for young entrepreneurs.
              </p>
              <Link
                to="/programs"
                className="text-teal-600 font-semibold flex items-center hover:text-teal-700"
              >
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Handshake className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mentorship</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with experienced business leaders who provide guidance, insights, and support
                throughout your entrepreneurial journey.
              </p>
              <Link
                to="/programs"
                className="text-teal-600 font-semibold flex items-center hover:text-teal-700"
              >
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Access to Resources</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get access to funding opportunities, networking events, co-working spaces, and essential
                tools to launch and grow your business.
              </p>
              <Link
                to="/programs"
                className="text-teal-600 font-semibold flex items-center hover:text-teal-700"
              >
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Youth Sphere exists to unlock the entrepreneurial potential of young people by providing
                them with the skills, knowledge, and resources needed to create sustainable businesses
                that drive economic growth and social impact.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We believe that every young person has the capacity to become a successful entrepreneur,
                and we're committed to breaking down barriers and creating pathways to success.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Learn About Us <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Young entrepreneurs at work"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join hundreds of young entrepreneurs who have transformed their ideas into successful
            businesses with Youth Sphere.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-lg font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
