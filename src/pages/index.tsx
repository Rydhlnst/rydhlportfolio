

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import SectionLayout from "@/Layout/Section";
import ExperienceAndAwards from "@/views/Experience";
import Main from "@/views/Main";
import Services from "@/views/Services";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400","500","600","700","800","900"],
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
      <main className={`${poppins.variable} ${poppins.className}`}>
        <Navbar/>
        <Main/>
        <SectionLayout>
          <ExperienceAndAwards/>
          <Services/>
        </SectionLayout>
        <Footer/>
      </main>

    </ThemeProvider>
  );
}
