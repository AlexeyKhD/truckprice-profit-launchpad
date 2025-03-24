
import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Nav />
      <main className="flex-grow overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
