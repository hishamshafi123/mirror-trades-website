import { Shield, Zap, Award } from 'lucide-react'

export default function Trust() {
  return (
    <section id="trust" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Built on Trust and Transparency
          </h2>
          <p className="text-lg text-text-secondary mt-4">
            Your security and peace of mind are our top priorities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Shield size={48} className="text-primary-gold mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">Secure Platform</h3>
            <p className="text-text-secondary">
              We use state-of-the-art encryption and security protocols to protect your data and funds.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Zap size={48} className="text-primary-gold mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">Instant Execution</h3>
            <p className="text-text-secondary">
              Our technology ensures that trades are copied instantly and accurately, without any delays.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Award size={48} className="text-primary-gold mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">Regulated Brokers</h3>
            <p className="text-text-secondary">
              We partner with fully regulated brokers to ensure the safety of your investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
