export default function Onboarding() {
  return (
    <section id="onboarding" className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Get Started in 3 Simple Steps
          </h2>
        </div>
        <div className="relative">
          <div className="border-l-2 border-primary-gold absolute h-full left-1/2 -translate-x-1/2"></div>
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-bold text-primary-gold">Step 1: Book a Call</h3>
                <p className="text-text-secondary">Schedule a free consultation with our team to discuss your goals.</p>
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-primary-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-background-dark">1</div>
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="w-1/2 pr-8">
                <div className="bg-primary-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-background-dark ml-auto">2</div>
              </div>
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-xl font-bold text-primary-gold">Step 2: Complete Onboarding</h3>
                <p className="text-text-secondary">We'll guide you through the process of setting up your account.</p>
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-bold text-primary-gold">Step 3: Start Mirroring</h3>
                <p className="text-text-secondary">Choose your expert and start copying trades automatically.</p>
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-primary-gold w-8 h-8 rounded-full flex items-center justify-center font-bold text-background-dark">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
