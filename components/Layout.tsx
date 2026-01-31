import Navbar from './Navbar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="bg-white border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 淘小宝 - 类似淘宝的基础电商应用</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;