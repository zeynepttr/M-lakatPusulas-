import React from 'react';
import { 
  Compass, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  HelpCircle,
  FileText
} from 'lucide-react';

export default function Header({ 
  stats, 
  onResetProgress, 
  onOpenStudyMode, 
  onOpenQuiz, 
  onOpenCheatsheet 
}) {
  const { total, mastered, learning, unread, percentage } = stats;

  return (
    <header className="header-card">
      <div className="header-top">
        <div className="brand-info">
          <div className="brand-icon-wrapper">
            <Compass size={28} />
          </div>
          <div className="brand-title-group">
            <h1>MülakatPusulası</h1>
            <p className="brand-subtitle">Junior Bilgisayar Mühendisi Mülakat Konu Kontrol Listesi</p>
          </div>
        </div>

        <div className="header-actions">
          <button 
            className="btn-action btn-primary" 
            onClick={onOpenStudyMode}
            title="Kartlı Tekrar Modunu Başlat"
          >
            <Sparkles size={16} />
            <span>Kartlı Tekrar (Flashcards)</span>
          </button>

          <button 
            className="btn-action" 
            onClick={onOpenQuiz}
            title="Mini Quiz İle Kendini Test Et"
          >
            <HelpCircle size={16} />
            <span>Mini Quiz</span>
          </button>

          <button 
            className="btn-action" 
            onClick={onOpenCheatsheet}
            title="Big-O ve Hızlı Özet Tabloları"
          >
            <FileText size={16} />
            <span>Hızlı Özetler</span>
          </button>

          <button 
            className="btn-action" 
            onClick={onResetProgress} 
            title="İlerlemeyi Sıfırla"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Progress Bar & Key Metrics */}
      <div className="progress-stats-container">
        <div className="progress-main-bar">
          <div className="progress-label-group">
            <span>Mülakat Hazırlık Durumu</span>
            <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>%{percentage} Tamamlandı</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${percentage}%` }} />
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon" style={{ background: '#d1fae5', color: '#047857' }}>
            <CheckCircle2 size={20} />
          </div>
          <div className="stat-details">
            <span className="stat-value">{mastered} / {total}</span>
            <span className="stat-label">Hazır (Tamamlandı)</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon" style={{ background: '#fef3c7', color: '#b45309' }}>
            <Clock size={20} />
          </div>
          <div className="stat-details">
            <span className="stat-value">{learning}</span>
            <span className="stat-label">Öğreniliyor</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon" style={{ background: '#f1f5f9', color: '#64748b' }}>
            <BookOpen size={20} />
          </div>
          <div className="stat-details">
            <span className="stat-value">{unread}</span>
            <span className="stat-label">Bakılacak</span>
          </div>
        </div>
      </div>
    </header>
  );
}
