import React, { useState, useMemo } from 'react';
import { X, HelpCircle, Trophy, RotateCcw, Filter, Flame } from 'lucide-react';
import { QUIZ_QUESTIONS, CATEGORIES } from '../data/topicsData';

export default function QuizModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // Filter questions by category
  const activeQuestions = useMemo(() => {
    if (selectedCategory === 'all') return QUIZ_QUESTIONS;
    return QUIZ_QUESTIONS.filter(q => q.category === selectedCategory);
  }, [selectedCategory]);

  const currentQ = activeQuestions[currentIndex];

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setQuizFinished(false);
  };

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setQuizFinished(false);
  };

  const getDifficultyBadge = (diff) => {
    switch (diff) {
      case 'Zor':
        return <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>🔴 Zor</span>;
      case 'Orta':
        return <span style={{ background: '#fef3c7', color: '#b45309', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>🟡 Orta</span>;
      case 'Kolay':
      default:
        return <span style={{ background: '#d1fae5', color: '#047857', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>🟢 Kolay</span>;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px' }}>
        <div className="modal-header">
          <h2>
            <HelpCircle style={{ color: 'var(--accent-cyan)' }} />
            Junior CS Teknik Mülakat Quiz Platformu
          </h2>
          <button className="btn-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Category Selector Pills */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '20px' }}>
          <button
            className={`btn-action ${selectedCategory === 'all' ? 'btn-primary' : ''}`}
            onClick={() => handleCategoryChange('all')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            🎯 Karışık Genel Test
          </button>
          {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
            <button
              key={cat.id}
              className={`btn-action ${selectedCategory === cat.id ? 'btn-primary' : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
              style={{ fontSize: '0.82rem', padding: '6px 12px', whiteSpace: 'nowrap' }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {!quizFinished && currentQ ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <span>Soru {currentIndex + 1} / {activeQuestions.length}</span>
              {getDifficultyBadge(currentQ.difficulty)}
              <span>Skor: <strong style={{ color: 'var(--accent-emerald)', fontSize: '1.1rem' }}>{score}</strong></span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '20px', color: '#0f172a' }}>
              {currentQ.question}
            </h3>

            <div className="quiz-options">
              {currentQ.options.map((opt, idx) => {
                let btnClass = 'quiz-option-btn';
                if (isAnswered) {
                  if (idx === currentQ.correct) btnClass += ' correct';
                  else if (idx === selectedOption) btnClass += ' wrong';
                }

                return (
                  <button
                    key={idx}
                    className={btnClass}
                    onClick={() => handleSelectOption(idx)}
                  >
                    <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f1f5f9', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div style={{ marginTop: '20px', padding: '16px', borderRadius: '12px', background: selectedOption === currentQ.correct ? '#f0fdf4' : '#fef2f2', border: '1px solid #e2e8f0', animation: 'fadeIn 0.3s ease' }}>
                <div style={{ fontWeight: 700, marginBottom: '6px', color: selectedOption === currentQ.correct ? '#047857' : '#b91c1c' }}>
                  {selectedOption === currentQ.correct ? '✅ Tebrikler! Doğru Cevap.' : '❌ Yanlış Cevap.'}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#334155' }}>{currentQ.explanation}</p>
              </div>
            )}

            {isAnswered && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                <button className="btn-action btn-primary" onClick={handleNextQuestion}>
                  {currentIndex < activeQuestions.length - 1 ? 'Sonraki Soru ➔' : 'Sonucu Gör 🏆'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <Trophy size={56} style={{ color: 'var(--accent-amber)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-heading)' }}>Quiz Tamamlandı!</h3>
            <p style={{ fontSize: '1.1rem', margin: '16px 0', color: 'var(--text-secondary)' }}>
              {activeQuestions.length} sorudan <strong style={{ color: 'var(--accent-emerald)', fontSize: '1.4rem' }}>{score}</strong> tanesini doğru yanıtladınız (%{Math.round((score / activeQuestions.length) * 100)} Başarı).
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
              {score / activeQuestions.length >= 0.8 ? '🔥 Mükemmel performans! Mülakata hazırsınız.' : '⚡ İyi bir başlangıç! Eksik hissettiğiniz alt başlıkları kontrol listesinden tekrar gözden geçirin.'}
            </p>
            <button className="btn-action btn-primary" onClick={handleRestartQuiz} style={{ margin: '0 auto' }}>
              <RotateCcw size={16} /> Testi Tekrar Başlat
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
