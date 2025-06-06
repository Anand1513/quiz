
import React from 'react';
import { Trophy, Target, Zap, RefreshCw, Star } from 'lucide-react';
import { QuizQuestion } from '../data/quizQuestions';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  questions: QuizQuestion[];
  userAnswers: (number | null)[];
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  questions,
  userAnswers,
  onRestart
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return { message: "LEGENDARY PERFORMANCE!", color: "text-neon-green", icon: Trophy };
    if (percentage >= 80) return { message: "EXCELLENT WORK!", color: "text-neon-cyan", icon: Star };
    if (percentage >= 70) return { message: "GOOD JOB!", color: "text-neon-purple", icon: Target };
    if (percentage >= 60) return { message: "NOT BAD!", color: "text-yellow-400", icon: Zap };
    return { message: "KEEP LEARNING!", color: "text-red-400", icon: RefreshCw };
  };

  const { message, color, icon: Icon } = getScoreMessage();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Results Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6 animate-float">
            <div className="relative">
              <Icon className={`w-24 h-24 ${color} animate-glow-pulse`} />
              <div className="absolute -top-2 -right-2">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{score}</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-cyber text-4xl md:text-6xl font-black mb-4 neon-text">
            QUIZ COMPLETE
          </h1>
          
          <p className={`text-2xl md:text-3xl font-bold mb-2 ${color}`}>
            {message}
          </p>
          
          <div className="text-6xl md:text-8xl font-black mb-4 text-white">
            {score}/{totalQuestions}
          </div>
          
          <div className="text-xl text-gray-400 mb-8">
            {percentage}% Accuracy Rate
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 text-center">
            <Trophy className="w-8 h-8 text-neon-green mx-auto mb-2" />
            <div className="text-2xl font-bold text-neon-green">{score}</div>
            <div className="text-gray-400">Correct</div>
          </div>
          <div className="glass-card p-6 text-center">
            <Target className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-400">{totalQuestions - score}</div>
            <div className="text-gray-400">Incorrect</div>
          </div>
          <div className="glass-card p-6 text-center">
            <Star className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
            <div className="text-2xl font-bold text-neon-cyan">{percentage}%</div>
            <div className="text-gray-400">Accuracy</div>
          </div>
        </div>

        {/* Question Review */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 font-cyber flex items-center gap-3">
            <Zap className="w-6 h-6 text-neon-cyan" />
            QUESTION REVIEW
          </h2>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div
                  key={question.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    isCorrect 
                      ? 'bg-neon-green/10 border-neon-green' 
                      : 'bg-red-500/10 border-red-500'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      isCorrect ? 'bg-neon-green text-black' : 'bg-red-500 text-white'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">
                        {question.question}
                      </h3>
                      <div className="text-sm space-y-1">
                        <div className={isCorrect ? 'text-neon-green' : 'text-red-400'}>
                          Your answer: {userAnswer !== null ? question.options[userAnswer] : 'No answer'}
                        </div>
                        {!isCorrect && (
                          <div className="text-neon-green">
                            Correct answer: {question.options[question.correctAnswer]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="btn-neon text-lg px-10 py-4 group"
          >
            <span className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 group-hover:animate-spin" />
              RESTART QUIZ
              <Zap className="w-5 h-5" />
            </span>
          </button>
          
          <div className="mt-6 text-sm text-gray-500">
            Challenge yourself again and improve your score!
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
