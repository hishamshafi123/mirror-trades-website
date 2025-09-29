'use client'

import { useParams, useRouter } from "next/navigation";
import Head from "next/head";

export default function RiskDisclosurePage() {
  const params = useParams();
  const router = useRouter();
  const lang = params.lang as string;

  return (
    <>
      <Head>
        <title>Αποκάλυψη Κινδύνων - Mirror Trades</title>
        <meta name="description" content="Αποκάλυψη Κινδύνων για τις υπηρεσίες της Mirror Trades" />
      </Head>
      <main className="min-h-screen bg-background-dark text-text-primary">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Language Toggle */}
          <div className="text-center mb-8">
            <div className="inline-flex bg-background-dark border border-primary-gold/30 rounded-lg p-1">
              <button
                onClick={() => window.location.href = '/el/risk-disclosure'}
                className={`px-4 py-2 rounded-md transition-colors ${
                  lang === 'el' ? 'bg-primary-gold text-background-dark' : 'text-primary-gold hover:text-secondary-gold'
                }`}
              >
                Ελληνικά
              </button>
              <button
                onClick={() => window.location.href = '/en/risk-disclosure'}
                className={`px-4 py-2 rounded-md transition-colors ${
                  lang === 'en' ? 'bg-primary-gold text-background-dark' : 'text-primary-gold hover:text-secondary-gold'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-gold mb-4">
              {lang === 'el' ? 'Mirror Trades - Αποκάλυψη Κινδύνων' : 'Mirror Trades - Risk Disclosure'}
            </h1>
            <div className="w-24 h-1 bg-primary-gold mx-auto"></div>
          </div>

          <div className="bg-background-dark border border-primary-gold/20 rounded-xl p-8 shadow-xl">
            {lang === 'el' ? (
              /* Greek Content */
              <div className="space-y-8 text-text-primary">
                <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-bold text-red-400 mb-4">ΣΗΜΑΝΤΙΚΗ ΠΡΟΕΙΔΟΠΟΙΗΣΗ ΚΙΝΔΥΝΟΥ</h2>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    Το trading στις χρηματοπιστωτικές αγορές, συμπεριλαμβανομένου του copy trading, ενέχει σημαντικούς κινδύνους και δεν είναι κατάλληλο για όλους τους επενδυτές. Παρακαλούμε διαβάστε προσεκτικά την παρούσα Αποκάλυψη Κινδύνων πριν συμμετάσχετε σε οποιαδήποτε δραστηριότητα trading μέσω των υπηρεσιών της Mirror Trades.
                  </p>
                </div>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">1. Φύση των Κινδύνων</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Απώλεια Κεφαλαίου:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Το trading στα χρηματοπιστωτικά μέσα μπορεί να οδηγήσει σε σημαντικές απώλειες, συμπεριλαμβανομένης της πλήρους απώλειας του επενδεδυμένου κεφαλαίου. Σύμφωνα με ρυθμιστικές στατιστικές, 67-89% των λογαριασμών ιδιωτών επενδυτών χάνουν χρήματα όταν κάνουν συναλλαγές σε CFDs. Δεν πρέπει ποτέ να επενδύσετε χρήματα που δεν μπορείτε να χάσετε.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Μόχλευση (Leverage):</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Τα προϊόντα με μόχλευση όπως τα CFDs μπορούν να ενισχύσουν τόσο τα κέρδη όσο και τις ζημίες. Ακόμη και μικρές κινήσεις στην αγορά μπορούν να έχουν σημαντικό αντίκτυπο στον λογαριασμό σας. Μόχλευση 1:500 σημαίνει ότι μια κίνηση 0.2% κατά την αντίθετη κατεύθυνση μπορεί να προκαλέσει απώλεια 100% του κεφαλαίου σας.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">2. Ειδικοί Κίνδυνοι Copy Trading</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Εξάρτηση από Τρίτους:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Στο copy trading, οι επενδυτικές αποφάσεις λαμβάνονται από τους signal providers/traders που επιλέγετε να αντιγράψετε. Δεν έχετε άμεσο έλεγχο των συναλλαγών και βασίζεστε στη στρατηγική, εμπειρία και κρίση άλλων.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Παρελθούσες Επιδόσεις:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Οι προηγούμενες επιδόσεις των traders δεν εγγυώνται μελλοντικά αποτελέσματα. Ένας trader που είχε επιτυχία στο παρελθόν μπορεί να υποστεί σημαντικές ζημίες στο μέλλον.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Χρονισμός Εισόδου:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Μπορεί να εισέλθετε στην αντιγραφή ενός trader σε δυσμενή χρονική στιγμή, ακόμη και αν ο trader είναι γενικά επιτυχημένος.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Slippage και Καθυστερήσεις:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Μπορεί να υπάρχουν καθυστερήσεις στην αντιγραφή των συναλλαγών, με αποτέλεσμα διαφορετικές τιμές εκτέλεσης από αυτές του αρχικού trader.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">3. Κίνδυνοι Αγοράς</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Μεταβλητότητα:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Οι χρηματοπιστωτικές αγορές είναι εξαιρετικά μεταβλητές. Οι τιμές μπορούν να κινηθούν γρήγορα και απρόβλεπτα λόγω γεωπολιτικών γεγονότων, οικονομικών ανακοινώσεων, ή άλλων παραγόντων.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Κίνδυνος Ρευστότητας:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Σε περιόδους υψηλής μεταβλητότητας ή σε εξωτικά ζεύγη νομισμάτων, μπορεί να υπάρχει περιορισμένη ρευστότητα, καθιστώντας δύσκολη την εκτέλεση συναλλαγών στις επιθυμητές τιμές.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Gaps:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Οι αγορές μπορούν να ανοίξουν με σημαντικά κενά (gaps) σε σχέση με το προηγούμενο κλείσιμο, ειδικά μετά από σαββατοκύριακα ή σημαντικά γεγονότα.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">4. Τεχνικοί και Επιχειρησιακοί Κίνδυνοι</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Διακοπές Συστήματος:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Τεχνικά προβλήματα στις πλατφόρμες trading μπορούν να αποτρέψουν την εκτέλεση συναλλαγών ή να προκαλέσουν καθυστερήσεις.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Κίνδυνος Broker:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Παρά τις ρυθμιστικές προστασίες, υπάρχει κίνδυνος αφερεγγυότητας του broker ή άλλων λειτουργικών προβλημάτων.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Κυβερνοασφάλεια:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Κίνδυνοι από κυβερνοεπιθέσεις ή παραβιάσεις ασφάλειας που μπορούν να επηρεάσουν τους λογαριασμούς.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">5. Ρυθμιστικοί Κίνδυνοι</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Αλλαγές Κανονισμών:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Μελλοντικές αλλαγές στη ρυθμιστική νομοθεσία μπορούν να επηρεάσουν τη διαθεσιμότητα ή τους όρους των υπηρεσιών trading.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Φορολογικές Επιπτώσεις:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Τα κέρδη από trading μπορεί να υπόκεινται σε φορολογία. Είναι ευθύνη σας να κατανοήσετε τις φορολογικές υποχρεώσεις σας.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">6. Ψυχολογικοί Παράγοντες</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Συναισθηματικό Trading:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Οι συναισθηματικές αποφάσεις λόγω φόβου ή απληστίας μπορούν να οδηγήσουν σε κακές επενδυτικές επιλογές.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Υπερβάλλουσα Εμπιστοσύνη:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Αρχικές επιτυχίες μπορεί να οδηγήσουν σε υπερβολική ανάληψη ρίσκου.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">7. Διαχείριση Κινδύνων - Συστάσεις</h2>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li><strong className="text-primary-gold">Εκπαίδευση:</strong> Κατανοήστε πλήρως τα προϊόντα στα οποία επενδύετε πριν ξεκινήσετε.</li>
                    <li><strong className="text-primary-gold">Διαφοροποίηση:</strong> Μην αντιγράφετε μόνο έναν trader. Κατανείμετε το κεφάλαιό σας σε πολλούς traders με διαφορετικές στρατηγικές.</li>
                    <li><strong className="text-primary-gold">Stop Loss:</strong> Ορίστε όρια ζημιών για κάθε trader που αντιγράφετε.</li>
                    <li><strong className="text-primary-gold">Κεφάλαιο Κινδύνου:</strong> Χρησιμοποιείτε μόνο κεφάλαια που μπορείτε να χάσετε χωρίς να επηρεαστεί η οικονομική σας κατάσταση.</li>
                    <li><strong className="text-primary-gold">Παρακολούθηση:</strong> Παρακολουθείτε τακτικά τις επιδόσεις και προσαρμόζετε τη στρατηγική σας ανάλογα.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">8. Δήλωση Μη Εγγύησης</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Η Mirror Trades δεν εγγυάται κέρδη ή προστασία από ζημίες. Όλες οι επενδύσεις γίνονται με δική σας ευθύνη και κίνδυνο. Η Mirror Trades, οι συνεργαζόμενοι brokers, και οι signal providers δεν φέρουν ευθύνη για οποιεσδήποτε ζημίες.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">9. Συμβουλή Επαγγελματία</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Εάν δεν κατανοείτε πλήρως τους κινδύνους ή εάν έχετε αμφιβολίες, συμβουλευτείτε ανεξάρτητο χρηματοοικονομικό σύμβουλο πριν ξεκινήσετε το trading.
                  </p>
                </section>

                <div className="border-t border-primary-gold/20 pt-8 mt-12">
                  <p className="text-text-secondary text-center font-medium">
                    Με την υπογραφή/αποδοχή αυτού του εγγράφου, δηλώνετε ότι κατανοείτε πλήρως τους κινδύνους που αναφέρονται παραπάνω και αποδέχεστε ότι το trading γίνεται με δική σας ευθύνη.
                  </p>
                </div>
              </div>
            ) : (
              /* English Content */
              <div className="space-y-8 text-text-primary">
                <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-bold text-red-400 mb-4">IMPORTANT RISK WARNING</h2>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    Trading in financial markets, including copy trading, involves significant risks and is not suitable for all investors. Please read this Risk Disclosure carefully before participating in any trading activities through Mirror Trades services.
                  </p>
                </div>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">1. Nature of Risks</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Capital Loss:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Trading in financial instruments can result in significant losses, including the complete loss of invested capital. According to regulatory statistics, 67-89% of retail investor accounts lose money when trading CFDs. You should never invest money you cannot afford to lose.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Leverage:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Leveraged products like CFDs can amplify both profits and losses. Even small market movements can have a significant impact on your account. A leverage of 1:500 means that a 0.2% adverse movement can result in a 100% loss of your capital.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">2. Specific Copy Trading Risks</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Dependence on Third Parties:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        In copy trading, investment decisions are made by the signal providers/traders you choose to copy. You have no direct control over trades and rely on others&apos; strategy, experience, and judgment.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Past Performance:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Previous performance of traders does not guarantee future results. A trader who was successful in the past may incur significant losses in the future.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Entry Timing:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        You may enter copying a trader at an unfavorable time, even if the trader is generally successful.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Slippage and Delays:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        There may be delays in copying trades, resulting in different execution prices from those of the original trader.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">3. Market Risks</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Volatility:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Financial markets are extremely volatile. Prices can move quickly and unpredictably due to geopolitical events, economic announcements, or other factors.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Liquidity Risk:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        During periods of high volatility or in exotic currency pairs, there may be limited liquidity, making it difficult to execute trades at desired prices.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Gaps:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Markets can open with significant gaps compared to the previous close, especially after weekends or major events.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">4. Technical and Operational Risks</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">System Outages:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Technical problems with trading platforms can prevent trade execution or cause delays.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Broker Risk:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Despite regulatory protections, there is a risk of broker insolvency or other operational problems.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Cybersecurity:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Risks from cyberattacks or security breaches that may affect accounts.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">5. Regulatory Risks</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Regulatory Changes:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Future changes in regulatory legislation may affect the availability or terms of trading services.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Tax Implications:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Trading profits may be subject to taxation. It is your responsibility to understand your tax obligations.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">6. Psychological Factors</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Emotional Trading:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Emotional decisions due to fear or greed can lead to poor investment choices.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-gold mb-2">Overconfidence:</h3>
                      <p className="text-text-secondary leading-relaxed">
                        Initial successes may lead to excessive risk-taking.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">7. Risk Management - Recommendations</h2>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li><strong className="text-primary-gold">Education:</strong> Fully understand the products you are investing in before starting.</li>
                    <li><strong className="text-primary-gold">Diversification:</strong> Don&apos;t copy just one trader. Distribute your capital among multiple traders with different strategies.</li>
                    <li><strong className="text-primary-gold">Stop Loss:</strong> Set loss limits for each trader you copy.</li>
                    <li><strong className="text-primary-gold">Risk Capital:</strong> Use only capital you can afford to lose without affecting your financial situation.</li>
                    <li><strong className="text-primary-gold">Monitoring:</strong> Regularly monitor performance and adjust your strategy accordingly.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">8. No Guarantee Statement</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Mirror Trades does not guarantee profits or protection from losses. All investments are made at your own responsibility and risk. Mirror Trades, partner brokers, and signal providers bear no responsibility for any losses.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">9. Professional Advice</h2>
                  <p className="text-text-secondary leading-relaxed">
                    If you do not fully understand the risks or have doubts, consult an independent financial advisor before starting trading.
                  </p>
                </section>

                <div className="border-t border-primary-gold/20 pt-8 mt-12">
                  <p className="text-text-secondary text-center font-medium">
                    By signing/accepting this document, you declare that you fully understand the risks mentioned above and accept that trading is done at your own responsibility.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => router.push(`/${lang}`)}
              className="bg-transparent border-2 border-primary-gold hover:bg-primary-gold hover:border-secondary-gold text-primary-gold hover:text-background-dark font-bold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
            >
              {lang === 'el' ? 'Επιστροφή στην Αρχική' : 'Back to Home'}
            </button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}