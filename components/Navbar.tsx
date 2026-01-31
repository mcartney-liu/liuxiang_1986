import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-10">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold">淘小宝</a>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link href="/" legacyBehavior>
                <a className="hover:text-yellow-300 transition">首页</a>
              </Link>
              <Link href="/products" legacyBehavior>
                <a className="hover:text-yellow-300 transition">全部商品</a>
              </Link>
              <Link href="/cart" legacyBehavior>
                <a className="hover:text-yellow-300 transition">购物车</a>
              </Link>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="搜索商品..." 
                className="px-4 py-2 rounded-full text-gray-800 w-64"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">
                搜索
              </button>
            </div>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
              登录
            </button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-500">
            <div className="flex flex-col space-y-4 pb-4">
              <Link href="/" legacyBehavior>
                <a className="block hover:text-yellow-300 transition" onClick={() => setIsMenuOpen(false)}>首页</a>
              </Link>
              <Link href="/products" legacyBehavior>
                <a className="block hover:text-yellow-300 transition" onClick={() => setIsMenuOpen(false)}>全部商品</a>
              </Link>
              <Link href="/cart" legacyBehavior>
                <a className="block hover:text-yellow-300 transition" onClick={() => setIsMenuOpen(false)}>购物车</a>
              </Link>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="搜索商品..." 
                  className="px-4 py-2 rounded-full text-gray-800 w-full"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">
                  搜索
                </button>
              </div>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold w-full">
                登录
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;