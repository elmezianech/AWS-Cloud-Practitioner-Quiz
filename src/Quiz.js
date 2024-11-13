import React, { useState } from 'react';
import quizData from './quizData';
import './Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [answers, setAnswers] = useState([]);

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = quizData[currentQuestion].answer;
    const correct = option === correctAnswer;

    setSelectedAnswer(option);
    if (correct) setScore(score + 1);
    setIsCorrect(correct);
    setAnswers(prevAnswers => [
      ...prevAnswers,
      { question: quizData[currentQuestion].question, selectedAnswer: option, correctAnswer, correct }
    ]);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null);
        setSelectedAnswer("");
      } else {
        setShowScore(true);
      }
    }, 800);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer("");
    setIsCorrect(null);
    setAnswers([]);
  };

  return (
    <div className='quiz-container'>
      {showScore ? (
        <div className='score-section'>
          <h2 className="final-score">You scored {score} out of {quizData.length}</h2>
          <button className="restart-button" onClick={handleRestartQuiz}>Restart Quiz</button>
          <div className="review-section">
            {answers.map((item, index) => (
              <div key={index} className="review-item">
                <p className="question-text"><strong>Q{index + 1}:</strong> {item.question}</p>
                <p>
                  <span className={`answer ${item.correct ? 'correct' : 'incorrect'}`}>
                    Your Answer: {item.selectedAnswer}
                  </span>
                  {!item.correct && (
                    <span className="correct-answer">
                      Correct Answer: {item.correctAnswer}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className='question-card'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <h3 className='question-text'>{quizData[currentQuestion].question}</h3>
            <div className='answer-options'>
              {quizData[currentQuestion].options.map((option) => (
                <button 
                  key={option}
                  className={`option-button ${selectedAnswer === option ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedAnswer && (
              <div className="feedback">
                {isCorrect ? 'Correct! 🎉' : 'Sorry, that’s not right. 😢'}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
