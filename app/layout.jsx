import "./globals.css";

export const metadata = {
  title: "Praveen Kumar — Developer Portfolio",
  description: "Portfolio of Praveen Kumar, a developer building thoughtful digital experiences with React and the MERN stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
