export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'el' }
  ]
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
