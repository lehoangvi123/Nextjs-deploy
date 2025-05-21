import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Lê Hoàng Vĩ - Portfolio',
  description: 'Portfolio of Lê Hoàng Vĩ, a final-year Software Engineering student at HCMU, passionate about web development and technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}