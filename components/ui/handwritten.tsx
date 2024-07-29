import React from "react";
import { Kalam } from "next/font/google";
import { cn } from "@/lib/utils";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  fallback: ["sans-serif"],
});

const Handwritten = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`${cn(kalam.className, className)}`}>{children}</p>;
};

export default Handwritten;
