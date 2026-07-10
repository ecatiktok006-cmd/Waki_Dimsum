/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Clock, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function OpeningHours() {
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingTime, setBookingTime] = useState('12:00');
  const [bookingDate, setBookingDate] = useState('');
  const [guestsCount, setGuestsCount] = useState('2');
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) return;
    setIsBooked(true);
    setTimeout(() => {
      // Auto-reset
      setIsBooked(false);
      setBookingName('');
      setBookingPhone('');
    }, 4000);
  };

  return (
    <section
      id="hours"
      className="relative py-24 sm:py-32 bg-jade-950 overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* LEFT: SCHEDULE DISPLAY (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-display text-xs tracking-[0.25em] text-gold-400 font-bold uppercase block">
                Plan Your Dining
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight">
                Opening Hours
              </h2>
              <div className="w-16 h-1 bg-gold-400 rounded" />
            </div>

            <p className="font-sans text-cream-200/80 text-sm sm:text-base leading-relaxed">
              We look forward to welcoming you to WAKi. Reserve a table below to experience our hand-crafted, steaming-hot dim sum fresh out of our kitchen!
            </p>

            {/* Time Schedule Card */}
            <div className="bg-jade-900 border border-gold-500/25 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative">
              <div className="absolute top-4 right-4 text-gold-400 animate-pulse">
                <Clock className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="font-display text-xs tracking-wider text-gold-400 uppercase font-semibold">
                  Serving Days
                </span>
                <p className="font-serif font-bold text-2xl text-cream-50">
                  Monday to Sunday
                </p>
              </div>

              {/* Day details */}
              <div className="space-y-4 border-t border-gold-500/10 pt-4">
                <div className="flex justify-between items-center py-1">
                  <span className="font-sans text-cream-200 text-sm sm:text-base">Lunch Session</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-gold-400">10:00 am - 3:00 pm</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-sans text-cream-200 text-sm sm:text-base">Dinner Session</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-gold-400">5:00 pm - 9:00 pm</span>
                </div>
              </div>

              <div className="bg-jade-950/50 border border-gold-500/10 rounded-xl p-4 text-center">
                <p className="font-sans text-xs text-cream-300 italic leading-relaxed">
                  "Last order is taken 30 minutes before the end of each session. Halal and pristine safety guaranteed."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE RESERVATION TABLE (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-jade-900/40 border border-gold-500/15 rounded-2xl p-6 sm:p-10 shadow-2xl relative backdrop-blur-sm">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-jade-950 shadow-lg transform rotate-12">
                <Sparkles className="w-5 h-5 animate-spin-slow" />
              </div>

              <div className="mb-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50 mb-2">
                  Reserve a Table
                </h3>
                <p className="font-sans text-xs sm:text-sm text-cream-200/70">
                  Fill in your details below. We will instantly secure your spot and text a confirmation code to your phone.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isBooked ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="font-display text-[10px] tracking-widest text-gold-400 uppercase font-bold block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          placeholder="e.g. Kelvin Leong"
                          className="w-full bg-jade-950/80 border border-gold-500/10 focus:border-gold-400 rounded-lg px-4 py-3 font-sans text-cream-100 text-sm focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-display text-[10px] tracking-widest text-gold-400 uppercase font-bold block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={bookingPhone}
                          onChange={(e) => setBookingPhone(e.target.value)}
                          placeholder="e.g. +60 12-345 6789"
                          className="w-full bg-jade-950/80 border border-gold-500/10 focus:border-gold-400 rounded-lg px-4 py-3 font-sans text-cream-100 text-sm focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div className="space-y-1.5">
                        <label className="font-display text-[10px] tracking-widest text-gold-400 uppercase font-bold block">
                          Date
                        </label>
                        <input
                          type="date"
                          required
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-jade-950/80 border border-gold-500/10 focus:border-gold-400 rounded-lg px-4 py-3 font-sans text-cream-100 text-sm focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-display text-[10px] tracking-widest text-gold-400 uppercase font-bold block">
                          Time Slot
                        </label>
                        <select
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          className="w-full bg-jade-950/80 border border-gold-500/10 focus:border-gold-400 rounded-lg px-4 py-3 font-sans text-cream-100 text-sm focus:outline-none transition-colors"
                        >
                          <option value="10:30">10:30 AM (Lunch)</option>
                          <option value="12:00">12:00 PM (Lunch)</option>
                          <option value="13:30">01:30 PM (Lunch)</option>
                          <option value="17:30">05:30 PM (Dinner)</option>
                          <option value="19:00">07:00 PM (Dinner)</option>
                          <option value="20:00">08:00 PM (Dinner)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-display text-[10px] tracking-widest text-gold-400 uppercase font-bold block">
                          Number of Guests
                        </label>
                        <select
                          value={guestsCount}
                          onChange={(e) => setGuestsCount(e.target.value)}
                          className="w-full bg-jade-950/80 border border-gold-500/10 focus:border-gold-400 rounded-lg px-4 py-3 font-sans text-cream-100 text-sm focus:outline-none transition-colors"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="4">4 People</option>
                          <option value="6">6 People</option>
                          <option value="8+">8+ People (Group)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      id="confirm-reservation-btn"
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-jade-950 font-display font-bold text-xs sm:text-sm tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-gold-500/10 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>CONFIRM TABLE RESERVATION</span>
                    </button>


                  </motion.form>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-400/10 border-2 border-gold-400 flex items-center justify-center mx-auto text-gold-400 animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-cream-50">
                      Reservation Secured!
                    </h4>
                    <p className="font-sans text-sm text-cream-200/80 max-w-md mx-auto">
                      Thank you, <strong className="text-gold-300 font-semibold">{bookingName}</strong>. Your table for <strong className="text-gold-300 font-semibold">{guestsCount} guests</strong> on <strong className="text-gold-300 font-semibold">{bookingDate || 'today'}</strong> at <strong className="text-gold-300 font-semibold">{bookingTime}</strong> has been booked. A confirmation sms was sent to <span className="text-gold-300 font-mono">{bookingPhone}</span>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
