
import "./globals.css";
import { Barlow } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeSwitch from "@/components/theme-switch";
import ScrollProvider from "@/components/scroll-provider";
import Footer from "@/components/footer";
import WhatsAppChatWidget from "@/components/whatsapp-chat-widget";

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
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "nk4rjd26tp");
            `,
          }}
        />
      </head>
      <body className={`${barlow.className} bg-cmsecondary overflow-x-hidden text-cmprimary relative dark:bg-cmprimary dark:text-cmsecondary dark:text-opacity-90`}>
        <div className="bg-[#c7e0f9] absolute top-[-1rem] -z-10  rounded-full blur-[10rem] dark:bg-[#263347]"></div>
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
            <WhatsAppChatWidget/>
            <ThemeSwitch />
          </ThemeProvider>
        </ScrollProvider>
      </body>
      <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID as string} />
    </html>
  );
}

