import { useState, useEffect } from 'react';
import Head from 'next/head';

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    // 模拟从本地存储加载购物车数据
    const savedCart = [
      {
        id: 1,
        name: '商品 1',
        price: 49.99,
        quantity: 2,
        image: 'https://via.placeholder.com/100x100'
      },
      {
        id: 2,
        name: '商品 2',
        price: 89.99,
        quantity: 1,
        image: 'https://via.placeholder.com/100x100'
      }
    ];
    setCartItems(savedCart);
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>购物车 - 淘小宝</title>
        <meta name="description" content="您的购物车" />
      </Head>

      <h1 className="text-2xl font-bold mb-6">我的购物车</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">购物车是空的</p>
          <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
            去逛逛
          </a>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-gray-50 py-3 px-4 text-sm font-medium text-gray-500">
            <div className="col-span-6">商品</div>
            <div className="col-span-2 text-center">单价</div>
            <div className="col-span-2 text-center">数量</div>
            <div className="col-span-2 text-right">小计</div>
          </div>

          <div className="divide-y">
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 items-center py-4 px-4">
                <div className="col-span-12 md:col-span-6 flex items-center mb-4 md:mb-0">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 text-sm mt-1 hover:underline"
                    >
                      删除
                    </button>
                  </div>
                </div>
                
                <div className="col-span-12 md:col-span-2 text-center md:text-left mb-2 md:mb-0">
                  ¥{item.price.toFixed(2)}
                </div>
                
                <div className="col-span-12 md:col-span-2 text-center mb-2 md:mb-0">
                  <div className="flex items-center justify-center md:justify-start">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-l"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                      className="w-12 h-8 border-y text-center"
                    />
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="col-span-12 md:col-span-2 text-right font-medium">
                  ¥{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-4">
            <div className="flex justify-end">
              <div className="w-full md:w-1/3">
                <div className="flex justify-between py-2">
                  <span>总计:</span>
                  <span className="font-bold">¥{calculateTotal().toFixed(2)}</span>
                </div>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg mt-4 hover:bg-red-700">
                  结算 ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} 件商品)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;