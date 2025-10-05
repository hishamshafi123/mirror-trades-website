export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'el' }
  ]
}

export default function RiskDisclosureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
