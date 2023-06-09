import Navbar from "./components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700"],
    subsets: ["latin"],
});
export const metadata = {
    title: "Bharat Bhammar - Full Stack Web Developer",
    description:
        "Bharat Bhammar is a skilled Full Stack Web Developer with expertise in JavaScript, ReactJS, Node.js, and more. Explore Bharat's portfolio and projects.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' style={{ colorScheme: "light" }}>
            <body className={roboto.className}>
                <div className='bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full'>
                    <Navbar />

                    {children}
                </div>
            </body>
        </html>
    );
}
