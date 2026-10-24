import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "메디타운 | 공식 홈페이지",
  description: "메디타운 공식 홈페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}