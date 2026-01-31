import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [quantity, setQuantity] = useState(1);

  // 模拟产品数据
  const product = {
    id: id,
    name: `商品 ${id}`,
    price: 99.99,
    description: '这是一个高质量的商品，具有出色的性能和设计。',
    images: [
      'https://via.placeholder.com/500x500',
      'https://via.placeholder.com/500x500',
      'https://via.placeholder.com/500x500'
    ],
    rating: 4.5,
    reviews: 128,
    stock: 50
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{product.name} - 淘小宝</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <nav className="text-sm mb-6">
          <a href="/" className="text-blue-600 hover:underline">首页</a>
          <span className="mx-2">{'>'}</span>
          <span>商品详情</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 产品图片 */}
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-96">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80" />
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((img) => (
                <div key={img} className="bg-gray-100 rounded p-2 flex-1 flex items-center justify-center h-20">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-16" />
                </div>
              ))}
            </div>
          </div>

          {/* 产品信息 */}
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviews} 条评价)</span>
            </div>
            
            <div className="text-3xl text-red-600 font-bold mb-4">¥{product.price.toFixed(2)}</div>
            
            <div className="border-t border-b py-4 my-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">配送</span>
                <span>中国大陆</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">运费</span>
                <span>满99免邮</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">数量</h3>
              <div className="flex items-center">
                <button 
                  onClick={decrementQuantity}
                  className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-l"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 h-10 border-y text-center"
                />
                <button 
                  onClick={incrementQuantity}
                  className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-r"
                >
                  +
                </button>
                <span className="ml-2 text-gray-600">库存 {product.stock} 件</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg flex-1 hover:bg-red-700">
                立即购买
              </button>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg flex-1 hover:bg-yellow-500">
                加入购物车
              </button>
            </div>
          </div>
        </div>

        {/* 产品描述 */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">商品详情</h2>
          <div className="prose max-w-none">
            <p>{product.description}</p>
            <p>这款产品采用优质材料制作，工艺精湛，适合各种场合使用。</p>
            <ul className="list-disc pl-5">
              <li>高品质材料，经久耐用</li>
              <li>精美设计，时尚大方</li>
              <li>易于维护，清洁方便</li>
              <li>多种颜色可选，满足不同需求</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;