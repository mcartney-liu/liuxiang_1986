import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>淘宝风电商应用</title>
        <meta name="description" content="类似淘宝的基础电商应用" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Categories */}
      <section className="bg-white py-6 mb-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">商品分类</h2>
          <div className="grid grid-cols-5 gap-4">
            {['服装', '数码', '家居', '美妆', '食品'].map((category, index) => (
              <div key={index} className="flex flex-col items-center cursor-pointer">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="container mx-auto px-4 mb-6">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl h-40 flex items-center justify-center text-white text-2xl font-bold">
          限时优惠活动
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">热门商品</h2>
          <Link href="/products" className="text-red-600 hover:underline">
            查看更多
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Link href={`/product/${item}`} key={item} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow block">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
              <h3 className="font-semibold mb-1 truncate">商品名称 {item}</h3>
              <p className="text-red-600 font-bold mb-2">¥{Math.floor(Math.random() * 100) + 1}.00</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">销量: {Math.floor(Math.random() * 1000)}</span>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                  加入购物车
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}