"use client";

import ChatInterface from "@/components/ui/chatInterface";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { piyushPersona } from "../../persona";

export default function PiyushPersonaPage() {
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
            Chat with Piyush Sir 💻
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Full-stack developer, educator, and founder of Teachyst, known for
            practical, project-based tutorials on modern web development tools
            and technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🚀 Full Stack Developer",
              "📚 Educator & Mentor",
              "🛠 Project-Based Learning",
              "🌐 Teachyst Founder",
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
              personaName={piyushPersona.name}
              personaDescription={piyushPersona.description}
              personaId={piyushPersona.id}
              avatar={piyushPersona.avatar}
            />
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* About Piyush */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 hover:border-blue-500/40 transition">
              <h3 className="text-xl font-bold mb-4 text-white">
                About Piyush Sir
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <strong>Profession:</strong> Full-Stack Developer, Educator,
                  Entrepreneur
                </p>
                <p>
                  <strong>Specialties:</strong> JavaScript, React, Node.js,
                  Next.js, Databases
                </p>
                <p>
                  <strong>Experience:</strong> Founder @ Teachyst, Ex SDE @
                  Industry Projects
                </p>
                <p>
                  <strong>Teaching Style:</strong> Project-Based, Practical,
                  Career-Focused
                </p>
              </div>
            </div>

            {/* Example Questions */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">
                Try These Questions
              </h3>
              <div className="space-y-3">
                {piyushPersona.examples.map((example, index) => (
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
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-800/50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-cyan-300">
                💡 Chat Tips
              </h3>
              <ul className="space-y-2 text-sm text-cyan-200">
                <li>• Ask about modern web development tools & frameworks</li>
                <li>• Expect practical, project-focused answers</li>
                <li>• Explore career tips for developers</li>
                <li>• Discuss scaling apps & real-world challenges</li>
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
            Get hands-on coding advice and industry insights from Piyush’s
            project-driven approach to learning.
          </p>
        </div>
      </section>
    </div>
  );
}
