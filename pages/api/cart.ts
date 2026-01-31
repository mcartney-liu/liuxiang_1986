import { NextApiRequest, NextApiResponse } from 'next';

// 模拟购物车数据（实际项目中应使用数据库）
let cartItems: any[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // 获取购物车内容
      res.status(200).json({ cartItems, total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) });
      break;
      
    case 'POST':
      // 添加商品到购物车
      const { productId, name, price, quantity = 1 } = req.body;
      
      // 检查商品是否已存在
      const existingItem = cartItems.find(item => item.productId === productId);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cartItems.push({
          id: Date.now(), // 实际项目中应使用数据库自动生成ID
          productId,
          name,
          price,
          quantity
        });
      }
      
      res.status(200).json({ message: '商品已添加到购物车', cartItems });
      break;
      
    case 'PUT':
      // 更新购物车中商品的数量
      const { itemId, newQuantity } = req.body;
      
      const itemToUpdate = cartItems.find(item => item.id === itemId);
      if (itemToUpdate) {
        if (newQuantity <= 0) {
          cartItems = cartItems.filter(item => item.id !== itemId);
        } else {
          itemToUpdate.quantity = newQuantity;
        }
      }
      
      res.status(200).json({ message: '购物车已更新', cartItems });
      break;
      
    case 'DELETE':
      // 从购物车删除商品
      const { id } = req.body;
      cartItems = cartItems.filter(item => item.id !== id);
      
      res.status(200).json({ message: '商品已从购物车删除', cartItems });
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}