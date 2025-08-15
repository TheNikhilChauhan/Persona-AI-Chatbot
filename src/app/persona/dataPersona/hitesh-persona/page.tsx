"use client";

import ChatInterface from "@/components/ui/chatInterface";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { hiteshPersona } from "../../persona";

export default function HiteshPersonaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header Section */}
      <section className="relative py-20 border-b border-gray-800 overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-transparent blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Interface
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Chat with Hitesh Sir ☕
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tech educator and content creator simplifying programming &
            cybersecurity, founder of LearnCodeOnline, ex-CTO @ iNeuron.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🇮🇳 Hinglish Speaker",
              "☕ Chai Enthusiast",
              "💻 Tech Educator",
              "🚀 LearnCodeOnline",
            ].map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-800/60 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-500/20 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2 relative rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-lg p-4 shadow-lg shadow-orange-900/20">
            <ChatInterface
              personaName={hiteshPersona.name}
              personaDescription={hiteshPersona.description}
              personaId={hiteshPersona.id}
              avatar={hiteshPersona.avatar}
            />
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* About Hitesh */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 hover:border-orange-500/40 transition">
              <h3 className="text-xl font-bold mb-4 text-white">
                About Hitesh Sir
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <strong>Profession:</strong> Tech Educator, Entrepreneur,
                  YouTuber
                </p>
                <p>
                  <strong>Specialties:</strong> JavaScript, Python, Web Dev,
                  DSA, AI
                </p>
                <p>
                  <strong>Experience:</strong> Ex-CTO @ iNeuron, Founder @ LCO
                </p>
                <p>
                  <strong>Teaching Style:</strong> Hinglish, Motivational
                </p>
              </div>
            </div>

            {/* Example Questions */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">
                Try These Questions
              </h3>
              <div className="space-y-3">
                {hiteshPersona.examples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/60 border border-gray-700 rounded-lg p-3 hover:border-orange-500/40 transition"
                  >
                    <p className="text-sm font-medium text-white mb-1">
                      “{example.user}”
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      {example.assistant.substring(0, 60)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-800/50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-yellow-300">
                💡 Chat Tips
              </h3>
              <ul className="space-y-2 text-sm text-yellow-200">
                <li>• Ask about coding, tech trends, or career advice</li>
                <li>• Expect Hinglish responses with chai references ☕</li>
                <li>• Learn by doing — not spoon-fed solutions</li>
                <li>• Ask follow-ups for deeper insight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900/70 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why This AI Persona?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Experience authentic tech education with Hitesh&apos;s unique
            teaching style
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🇮🇳",
                title: "Authentic Hinglish",
                desc: "Natural Hindi + English mix",
              },
              {
                icon: "☕",
                title: "Chai References",
                desc: "Fun analogies & humor",
              },
              { icon: "🎓", title: "No Spoon-feeding", desc: "Learn by doing" },
              {
                icon: "💻",
                title: "Real Analogies",
                desc: "Simplified complex concepts",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-orange-500/40 transition"
              >
                <div className="w-16 h-16 bg-orange-900/30 border border-orange-800/50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
