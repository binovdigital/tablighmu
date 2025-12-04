// import "../styles/index.scss";
// import "../styles/index.css";

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html id="previewPage" data-theme="dark" lang="en">
// 			<head>
// 				<link
// 					href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
// 					rel="stylesheet"
// 				/>
// 			</head>
// 			<body>{children}</body>
// 		</html>
// 	);
// }

// app/layout.tsx
import "../styles/index.scss";
import "../styles/index.css";
import { Poppins } from "next/font/google";

// ✅ Use next/font/google
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="previewPage" data-theme="dark" lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
