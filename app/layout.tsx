import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar/Sidebar";

const poppins = Poppins({
     subsets: ["latin"],
     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
     title: "Meu Portfólio",
     description: "Portfólio de desenvolvedor web",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="pt-br" className="!scroll-smooth">
               <body className={`${poppins.className} bg-gray-900 text-white`}>
                    <div className="flex">
                         <Sidebar />
                         <main className="flex-1 p-8 ml-64">{children}</main>
                    </div>
               </body>
          </html>
     );
}
