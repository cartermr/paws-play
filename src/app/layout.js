import { Inter } from "next/font/google";
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primeflex/primeflex.css'
import { Toolbar } from 'primereact/toolbar'

const inter = Inter({ subsets: ["latin"] });

const centerToolbar = (
  <span className="text-2xl">Paws & Play</span>
)

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toolbar center={centerToolbar} />
        {children}</body>
    </html>
  );
}
