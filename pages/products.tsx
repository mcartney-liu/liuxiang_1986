import Head from 'next/head';
import Link from 'next/link';

const ProductsPage = () => {
  // 模拟商品数据
  const products = [
    { id: 1, name: '商品 1', price: 29.99, image: 'https://via.placeholder.com/300x300', rating: 4.5, sales: 120 },
    { id: 2, name: '商品 2', price: 49.99, image: 'https://via.placeholder.com/300x300', rating: 4.2, sales: 89 },
    { id: 3, name: '商品 3', price: 19.99, image: 'https://via.placeholder.com/300x300', rating: 4.8, sales: 210 },
    { id: 4, name: '商品 4', price: 79.99, image: 'https://via.placeholder.com/300x300', rating: 4.0, sales: 56 },
    { id: 5, name: '商品 5', price: 39.99, image: 'https://via.placeholder.com/300x300', rating: 4.7, sales: 142 },
    { id: 6, name: '商品 6', price: 59.99, image: 'https://via.placeholder.com/300x300', rating: 4.3, sales: 78 },
    { id: 7, name: '商品 7', price: 69.99, image: 'https://via.placeholder.com/300x300', rating: 4.9, sales: 187 },
    { id: 8, name: '商品 8', price: 15.99, image: 'https://via.placeholder.com/300x300', rating: 4.1, sales: 95 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>所有商品 - 淘小宝</title>
        <meta name="description" content="浏览我们的全部商品" />
      </Head>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">全部商品</h1>
        <div className="flex space-x-2">
          <select className="border rounded px-3 py-2">
            <option>默认排序</option>
            <option>价格从低到高</option>
            <option>价格从高到低</option>
            <option>销量最高</option>
            <option>最新上架</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-gray-200 border-2 border-dashed rounded-t-lg w-full h-48" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2 h-12">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 text-sm">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-gray-500 text-sm ml-1">({product.sales})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-bold">¥{product.price.toFixed(2)}</span>
                  <span className="text-gray-500 text-sm">已售{product.sales}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <nav className="flex items-center space-x-1">
          <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">2</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">3</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">...</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">10</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200 ml-2">下一页</button>
        </nav>
      </div>
    </div>
  );
};

export default ProductsPage;