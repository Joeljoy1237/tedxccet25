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
    <main className="min-h-screen bg-black text-white pt-24 pb-12 overflow-hidden flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="aspect-square w-full max-w-[500px] mx-auto bg-neutral-900/40 rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative group">
              <TShirt color="#ffffff" />

              {/* Interaction Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-2 text-xs font-medium text-white/70">
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
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                TEDxCCET <span className="text-red-600">Logo</span> Tee
              </motion.h1>
              <motion.div variants={fadeIn} className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold tracking-tighter">₹399</span>
              </motion.div>
              <motion.p variants={fadeIn} className="text-white/60 leading-relaxed text-lg max-w-lg italic">
                A masterpiece of comfort and design. Crafted for those who believe in ideas worth spreading.
              </motion.p>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold tracking-widest uppercase text-white/40">Select Size</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {SIZES.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[56px] h-12 rounded-xl text-sm font-bold border transition-all ${selectedSize === size
                      ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      : "bg-transparent text-white/60 border-white/10 hover:border-white/40"
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={isAdding}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white h-14 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-lg shadow-red-600/20"
              >
                <AnimatePresence mode="wait">
                  {isAdding ? (
                    <motion.div
                      key="added"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      Added to Bag
                    </motion.div>
                  ) : (
                    <motion.div
                      key="add"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <ShoppingCart className="w-6 h-6" />
                      Order Now
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              data-lenis-prevent
              className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-3xl overflow-y-auto max-h-[85vh] shadow-2xl custom-scrollbar"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Complete Your Order</h2>
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
                          <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                            <input
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-red-600 outline-none transition-colors"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-red-600 outline-none transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                          <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Organization / Institution</label>
                            <input
                              required
                              type="text"
                              value={formData.organization}
                              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 focus:border-red-600 outline-none transition-colors"
                              placeholder="College or Company Name"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Designation</label>
                            <input
                              required
                              type="text"
                              value={formData.designation}
                              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 focus:border-red-600 outline-none transition-colors"
                              placeholder="Student, Assistant Professor, etc."
                            />
                          </div>

                          <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">WhatsApp Number</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                              <input
                                required
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-red-600 outline-none transition-colors"
                                placeholder="+91 9876543210"
                              />
                            </div>
                          </div>
                      </div>

                      <div className="pt-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                          className="w-full bg-red-600 hover:bg-red-700 h-14 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                          ) : (
                            "Confirm Order"
                          )}
                        </motion.button>
                        <p className="text-[10px] text-white/20 text-center mt-4 uppercase tracking-[0.2em] italic">
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
