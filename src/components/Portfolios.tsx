
import portfolioData from '@/content/portfolios.json'

export default function Portfolios() {
  return (
    <section id="portfolios" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Our Portfolios
          </h2>
          <p className="text-lg text-text-secondary mt-4">
            Choose the portfolio that best fits your risk tolerance and investment goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((portfolio) => (
            <div key={portfolio.id} className="bg-surface-dark rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold text-primary-gold mb-4">{portfolio.name}</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-text-secondary">Gain</p>
                  <p className="text-2xl font-bold text-success-green">{portfolio.gain}</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Drawdown</p>
                  <p className="text-2xl font-bold text-warning-red">{portfolio.drawdown}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Monthly</p>
                <p className="text-lg font-bold text-text-primary">{portfolio.monthly}</p>
              </div>
              <div className="mt-auto pt-4">
                <p className="text-sm text-text-secondary">Trading since {portfolio.since}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
