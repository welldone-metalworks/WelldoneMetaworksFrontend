import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";

export const metadata = {
  metadataBase: new URL("https://welldone-metalworks.in"),
  title: "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",
  description:
    "Welldone Metalworks offers expert metal fabrication services in Ahmedabad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}