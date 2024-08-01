import "./globals.css";
import { Barlow } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeSwitch from "@/components/theme-switch";
import ScrollProvider from "@/components/scroll-provider";
import Footer from "@/components/footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Mohamed Amaan | Portfolio",
  description: "I'm Amaan, and I love to build Full-Stack software applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="select-none scrollbar-thin scrollbar-thumb-cmprimary scrollbar-track-cmsecondary dark:scrollbar-thumb-cmsecondary dark:scrollbar-track-cmprimary"
    >
       <body
        className={`${barlow.className} bg-cmsecondary overflow-x-hidden text-cmprimary relative dark:bg-cmprimary dark:text-cmsecondary dark:text-opacity-90`}
      > 
        <div className="absolute top-[-6rem] -z-10 right-[10rem] h-[40rem] w-[32rem] rounded-full blur-[12rem] dark:bg-[#263347]"></div>
        <div className=" absolute top-[-1rem] -z-10 left-[-30rem] h-[40rem] mdLw-[55rem] rounded-full blur-[10rem] w-[20rem] md:left-[-10rem] lg:left-[-25rem] xl:left-[-12rem] 2xl:left-[-2rem] dark:bg-[#263347]"></div>
        <ScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <SpeedInsights />
            <Footer />
            <Toaster position="top-right" />
            {/* <ThemeSwitch /> */}
          </ThemeProvider>
        </ScrollProvider>
      </body>
      <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID as string} />
    </html>
  );
}
