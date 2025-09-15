'use client'

import { useParams, useRouter } from "next/navigation";
import Head from "next/head";

export default function TermsPage() {
  const params = useParams();
  const router = useRouter();
  const lang = params.lang as string;

  return (
    <>
      <Head>
        <title>Όροι και Προϋποθέσεις - Mirror Trades</title>
        <meta name="description" content="Όροι και Προϋποθέσεις Χρήσης της Mirror Trades" />
      </Head>
      <main className="min-h-screen bg-background-dark text-text-primary">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Language Toggle */}
          <div className="text-center mb-8">
            <div className="inline-flex bg-background-dark border border-primary-gold/30 rounded-lg p-1">
              <button
                onClick={() => window.location.href = '/el/terms'}
                className={`px-4 py-2 rounded-md transition-colors ${
                  lang === 'el' ? 'bg-primary-gold text-background-dark' : 'text-primary-gold hover:text-secondary-gold'
                }`}
              >
                Ελληνικά
              </button>
              <button
                onClick={() => window.location.href = '/en/terms'}
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
              {lang === 'el' ? 'Mirror Trades - Όροι και Προϋποθέσεις Χρήσης' : 'Mirror Trades - Terms and Conditions'}
            </h1>
            <div className="w-24 h-1 bg-primary-gold mx-auto"></div>
          </div>

          <div className="bg-background-dark border border-primary-gold/20 rounded-xl p-8 shadow-xl">
            {lang === 'el' ? (
              /* Greek Content */
              <div className="space-y-8 text-text-primary">
                <p className="text-lg leading-relaxed text-text-secondary">
                  Καλώς ήρθατε στη Mirror Trades! Οι παρόντες "Όροι Χρήσης" καθορίζουν τους νομικούς όρους και προϋποθέσεις υπό τις οποίες μπορείτε να χρησιμοποιείτε την ιστοσελίδα μας (mirrortrades.gr) και τις υπηρεσίες που προσφέρει η Mirror Trades. Παρακαλούμε διαβάστε προσεκτικά τους όρους αυτούς. Με την πρόσβαση ή χρήση του ιστότοπου και των υπηρεσιών μας, συμφωνείτε ότι δεσμεύεστε από τους παρόντες Όρους Χρήσης. Εάν δεν συμφωνείτε, παρακαλούμε μην χρησιμοποιείτε τον ιστότοπο ή τις υπηρεσίες μας.
                </p>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">1. Περίληψη Υπηρεσίας Mirror Trades</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Η Mirror Trades παρέχει μια εκπαιδευτική και υποστηρικτική υπηρεσία copy trading. Σας βοηθάμε να συνδεθείτε με πλατφόρμες αντιγραφής συναλλαγών (copy trading) που προσφέρονται από ανεξάρτητους χρηματομεσίτες (brokers), ώστε να μπορείτε να αντιγράψετε τις συναλλαγές έμπειρων traders. Η Mirror Trades δεν είναι η ίδια χρηματομεσίτης, δεν εκτελεί συναλλαγές για λογαριασμό σας και δεν κρατάει ή διαχειρίζεται κεφάλαιά σας. Η υπηρεσία μας περιλαμβάνει πληροφόρηση, καθοδήγηση, υποστήριξη και πρόσβαση σε κοινότητα επενδυτών, αλλά δεν περιλαμβάνει λήψη επενδυτικών αποφάσεων για εσάς.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">2. Κατάλληλη Χρήση & Προϋποθέσεις</h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Για να χρησιμοποιήσετε τις υπηρεσίες μας, πρέπει να είστε τουλάχιστον 18 ετών. Δηλώνετε ότι οποιαδήποτε πληροφορία μας παρέχετε (π.χ. κατά την εγγραφή στο newsletter ή το κλείσιμο ραντεβού) είναι αληθής και ακριβής. Συμφωνείτε να χρησιμοποιείτε τον ιστότοπο μόνο για νόμιμους σκοπούς. Απαγορεύεται να:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>Παραβιάσετε οποιονδήποτε νόμο ή κανονισμό μέσω της χρήσης του ιστότοπου</li>
                    <li>Προσπαθήσετε να αποκτήσετε μη εξουσιοδοτημένη πρόσβαση στα συστήματά μας ή στους λογαριασμούς άλλων χρηστών</li>
                    <li>Χρησιμοποιήσετε περιεχόμενο της Mirror Trades (κείμενα, εικόνες, σήματα) χωρίς άδεια για εμπορικό σκοπό</li>
                    <li>Διανείμετε ιούς, malware ή οποιοδήποτε άλλο επιβλαβές περιεχόμενο</li>
                    <li>Παρενοχλήσετε ή απειλήσετε άλλους χρήστες ή το προσωπικό μας</li>
                    <li>Χρησιμοποιήσετε τις υπηρεσίες μας για ξέπλυμα χρήματος ή άλλες παράνομες δραστηριότητες</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">3. Μη Παροχή Επενδυτικών Συμβουλών</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Όλο το περιεχόμενο που παρέχουμε (άρθρα, αναρτήσεις, μηνύματα, προφορικές συμβουλές σε Zoom κλπ.) έχει ενημερωτικό/εκπαιδευτικό χαρακτήρα. Η Mirror Trades δεν είναι πιστοποιημένος επενδυτικός σύμβουλος ή χρηματοοικονομικός διαμεσολαβητής και δεν παρέχει εξατομικευμένες επενδυτικές συμβουλές. Οτιδήποτε μαθαίνετε από εμάς ή μέσω των πλατφορμών copy trading δεν αποτελεί πρόσκληση ή σύσταση για αγορά ή πώληση οποιουδήποτε χρηματοπιστωτικού προϊόντος. Εσείς λαμβάνετε τις τελικές αποφάσεις για τις επενδύσεις σας. Αν χρειάζεστε εξατομικευμένες συμβουλές, θα πρέπει να απευθυνθείτε σε αδειοδοτημένο επαγγελματία (π.χ. πιστοποιημένο επενδυτικό σύμβουλο).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">4. Αντιστοιχία με Brokers – Ευθύνη</h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Μέρος της υπηρεσίας μας είναι να σας συστήσουμε σε ανεξάρτητους brokers (όπως η Vantage Markets και η MEX Atlantic) και να σας βοηθήσουμε στη διαδικασία εγγραφής και χρήσης των συστημάτων copy trading τους. Ωστόσο:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>Ο λογαριασμός trading που ανοίγετε είναι συμβατική σχέση μεταξύ εσάς και του broker. Η Mirror Trades δεν αποτελεί μέρος της σύμβασης μεταξύ σας και του χρηματομεσίτη</li>
                    <li>Οποιαδήποτε συναλλαγή εκτελείται στον λογαριασμό σας μέσω copy trading πραγματοποιείται από τον broker υπό τις δικές του Όρους και Προϋποθέσεις. Παρακαλούμε να διαβάσετε και να κατανοήσετε τους όρους χρήσης του εκάστοτε broker και τις ενημερώσεις ρίσκου του. Η Mirror Trades δεν φέρει ευθύνη για τυχόν ενέργειες ή παραλείψεις του broker</li>
                    <li>Η Mirror Trades δεν ελέγχει τις πλατφόρμες συναλλαγών των brokers. Προσπαθούμε να διασφαλίζουμε ότι συνεργαζόμαστε με αξιόπιστους, ρυθμιζόμενους brokers, αλλά δεν μπορούμε να εγγυηθούμε τη διαρκή λειτουργία, απόδοση ή ασφάλεια των πλατφορμών τους</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">5. Περιορισμός Ευθύνης της Mirror Trades</h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Στο μέγιστο βαθμό που επιτρέπεται από το νόμο, η Mirror Trades δεν ευθύνεται για οποιαδήποτε άμεση ή έμμεση ζημία, απώλεια κέρδους, απώλεια εισοδήματος ή οποιασδήποτε μορφής ζημία προκύψει από:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>Τη χρήση ή την αδυναμία χρήσης του ιστότοπου ή των υπηρεσιών μας</li>
                    <li>Τη συμμετοχή σας στο copy trading ή τις επιδόσεις των traders που αντιγράφετε</li>
                    <li>Σφάλματα ή ανακρίβειες στο περιεχόμενο του ιστότοπου</li>
                    <li>Οποιαδήποτε μη εξουσιοδοτημένη πρόσβαση ή κακόβουλη ενέργεια τρίτων</li>
                    <li>Καθυστερήσεις ή διακοπές υπηρεσίας</li>
                    <li>Απώλεια δεδομένων ή πληροφοριών</li>
                  </ul>
                  <p className="text-text-secondary leading-relaxed mt-4">
                    Η Mirror Trades παρέχει τις υπηρεσίες της "ως έχουν" ("as is"), χωρίς καμία εγγύηση ως προς την εμπορευσιμότητα ή καταλληλότητα για συγκεκριμένο σκοπό.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">6. Πνευματική Ιδιοκτησία</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Το περιεχόμενο του ιστότοπου Mirror Trades – κείμενα, γραφικά, λογότυπα, εικόνες, βίντεο, αρθρογραφία – προστατεύεται από δικαιώματα πνευματικής ιδιοκτησίας. Η Mirror Trades διατηρεί όλα τα δικαιώματα. Απαγορεύεται να αναπαράγετε, διανέμετε ή δημιουργείτε παράγωγα έργα από το περιεχόμενο αυτό, εκτός αν λάβετε προηγούμενη γραπτή άδεια από εμάς.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">7. Προστασία Δεδομένων</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Η χρήση του ιστότοπού μας διέπεται επίσης από την Πολιτική Απορρήτου και την Πολιτική Cookies, οι οποίες αποτελούν μέρος των Όρων Χρήσης. Βεβαιωθείτε ότι τις διαβάσατε, καθώς εξηγούν πώς συλλέγουμε και επεξεργαζόμαστε τα προσωπικά σας δεδομένα.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">8. Υπηρεσίες Τρίτων</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Μπορεί να παρέχουμε συνδέσμους ή πρόσβαση σε υπηρεσίες τρίτων (όπως brokers, εργαλεία ανάλυσης, κ.ά.). Δεν ελέγχουμε αυτές τις υπηρεσίες και δεν φέρουμε ευθύνη για το περιεχόμενό τους ή τις πρακτικές τους.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">9. Τερματισμός Υπηρεσιών</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Διατηρούμε το δικαίωμα να τερματίσουμε ή να αναστείλουμε την πρόσβασή σας στις υπηρεσίες μας ανά πάσα στιγμή, με ή χωρίς προειδοποίηση, εάν παραβιάσετε τους παρόντες όρους ή για οποιονδήποτε άλλο λόγο που κρίνουμε αναγκαίο.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">10. Τροποποιήσεις Όρων</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Η Mirror Trades διατηρεί το δικαίωμα να τροποποιεί ή να ενημερώνει τους παρόντες Όρους Χρήσης ανά πάσα στιγμή. Σε περίπτωση σημαντικών αλλαγών, θα δημοσιεύουμε σχετική ειδοποίηση στον ιστότοπο. Η συνέχιση της χρήσης του ιστότοπου μετά από οποιαδήποτε αλλαγή στους όρους συνεπάγεται αποδοχή των νέων όρων.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">11. Εφαρμοστέο Δίκαιο & Δικαιοδοσία</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Οι παρόντες Όροι διέπονται από το Ελληνικό δίκαιο και το σχετικό δίκαιο της Ευρωπαϊκής Ένωσης. Οποιαδήποτε διαφορά προκύψει από ή σχετίζεται με τους Όρους Χρήσης ή τη χρήση του ιστότοπου, θα επιλύεται από τα αρμόδια δικαστήρια της Ελλάδας.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">12. Επικοινωνία</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Αν έχετε οποιαδήποτε ερώτηση σχετικά με τους Όρους Χρήσης ή γενικά για τις υπηρεσίες μας, μπορείτε να επικοινωνήσετε μαζί μας στο <a href="mailto:info@mirrortrades.gr" className="text-primary-gold hover:text-secondary-gold transition-colors">info@mirrortrades.gr</a>.
                  </p>
                </section>

                <div className="border-t border-primary-gold/20 pt-8 mt-12">
                  <p className="text-text-secondary text-center font-medium">
                    Με τη χρήση της ιστοσελίδας μας, αναγνωρίζετε ότι διαβάσατε και αποδέχεστε τους παραπάνω Όρους Χρήσης.
                  </p>
                </div>
              </div>
            ) : (
              /* English Content */
              <div className="space-y-8 text-text-primary">
                <p className="text-lg leading-relaxed text-text-secondary">
                  Welcome to Mirror Trades! These Terms of Use govern the legal terms and conditions for using our website (mirrortrades.gr) and the services provided by Mirror Trades. Please read these terms carefully. By accessing or using our site and services, you agree to be bound by these Terms of Use. If you do not agree, please do not use our website or services.
                </p>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">1. Summary of Mirror Trades Service</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Mirror Trades provides an educational and support service for copy trading. We help you connect with copy trading platforms offered by independent brokerage firms (brokers) so you can mirror the trades of experienced traders. Mirror Trades is not itself a broker, does not execute trades on your behalf, and does not hold or manage your funds. Our service includes providing information, guidance, support, and community access, but it does not include making investment decisions for you.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">2. Eligibility & Proper Use</h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    To use our services, you must be at least 18 years old. You represent that any information you provide us (e.g., when signing up for the newsletter or scheduling a call) is truthful and accurate. You agree to use the website only for lawful purposes. You must not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>Violate any applicable laws or regulations through your use of the website</li>
                    <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                    <li>Use Mirror Trades content (text, images, logos) for commercial purposes without permission</li>
                    <li>Distribute viruses, malware, or any other harmful content</li>
                    <li>Harass or threaten other users or our staff</li>
                    <li>Use our services for money laundering or other illegal activities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">3. No Investment Advice</h2>
                  <p className="text-text-secondary leading-relaxed">
                    All content we provide (articles, posts, messages, verbal guidance during Zoom calls, etc.) is for informational/educational purposes only. Mirror Trades is not a certified financial advisor or broker-dealer, and does not provide personalized investment advice. Anything you learn from us or through the copy trading platforms is not an invitation or recommendation to buy or sell any financial instrument. You make the final decisions regarding your investments. If you require personalized advice, you should consult a licensed professional (e.g., a certified financial advisor).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">4. Interaction with Brokers – Responsibilities</h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Part of our service is to introduce you to independent brokers (such as Vantage Markets and MEX Atlantic) and assist you in the process of signing up and using their copy trading systems. However:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>The trading account you open is a contractual relationship between you and the broker. Mirror Trades is not a party to the agreement between you and the brokerage</li>
                    <li>Any trades executed in your account via copy trading are carried out by the broker under that broker's own Terms and Conditions. Please ensure you read and understand the terms of service of the respective broker and their risk disclosures. Mirror Trades is not liable for any acts or omissions of the broker</li>
                    <li>Mirror Trades does not control the trading platforms provided by the brokers. We endeavor to work with reputable, regulated brokers, but we cannot guarantee the continuous operation, performance, or security of their platforms</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">5. Limitation of Mirror Trades' Liability</h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    To the fullest extent permitted by law, Mirror Trades will not be liable for any direct or indirect damages, loss of profits, loss of revenue, or any form of loss arising from:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>Your use of, or inability to use, our website or services</li>
                    <li>Your participation in copy trading or the performance of the traders you copy</li>
                    <li>Errors or inaccuracies in the content on our website</li>
                    <li>Any unauthorized access or malicious activity by third parties</li>
                    <li>Service delays or interruptions</li>
                    <li>Loss of data or information</li>
                  </ul>
                  <p className="text-text-secondary leading-relaxed mt-4">
                    Mirror Trades provides its services on an "as is" basis without any warranties of merchantability or fitness for a particular purpose.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">6. Intellectual Property</h2>
                  <p className="text-text-secondary leading-relaxed">
                    The content on the Mirror Trades website – text, graphics, logos, images, videos, articles – is protected by intellectual property laws. Mirror Trades retains all rights. You are not permitted to reproduce, distribute, or create derivative works from this content without prior written consent from us.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">7. Data Protection</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Your use of our site is also governed by our Privacy Policy and Cookies Policy, which are incorporated into these Terms. Please ensure you read them, as they explain how we collect and process your personal data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">8. Third-Party Services</h2>
                  <p className="text-text-secondary leading-relaxed">
                    We may provide links or access to third-party services (such as brokers, analysis tools, etc.). We do not control these services and bear no responsibility for their content or practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">9. Service Termination</h2>
                  <p className="text-text-secondary leading-relaxed">
                    We reserve the right to terminate or suspend your access to our services at any time, with or without notice, if you violate these terms or for any other reason we deem necessary.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">10. Changes to Terms</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Mirror Trades reserves the right to modify or update these Terms of Use at any time. In case of significant changes, we will post a notice on the website. Continuing to use the website after any changes to the terms indicates your acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">11. Governing Law & Jurisdiction</h2>
                  <p className="text-text-secondary leading-relaxed">
                    These Terms are governed by the laws of Greece and applicable European Union regulations. Any dispute arising from or related to these Terms of Use or your use of the website shall be resolved in the competent courts of Greece.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-gold mb-4">12. Contact Information</h2>
                  <p className="text-text-secondary leading-relaxed">
                    If you have any questions about these Terms of Use or about our services in general, you can reach us at <a href="mailto:info@mirrortrades.gr" className="text-primary-gold hover:text-secondary-gold transition-colors">info@mirrortrades.gr</a>.
                  </p>
                </section>

                <div className="border-t border-primary-gold/20 pt-8 mt-12">
                  <p className="text-text-secondary text-center font-medium">
                    By using our website, you acknowledge that you have read and agree to the above Terms of Use.
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