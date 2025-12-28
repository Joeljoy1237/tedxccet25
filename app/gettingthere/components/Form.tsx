"use client";
import { useState, FormEvent } from "react";
import showTedxToast from "@/components/showTedxToast";

export default function Form() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isSubmitting, setIssubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    setIssubmitting(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          message: message,
          email: email,
          phone: phone,
        }),
        cache: "no-store",
      });

      // If endpoint doesn't exist yet, mock success for UI testing
      if (response.status === 404) {
        showTedxToast({
          type: "success",
          message: "Message Sent (Mock)",
          desc: "The backend endpoint is not yet ready, but the UI works!",
        });
        setMessage("");
        setEmail("");
        setPhone("");
        setName("");
        setIssubmitting(false);
        return;
      }

      const data = await response.json();

      if (response.ok) {
        showTedxToast({
          type: "success",
          message: data.message,
          desc: data.desc,
        });
        setMessage("");
        setEmail("");
        setPhone("");
        setName("");
      } else {
        showTedxToast({
          type: "error",
          message: data.message || "Error",
          desc: data.desc || "Failed to send message",
        });
      }
    } catch (err) {
      console.error(err);
      // Fallback for demo if API fails
      showTedxToast({
        type: "info",
        message: "Demo Mode",
        desc: "API not reachable, but your message would be sent here.",
      });
    }
    setIssubmitting(false);
  };

  return (
    <div className="flex-1 flex-col gap-6 flex rounded-2xl p-8 border border-white/10 bg-neutral-900/50 backdrop-blur-sm">
      <div className="flex flex-col gap-2">
        <span className="text-2xl capitalize font-bold text-white">
          Send us a message
        </span>
        <span className="font-medium text-neutral-400 text-sm">
          Your email address will not be published. Required fields are marked *
        </span>
      </div>
      <div>
        <textarea
          name="message"
          className="w-full p-4 rounded-xl outline-none bg-black border border-white/10 focus:border-red-600/50 transition-colors text-white placeholder:text-neutral-600 resize-none"
          placeholder="Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          rows={5}
        ></textarea>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          className="flex-1 rounded-xl p-4 w-full outline-none bg-black border border-white/10 focus:border-red-600/50 transition-colors text-white placeholder:text-neutral-600"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="flex-1 rounded-xl p-4 w-full outline-none bg-black border border-white/10 focus:border-red-600/50 transition-colors text-white placeholder:text-neutral-600"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          placeholder="Phone"
          className="flex-1 rounded-xl p-4 w-full outline-none bg-black border border-white/10 focus:border-red-600/50 transition-colors text-white placeholder:text-neutral-600"
        />
      </div>
      <div>
        <button
          disabled={isSubmitting}
          onClick={handleSubmit}
          className="w-full md:w-auto font-bold uppercase tracking-wider bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)]"
        >
          {!isSubmitting ? "Submit Message" : "Submitting..."}
        </button>
      </div>
    </div>
  );
}
