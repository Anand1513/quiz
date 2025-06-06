
import React, { useState } from 'react';
import HomePage from '../components/HomePage';
import QuizQuestion from '../components/QuizQuestion';
import QuizResults from '../components/QuizResults';
import { quizQuestions } from '../data/quizQuestions';

type QuizState = 'home' | 'quiz' | 'results';

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const handleStartQuiz = () => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(quizQuestions.length).fill(null));
    setShowResult(false);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);

    // Show result for current question
    setShowResult(true);

    // Auto-advance to next question after 2 seconds
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowResult(false);
      } else {
        // Quiz completed
        setQuizState('results');
      }
    }, 2000);
  };

  const handleRestart = () => {
    setQuizState('home');
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(quizQuestions.length).fill(null));
    setShowResult(false);
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return answer === quizQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  if (quizState === 'home') {
    return <HomePage onStartQuiz={handleStartQuiz} />;
  }

  if (quizState === 'quiz') {
    return (
      <QuizQuestion
        question={quizQuestions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={quizQuestions.length}
        onAnswer={handleAnswer}
        showResult={showResult}
        selectedAnswer={userAnswers[currentQuestionIndex]}
      />
    );
  }

  return (
    <QuizResults
      score={calculateScore()}
      totalQuestions={quizQuestions.length}
      questions={quizQuestions}
      userAnswers={userAnswers}
      onRestart={handleRestart}
    />
  );
};

export default Index;
