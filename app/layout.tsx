export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className=" bg-black text-white">{children}</body>
    </html>
  )
}
