"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TShirt from "@/components/3D/TShirt"
import { ShoppingCart, Check, ShieldCheck, Truck, Leaf, Info, User, Mail, Phone, Loader2, X } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const SIZES = ["S", "M", "L", "XL", "XXL"]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function MercantileePage() {
  const [selectedSize, setSelectedSize] = useState("M")
  const [isAdding, setIsAdding] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showForm])

  const handleAddToCart = () => {
    setShowForm(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await addDoc(collection(db, "preorders"), {
        ...formData,
        size: selectedSize,
        timestamp: serverTimestamp(),
      })
      setIsSuccess(true)
      setTimeout(() => {
        setShowForm(false)
        setIsSuccess(false)
        setFormData({ name: "", email: "", phone: "", organization: "", designation: "" })
      }, 3000)
    } catch (error) {
      console.error("Error adding document: ", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white pt-20 md:pt-28 pb-12 overflow-hidden flex items-center justify-center relative">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="w-full mx-auto px-[4vw] relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >

          {/* Left: 3D Preview */}
          <motion.div
            variants={fadeIn}
            className="space-y-4"
          >
            <div className="aspect-square w-full max-w-[550px] mx-auto bg-neutral-900/20 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl relative group">
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <TShirt color="#ffffff" />

              {/* Interaction Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50">
                <Info className="w-3.5 h-3.5" />
                Drag to rotate • Scroll to zoom
              </div>
            </div>
          </motion.div>

          {/* Right: Configurator */}
          <motion.div variants={fadeIn} className="space-y-10 max-w-md mx-auto lg:mx-0">
            <div>
              <motion.div variants={fadeIn} className="flex items-center gap-3 mb-4">
                <span className="bg-red-600/10 text-red-500 text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded">Official Merchandise</span>
              </motion.div>
              <motion.div variants={fadeIn} className="flex flex-col gap-1 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-red-600" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-red-600">The Collection</span>
                </div>
                <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] mt-4 font-intro uppercase flex items-baseline gap-4">
                  <span className="text-white">DAUNT</span>
                  <span className="text-red-600 relative inline-block group italic font-light font-intro-light">
                    Ø
                    <span className="absolute -inset-4 bg-red-600/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/40 mt-4 tracking-tight italic font-intro-light">
                  The Phoenix Unbounded
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-intro text-white">₹399</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/40">Limited Series</span>
              </motion.div>
              <motion.p variants={fadeIn} className="text-white/60 leading-relaxed text-lg max-w-lg font-light">
                A masterpiece of comfort and design. Crafted from <span className="text-white font-medium">premium cotton</span> for those who believe in ideas worth spreading.
              </motion.p>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold tracking-widest uppercase text-white/40">Select Size</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {SIZES.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[64px] h-14 rounded-2xl text-sm font-black transition-all duration-300 border ${selectedSize === size
                      ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                      : "bg-white/5 text-white/40 border-white/5 hover:border-white/20 hover:text-white"
                      }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex pt-6">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(220, 38, 38, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={isAdding}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white h-16 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                
                <AnimatePresence mode="wait">
                  {isAdding ? (
                    <motion.div
                      key="added"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-6 h-6" />
                      Added to Bag
                    </motion.div>
                  ) : (
                    <motion.div
                      key="add"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="flex items-center gap-3"
                    >
                      <ShoppingCart className="w-7 h-7" />
                      <span className="font-intro tracking-wider">ORDER NOW</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Order now Form Modal */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setShowForm(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              data-lenis-prevent
              className="relative w-full max-w-xl bg-black border border-white/5 rounded-2xl md:rounded-[3rem] overflow-y-auto max-h-[90vh] shadow-[0_0_100px_rgba(0,0,0,0.5)] custom-scrollbar"
            >
              <div className="p-6 md:p-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h2 className="text-3xl font-black font-intro uppercase tracking-tight text-white mb-2">Checkout</h2>
                    <p className="text-white/40 text-sm font-medium uppercase tracking-widest">Complete Your Order Details</p>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    disabled={isSubmitting}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors disabled:opacity-50"
                  >
                    <X className="w-5 h-5 text-white/40" />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-4"
                    >
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold">Thank You!</h3>
                      <p className="text-white/60">Your order for size {selectedSize} has been saved. We'll contact you soon.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                         <div>
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block ml-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                            <input
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 md:py-5 pl-14 pr-4 focus:border-red-600/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-medium"
                              placeholder="Your full name"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block ml-1">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 md:py-5 pl-14 pr-4 focus:border-red-600/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-medium"
                              placeholder="hello@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block ml-1">Organization</label>
                            <input
                              required
                              type="text"
                              value={formData.organization}
                              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 md:py-5 px-6 focus:border-red-600/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-medium"
                              placeholder="Institution"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block ml-1">Designation</label>
                            <input
                              required
                              type="text"
                              value={formData.designation}
                              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 md:py-5 px-6 focus:border-red-600/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-medium"
                              placeholder="e.g. Student"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block ml-1">WhatsApp Number</label>
                          <div className="relative">
                            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                            <input
                              required
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 md:py-5 pl-14 pr-4 focus:border-red-600/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-medium"
                              placeholder="+91"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                          className="w-full bg-red-600 hover:bg-red-700 h-14 md:h-16 rounded-xl md:rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50 font-intro uppercase tracking-wider"
                        >
                          {isSubmitting ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                          ) : (
                            "Confirm Order"
                          )}
                        </motion.button>
                        <p className="text-[9px] text-white/20 text-center mt-6 uppercase tracking-[0.3em] font-medium max-w-[280px] mx-auto leading-loose">
                          By confirming, you agree to our processing of your details for order updates.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
