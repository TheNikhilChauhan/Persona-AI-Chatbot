"use client";

import ChatInterface from "@/components/ui/chatInterface";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { sherlockPersona } from "../../persona";

export default function SherlockPersonaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header Section */}
      <section className="relative py-20 border-b border-gray-800 overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent blur-3xl"></div>
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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Chat with Sherlock Holmes 🕵️‍♂️
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Brilliant consulting detective with razor-sharp intellect, unmatched
            observation skills, and logical reasoning — solving mysteries no one
            else can crack.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🔍 Master of Deduction",
              "🧠 Logical Thinker",
              "📜 Victorian Era Sleuth",
              "🕵️ Consulting Detective",
            ].map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-800/60 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500/20 transition"
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
          <div className="lg:col-span-2 relative rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-lg p-4 shadow-lg shadow-blue-900/20">
            <ChatInterface
              personaName={sherlockPersona.name}
              personaDescription={sherlockPersona.description}
              personaId={sherlockPersona.id}
              avatar={sherlockPersona.avatar}
            />
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* About Sherlock */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 hover:border-blue-500/40 transition">
              <h3 className="text-xl font-bold mb-4 text-white">
                About Sherlock Holmes
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <strong>Profession:</strong> Consulting Detective
                </p>
                <p>
                  <strong>Specialties:</strong> Deduction, Forensics, Disguise,
                  Criminal Psychology
                </p>
                <p>
                  <strong>Experience:</strong> Solved countless high-profile
                  cases in London & beyond
                </p>
                <p>
                  <strong>Personality:</strong> Observant, Analytical, Eccentric
                </p>
              </div>
            </div>

            {/* Example Questions */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">
                Try These Questions
              </h3>
              <div className="space-y-3">
                {sherlockPersona.examples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/60 border border-gray-700 rounded-lg p-3 hover:border-blue-500/40 transition"
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
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-800/50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-blue-300">
                💡 Chat Tips
              </h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>• Ask for step-by-step investigation guides</li>
                <li>• Expect Victorian-era vocabulary & reasoning</li>
                <li>• Present clues — Sherlock will deduce the rest</li>
                <li>• Ask for logical breakdowns of complex problems</li>
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
            Experience thrilling deduction and investigative brilliance — just
            as if you were speaking to the legendary detective himself.
          </p>
        </div>
      </section>
    </div>
  );
}
