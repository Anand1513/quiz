
import React from 'react';
import { Zap, Brain, Star } from 'lucide-react';

interface HomePageProps {
  onStartQuiz: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Animated Stars Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 animate-fade-in">
          <div className="flex justify-center mb-8 animate-float">
            <div className="relative">
              <Brain className="w-24 h-24 text-neon-cyan animate-glow-pulse" />
              <div className="absolute -top-2 -right-2">
                <Zap className="w-8 h-8 text-neon-green animate-pulse" />
              </div>
            </div>
          </div>

          <h1 className="font-cyber text-6xl md:text-8xl font-black mb-6 neon-text animate-glow-pulse">
            CYBER QUIZ
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-space">
            Test your knowledge in the digital realm
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Embark on a journey through science, technology, and beyond. 
            Challenge yourself with 10 mind-bending questions in our futuristic quiz experience.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="glass-card p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Star className="w-8 h-8 text-neon-purple mx-auto mb-2" />
              <div className="text-2xl font-bold text-neon-purple">10</div>
              <div className="text-gray-400">Questions</div>
            </div>
            <div className="glass-card p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Zap className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
              <div className="text-2xl font-bold text-neon-cyan">5</div>
              <div className="text-gray-400">Minutes</div>
            </div>
            <div className="glass-card p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Brain className="w-8 h-8 text-neon-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-neon-green">∞</div>
              <div className="text-gray-400">Knowledge</div>
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={onStartQuiz}
            className="btn-neon text-xl px-12 py-6 relative group animate-float"
            style={{ animationDelay: '1s' }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Zap className="w-6 h-6" />
              INITIALIZE QUIZ
              <Zap className="w-6 h-6" />
            </span>
          </button>

          <div className="mt-8 text-sm text-gray-500">
            Press the button above to begin your cyber journey
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
