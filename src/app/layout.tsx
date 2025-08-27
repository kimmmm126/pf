import type { Metadata } from "next";
import "xp.css/dist/98.css";
import "@/styles/_common.scss";

export const metadata: Metadata = {
  title: "김가희 포트폴리오",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
