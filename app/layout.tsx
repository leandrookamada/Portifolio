import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar/Sidebar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

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
          <html lang="pt-br" className="scroll-smooth">
               <body className={`${poppins.className} bg-gray-900 text-white`}>
                    <div className="relative flex min-h-screen lg:flex-row">
                         <BackgroundRippleEffect />
                         <Sidebar />
                         <main className="flex-1 pt-16 px-2 sm:px-4 lg:ml-80 lg:pt-8 lg:px-8 pb-8 relative z-10 overflow-x-auto">
                              <div className="w-full mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl z-100">
                                   {children}
                              </div>
                         </main>
                    </div>
               </body>
          </html>
     );
}
