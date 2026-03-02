import "./globals.css";

export const metadata = {
  title: "Judi Textiles",
  description: "Modern textile company website for Judi factory products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
