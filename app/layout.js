import Navbar from "@/components/Navbar";
import "./globals.css";
import "./styles.css";
import { Montserrat, Nunito } from "next/font/google";
import Footer from "@/components/Footer";
import { FormDataProvider } from "@/contexts/data";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Grandlendings | Empowering Your Financial Future with Instant Loans",
  description:
    "Discover Grandlendings, where financial empowerment meets seamless lending solutions. Unlock instant loans tailored to your needs. Secure your financial future with our trusted services, providing swift and reliable access to funds. Experience the pinnacle of financial convenience and elevate your aspirations with Grandlendings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <FormDataProvider>
          <Navbar />
          {children}
          <Footer />
        </FormDataProvider>
      </body>
    </html>
  );
}
