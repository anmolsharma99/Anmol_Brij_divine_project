import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingPetals from "../effects/FloatingPetals";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <FloatingPetals />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
