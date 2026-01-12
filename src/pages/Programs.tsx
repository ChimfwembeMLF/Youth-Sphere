import { BookOpen, Users, TrendingUp, Award, Target, Briefcase, DollarSign, Lightbulb } from 'lucide-react';

export default function Programs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto leading-relaxed">
            Comprehensive training and support programs designed to transform young people into
            successful entrepreneurs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Youth-Led Enterprise Development Initiative
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship program empowers young entrepreneurs through a holistic approach to business
              development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-teal-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Entrepreneurship Bootcamp
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                An intensive 6-week program covering essential business fundamentals including business
                planning, financial management, marketing, and operations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Business model development
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Market research and analysis
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Financial planning and budgeting
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Digital marketing strategies
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-cyan-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mentorship Program
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Connect with experienced entrepreneurs and business leaders who provide personalized
                guidance and support throughout your entrepreneurial journey.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">•</span>
                  One-on-one mentorship sessions
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">•</span>
                  Industry-specific guidance
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">•</span>
                  Strategic planning support
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">•</span>
                  Network expansion opportunities
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Access to Capital
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Support in securing funding through grants, loans, and investor connections to help
                launch and scale your business.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Grant application assistance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Investor pitch preparation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Microfinance connections
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Crowdfunding strategies
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Incubation
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Access to co-working spaces, resources, and ongoing support as you develop and grow
                your business.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Workspace facilities
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Technology and equipment access
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Legal and accounting support
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Peer collaboration opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Specialized Training Tracks</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-specific programs tailored to different business sectors and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all">
              <Briefcase className="h-10 w-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Agribusiness</h3>
              <p className="text-gray-300 text-sm">
                Modern farming techniques, value addition, and agricultural enterprise management.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all">
              <TrendingUp className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Technology</h3>
              <p className="text-gray-300 text-sm">
                Digital solutions, app development, and tech-based business models.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all">
              <Award className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Creative Arts</h3>
              <p className="text-gray-300 text-sm">
                Monetizing creative talents in fashion, design, music, and media.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all">
              <Lightbulb className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Enterprise</h3>
              <p className="text-gray-300 text-sm">
                Building businesses that create social impact and address community challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What you gain from participating in Youth Sphere programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Practical Skills</h3>
              <p className="text-gray-600 leading-relaxed">
                Hands-on training in real-world business scenarios that prepare you for entrepreneurial
                success.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Network Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with fellow entrepreneurs, mentors, investors, and potential business partners.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certification</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive recognized certificates upon completion that validate your entrepreneurial
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Programs?</h2>
          <p className="text-xl text-teal-50 mb-10 leading-relaxed">
            Take the first step towards building your successful business. Applications are now open
            for our next cohort.
          </p>
          <button className="bg-white text-teal-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
