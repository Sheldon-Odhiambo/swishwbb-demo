import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, ArrowRight, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items: cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', paymentMethod: 'card'
  });

  const subtotal = totalPrice;
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    clearCart();
  };

  if (cartItems.length === 0 && step === 1) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-noir px-4">
        <ShoppingBag className="w-24 h-24 text-gray-700 mb-6" />
        <h2 className="font-display text-4xl font-bold uppercase mb-4 text-center">Your Cart is Empty</h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">Looks like you haven't added any Swish Madness gear to your cart yet.</p>
        <Link to="/merch" className="bg-cherry hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-noir min-h-screen pb-20">
      {/* Header */}
      <section className="relative py-12 bg-jersey-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-artistic text-4xl md:text-6xl font-black uppercase tracking-tighter text-hollow text-white">
            Checkout
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Progress Steps */}
        {step < 3 && (
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4 max-w-3xl mx-auto">
            <div className={`text-sm font-bold uppercase tracking-wider ${step >= 1 ? 'text-cherry' : 'text-gray-600'}`}>1. Cart</div>
            <div className={`text-sm font-bold uppercase tracking-wider ${step >= 2 ? 'text-cherry' : 'text-gray-600'}`}>2. Details & Payment</div>
          </div>
        )}

        {/* Step 1: Cart Review */}
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="bg-[#0f0f0f] border border-white/10 rounded-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-white/10 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                <div className="divide-y divide-white/10">
                  {cartItems.map((item, idx) => (
                    <div key={`${item.id}-${item.size || idx}`} className="p-6 flex flex-col md:grid md:grid-cols-12 gap-4 items-center">
                      <div className="col-span-6 flex items-center gap-4 w-full">
                        <div className="w-24 h-24 bg-noir rounded-sm overflow-hidden shrink-0 border border-white/10">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold uppercase leading-tight mb-1">{item.name}</h3>
                          {item.size && <p className="text-gray-400 text-sm">Size: {item.size}</p>}
                        </div>
                      </div>
                      
                      <div className="col-span-2 text-center w-full md:w-auto flex justify-between md:block mt-4 md:mt-0">
                        <span className="md:hidden text-gray-500 text-sm font-bold uppercase">Price:</span>
                        <span className="font-display text-xl font-bold">${item.price.toFixed(2)}</span>
                      </div>

                      <div className="col-span-2 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                        <div className="flex items-center gap-3 bg-noir border border-white/10 p-1 rounded-sm">
                          <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors">-</button>
                          <span className="font-display text-xl font-bold w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors">+</button>
                        </div>
                      </div>

                      <div className="col-span-2 flex justify-between md:justify-end items-center w-full md:w-auto mt-4 md:mt-0">
                        <span className="md:hidden text-gray-500 text-sm font-bold uppercase">Total:</span>
                        <div className="flex items-center gap-4">
                          <span className="font-display text-xl font-bold text-cherry">${(item.price * item.quantity).toFixed(2)}</span>
                          <button onClick={() => removeFromCart(item.id, item.size)} className="text-gray-500 hover:text-red-500 transition-colors p-2">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-sm sticky top-24">
                <h3 className="font-display text-2xl font-bold uppercase mb-6 border-b border-white/10 pb-4">Order Summary</h3>
                
                <div className="space-y-4 mb-6 text-gray-300">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-white/10 pt-6 mb-8">
                  <span className="font-bold uppercase tracking-wider">Total</span>
                  <span className="font-display text-4xl font-bold text-cherry">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-cherry hover:bg-red-700 text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
                
                <Link to="/merch" className="block text-center mt-4 text-sm text-gray-400 hover:text-white uppercase tracking-wider font-bold transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Details & Payment */}
        {step === 2 && (
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleCheckout}>
              <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-sm mb-8">
                <h3 className="font-display text-2xl font-bold uppercase mb-6 border-b border-white/10 pb-4">Shipping Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                    <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Address</label>
                    <input type="text" required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">City</label>
                    <input type="text" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry" />
                  </div>
                </div>
              </div>

              <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-sm mb-8">
                <h3 className="font-display text-2xl font-bold uppercase mb-6 border-b border-white/10 pb-4">Payment Method</h3>
                <div className="flex gap-4 mb-6">
                  <label className={`flex-1 p-4 border rounded-sm cursor-pointer text-center transition-colors ${formData.paymentMethod === 'card' ? 'border-cherry bg-cherry/10' : 'border-white/10 hover:border-white/30'}`}>
                    <input type="radio" name="payment" value="card" checked={formData.paymentMethod === 'card'} onChange={() => setFormData({...formData, paymentMethod: 'card'})} className="hidden" />
                    <span className="font-bold uppercase tracking-wider text-sm">Credit Card</span>
                  </label>
                  <label className={`flex-1 p-4 border rounded-sm cursor-pointer text-center transition-colors ${formData.paymentMethod === 'mpesa' ? 'border-cherry bg-cherry/10' : 'border-white/10 hover:border-white/30'}`}>
                    <input type="radio" name="payment" value="mpesa" checked={formData.paymentMethod === 'mpesa'} onChange={() => setFormData({...formData, paymentMethod: 'mpesa'})} className="hidden" />
                    <span className="font-bold uppercase tracking-wider text-sm">M-Pesa</span>
                  </label>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <input type="text" placeholder="Card Number" className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry" />
                    <div className="flex gap-4">
                      <input type="text" placeholder="MM/YY" className="w-1/2 bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry" />
                      <input type="text" placeholder="CVC" className="w-1/2 bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry" />
                    </div>
                  </div>
                )}
                {formData.paymentMethod === 'mpesa' && (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 mb-2">Enter your M-Pesa registered phone number.</p>
                    <input type="tel" placeholder="e.g. 0712345678" className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry" />
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-[#0f0f0f] hover:bg-white/10 border border-white/10 text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-colors">
                  Back
                </button>
                <button type="submit" className="w-2/3 bg-cherry hover:bg-red-700 text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-colors">
                  Pay ${total.toFixed(2)}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">Order Confirmed!</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Thank you for your purchase, {formData.name}. Your order number is <span className="text-white font-bold">#SWM-{Math.floor(Math.random() * 10000)}</span>. We've sent a confirmation email to {formData.email}.
            </p>
            <Link to="/" className="inline-block bg-cherry hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-colors">
              Return to Home
            </Link>
          </motion.div>
        )}

      </div>
    </div>
  );
}
