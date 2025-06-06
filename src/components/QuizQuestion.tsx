
import React, { useState } from 'react';
import { ChevronRight, Clock, Zap } from 'lucide-react';
import { QuizQuestion as QuizQuestionType } from '../data/quizQuestions';

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answerIndex: number) => void;
  showResult?: boolean;
  selectedAnswer?: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  showResult = false,
  selectedAnswer
}) => {
  const [selected, setSelected] = useState<number | null>(selectedAnswer ?? null);

  const handleOptionClick = (index: number) => {
    if (showResult) return;
    setSelected(index);
    onAnswer(index);
  };

  const getOptionClass = (index: number) => {
    let baseClass = "option-btn";
    
    if (showResult) {
      if (index === question.correctAnswer) {
        baseClass += " correct";
      } else if (index === selected && index !== question.correctAnswer) {
        baseClass += " incorrect";
      }
    } else if (selected === index) {
      baseClass += " selected";
    }
    
    return baseClass;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400 font-cyber">
              QUESTION {questionNumber} OF {totalQuestions}
            </span>
            <div className="flex items-center gap-2 text-neon-cyan">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-cyber">ACTIVE</span>
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-500 relative"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="question-card animate-slide-in-up">
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-space leading-tight">
                {question.question}
              </h2>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={getOptionClass(index)}
                disabled={showResult}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg">{option}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 opacity-50" />
                </div>
              </button>
            ))}
          </div>

          {/* Explanation (shown after answer) */}
          {showResult && question.explanation && (
            <div className="mt-8 p-6 glass-card-dark border-l-4 border-neon-green animate-fade-in">
              <h3 className="text-lg font-bold text-neon-green mb-2 font-cyber">
                EXPLANATION
              </h3>
              <p className="text-gray-300">{question.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
