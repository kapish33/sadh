export const metadata = {
  title: 'Sadhana | Privacy Policy',
  description: '$s | Manav SachDev Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
