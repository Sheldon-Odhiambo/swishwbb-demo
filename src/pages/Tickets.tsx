import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { GAMES } from '../data/mockData';
import { ArrowLeft, MapPin, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function Tickets() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = GAMES.find(g => g.id === gameId);

  const [step, setStep] = useState(1);
  const [ticketType, setTicketType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card'
  });

  if (!game) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Game not found</h2>
          <Link to="/schedule" className="text-cherry hover:underline">Return to Schedule</Link>
        </div>
      </div>
    );
  }

  const ticketOptions = [
    { id: 'general', name: 'General Admission', price: 25, desc: 'Upper level seating' },
    { id: 'premium', name: 'Premium Lower Bowl', price: 65, desc: 'Lower level seating with great views' },
    { id: 'courtside', name: 'Courtside VIP', price: 150, desc: 'Front row action, includes lounge access' }
  ];

  const handleNext = () => {
    if (step === 1 && ticketType) setStep(2);
    else if (step === 2 && formData.name && formData.email) setStep(3);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  const selectedTicket = ticketOptions.find(t => t.id === ticketType);
  const total = selectedTicket ? selectedTicket.price * quantity : 0;

  return (
    <div className="w-full bg-noir min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-white/10 bg-jersey-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm font-bold uppercase tracking-wider text-gray-500 relative z-10">
          <Link to="/schedule" className="hover:text-white transition-colors flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Schedule
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Game Summary Card */}
        <div className="bg-[#0f0f0f] border border-white/10 p-6 rounded-sm mb-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full sm:w-32 h-32 rounded-sm overflow-hidden shrink-0">
            <img src={game.image} alt={game.venue} className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow text-center sm:text-left">
            <p className="text-cherry font-bold text-sm uppercase tracking-widest mb-1">Swish vs</p>
            <h2 className="font-display text-3xl font-bold uppercase leading-none mb-4">{game.opponent}</h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-gray-400 text-sm font-bold uppercase tracking-wider">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {game.date}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {game.time}</span>
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {game.venue}</span>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        {step < 4 && (
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <div className={`text-sm font-bold uppercase tracking-wider ${step >= 1 ? 'text-cherry' : 'text-gray-600'}`}>1. Select Tickets</div>
            <div className={`text-sm font-bold uppercase tracking-wider ${step >= 2 ? 'text-cherry' : 'text-gray-600'}`}>2. Details</div>
            <div className={`text-sm font-bold uppercase tracking-wider ${step >= 3 ? 'text-cherry' : 'text-gray-600'}`}>3. Payment</div>
          </div>
        )}

        {/* Step 1: Select Tickets */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3 className="font-display text-2xl font-bold uppercase mb-6">Choose Your Seats</h3>
            <div className="space-y-4 mb-8">
              {ticketOptions.map(option => (
                <div
                  key={option.id}
                  onClick={() => setTicketType(option.id)}
                  className={`p-6 border rounded-sm cursor-pointer transition-colors ${
                    ticketType === option.id ? 'border-cherry bg-cherry/10' : 'border-white/10 bg-[#0f0f0f] hover:border-white/30'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-display text-xl font-bold uppercase">{option.name}</h4>
                    <span className="font-display text-2xl font-bold text-cherry">${option.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{option.desc}</p>
                </div>
              ))}
            </div>

            {ticketType && (
              <div className="bg-[#0f0f0f] border border-white/10 p-6 rounded-sm mb-8 flex items-center justify-between">
                <span className="font-bold uppercase tracking-wider">Quantity</span>
                <div className="flex items-center gap-4">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">-</button>
                  <span className="font-display text-2xl font-bold w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">+</button>
                </div>
              </div>
            )}

            <button
              onClick={handleNext}
              disabled={!ticketType}
              className="w-full bg-cherry hover:bg-red-700 disabled:bg-gray-800 disabled:text-gray-500 text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-colors"
            >
              Continue to Details
            </button>
          </motion.div>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3 className="font-display text-2xl font-bold uppercase mb-6">Your Details</h3>
            <div className="bg-[#0f0f0f] border border-white/10 p-6 rounded-sm mb-8 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 bg-[#0f0f0f] hover:bg-white/10 border border-white/10 text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.name || !formData.email}
                className="w-2/3 bg-cherry hover:bg-red-700 disabled:bg-gray-800 disabled:text-gray-500 text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-colors"
              >
                Continue to Payment
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3 className="font-display text-2xl font-bold uppercase mb-6">Checkout</h3>
            
            {/* Order Summary */}
            <div className="bg-[#0f0f0f] border border-white/10 p-6 rounded-sm mb-8">
              <h4 className="font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Order Summary</h4>
              <div className="flex justify-between items-center mb-2 text-gray-300">
                <span>{selectedTicket?.name} x {quantity}</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4 text-gray-300">
                <span>Fees & Taxes</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="font-bold uppercase tracking-wider">Total</span>
                <span className="font-display text-3xl font-bold text-cherry">${(total * 1.1).toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-[#0f0f0f] border border-white/10 p-6 rounded-sm mb-8">
              <h4 className="font-bold uppercase tracking-wider mb-4">Payment Method</h4>
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
                  <p className="text-sm text-gray-400 mb-2">Enter your M-Pesa registered phone number. A prompt will be sent to your phone to complete the payment.</p>
                  <input type="tel" placeholder="e.g. 0712345678" className="w-full bg-noir border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cherry" />
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 bg-[#0f0f0f] hover:bg-white/10 border border-white/10 text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleCheckout}
                className="w-2/3 bg-cherry hover:bg-red-700 text-white py-4 rounded-sm font-bold uppercase tracking-wider transition-colors"
              >
                Pay ${(total * 1.1).toFixed(2)}
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="font-display text-4xl font-bold uppercase mb-4">You're Going to the Game!</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Your tickets have been confirmed. We've sent a confirmation email to <span className="text-white font-bold">{formData.email}</span> with your digital tickets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule" className="bg-[#0f0f0f] hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-colors">
                View Schedule
              </Link>
              <Link to="/merch" className="bg-cherry hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-colors">
                Shop Team Merch
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
