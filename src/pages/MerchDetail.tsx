import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MERCH } from '../data/mockData';
import { ArrowLeft, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function MerchDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MERCH.find(p => p.id === id);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/merch" className="text-cherry hover:underline">Return to Store</Link>
        </div>
      </div>
    );
  }

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const needsSize = ['Jerseys', 'Apparel'].includes(product.category);

  const handleAddToCart = () => {
    if (!product) return;
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      size: needsSize ? size : undefined
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-noir min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-jersey-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm font-bold uppercase tracking-wider text-gray-500 relative z-10">
          <Link to="/merch" className="hover:text-white transition-colors flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Store
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square bg-[#0f0f0f] border border-white/10 rounded-sm overflow-hidden"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8 border-b border-white/10 pb-8">
              <p className="text-cherry font-bold text-sm uppercase tracking-widest mb-2">{product.category}</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-4">
                {product.name}
              </h1>
              <p className="font-display text-3xl font-bold text-white mb-6">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Options */}
            <div className="mb-10 space-y-8">
              {needsSize && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold uppercase tracking-wider text-sm">Select Size</span>
                    <button className="text-gray-500 text-xs uppercase tracking-widest hover:text-white transition-colors underline">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {sizes.map(s => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`w-14 h-14 flex items-center justify-center font-display text-xl font-bold rounded-sm border transition-colors ${
                          size === s ? 'border-cherry bg-cherry text-white' : 'border-white/20 bg-[#0f0f0f] text-gray-400 hover:border-white/50 hover:text-white'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <span className="block font-bold uppercase tracking-wider text-sm mb-4">Quantity</span>
                <div className="flex items-center gap-4 bg-[#0f0f0f] border border-white/10 p-2 rounded-sm w-max">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">-</button>
                  <span className="font-display text-2xl font-bold w-12 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">+</button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 px-8 rounded-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  added ? 'bg-green-600 text-white' : 'bg-cherry hover:bg-red-700 text-white'
                }`}
              >
                {added ? (
                  <><CheckCircle2 className="w-5 h-5" /> Added to Cart</>
                ) : (
                  <><ShoppingCart className="w-5 h-5" /> Add to Cart</>
                )}
              </button>
              <button
                onClick={() => navigate('/cart')}
                className="flex-1 bg-[#0f0f0f] hover:bg-white/10 border border-white/10 text-white py-4 px-8 rounded-sm font-bold uppercase tracking-wider transition-colors text-center"
              >
                View Cart
              </button>
            </div>

            {/* Shipping Info */}
            <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-400 space-y-2">
              <p className="flex items-center gap-2"><span className="text-cherry">★</span> Free shipping on orders over $100</p>
              <p className="flex items-center gap-2"><span className="text-cherry">★</span> 30-day return policy</p>
              <p className="flex items-center gap-2"><span className="text-cherry">★</span> Official team merchandise</p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
