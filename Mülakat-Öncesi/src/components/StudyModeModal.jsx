import React, { useState } from 'react';
import { X, Sparkles, ChevronLeft, ChevronRight, RotateCw, CheckCircle, HelpCircle } from 'lucide-react';

export default function StudyModeModal({ isOpen, onClose, topics, categories }) {
  if (!isOpen) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentTopic = topics[currentIndex];
  const categoryObj = categories.find(c => c.id === currentTopic.category);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % topics.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + topics.length) % topics.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>
            <Sparkles style={{ color: 'var(--accent-purple)' }} />
            Mülakat Öncesi Hızlı Tekrar (Flashcards)
          </h2>
          <button className="btn-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <span>Kart {currentIndex + 1} / {topics.length}</span>
          <span>Kategori: <strong>{categoryObj ? categoryObj.name : ''}</strong></span>
        </div>

        <div className="flashcard-container">
          <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
            <div className="flashcard-category">{categoryObj ? categoryObj.name : ''}</div>
            
            {!isFlipped ? (
              <div>
                <h3 className="flashcard-question">{currentTopic.title}</h3>
                <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>{currentTopic.summary}</p>
                <div className="flashcard-hint">(Cevabı ve Mülakat İpuçlarını görmek için karta tıklayın 🔄)</div>
              </div>
            ) : (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <h4 style={{ color: 'var(--accent-indigo)', marginBottom: '10px' }}>Sık Sorulan Mülakat Soruları:</h4>
                <ul style={{ textAlign: 'left', listStyle: 'disc', paddingLeft: '20px', marginBottom: '16px', fontSize: '0.92rem' }}>
                  {currentTopic.keyQuestions.map((q, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>{q}</li>
                  ))}
                </ul>
                {currentTopic.interviewTip && (
                  <div style={{ background: 'rgba(245, 158, 11, 0.15)', padding: '12px', borderRadius: '8px', textAlign: 'left', fontSize: '0.88rem', color: '#fde68a' }}>
                    💡 <strong>İpucu:</strong> {currentTopic.interviewTip}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flashcard-controls">
            <button className="btn-action" onClick={handlePrev}>
              <ChevronLeft size={18} /> Önceki Kart
            </button>
            <button className="btn-action" onClick={() => setIsFlipped(!isFlipped)}>
              <RotateCw size={18} /> Kartı Çevir
            </button>
            <button className="btn-action btn-primary" onClick={handleNext}>
              Sonraki Kart <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
