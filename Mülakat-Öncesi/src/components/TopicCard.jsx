import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Code2, 
  Lightbulb, 
  Check, 
  Clock, 
  BookMarked,
  Flame,
  Zap,
  Target
} from 'lucide-react';

export default function TopicCard({ topic, status, onStatusChange }) {
  const [expanded, setExpanded] = useState(false);

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'high':
        return <span className="priority-tag priority-high"><Flame size={12} /> Sık Sorulur</span>;
      case 'fundamental':
        return <span className="priority-tag priority-fundamental"><Target size={12} /> Temel Konu</span>;
      case 'medium':
      default:
        return <span className="priority-tag priority-medium"><Zap size={12} /> Kritik</span>;
    }
  };

  return (
    <div className={`topic-card ${status}`}>
      <div>
        <div className="topic-header">
          <div className="topic-title-area">
            {getPriorityBadge(topic.priority)}
            <h3 className="topic-title">{topic.title}</h3>
          </div>
        </div>

        <p className="topic-summary">{topic.summary}</p>

        {/* Key Concepts Pills */}
        <div className="concepts-list">
          {topic.keyConcepts.map((concept, index) => (
            <span key={index} className="concept-pill">#{concept}</span>
          ))}
        </div>
      </div>

      {/* Expandable Details */}
      {expanded && (
        <div className="topic-expandable">
          {/* Key Interview Questions */}
          {topic.keyQuestions && topic.keyQuestions.length > 0 && (
            <div className="section-block">
              <div className="section-title">
                <HelpCircle size={14} />
                <span>Mülakatta Nasıl Sorulur?</span>
              </div>
              <ul className="questions-list">
                {topic.keyQuestions.map((q, idx) => (
                  <li key={idx} className="question-item">
                    ❓ {q}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Example / Snippet */}
          {topic.codeExample && (
            <div className="section-block">
              <div className="section-title">
                <Code2 size={14} />
                <span>Kod & Mantık Özet Kartı</span>
              </div>
              <pre className="code-block">{topic.codeExample}</pre>
            </div>
          )}

          {/* Interview Tip */}
          {topic.interviewTip && (
            <div className="interview-tip-box">
              <Lightbulb size={16} style={{ flexShrink: 0, color: '#f59e0b', marginTop: '2px' }} />
              <div>
                <strong>Mülakat Taktiği:</strong> {topic.interviewTip}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Card Footer Controls */}
      <div className="topic-footer">
        <div className="status-selector">
          <button
            className={`btn-status unread ${status === 'unread' ? 'active' : ''}`}
            onClick={() => onStatusChange(topic.id, 'unread')}
            title="Çalışılacak olarak işaretle"
          >
            Çalışılacak
          </button>
          <button
            className={`btn-status learning ${status === 'learning' ? 'active' : ''}`}
            onClick={() => onStatusChange(topic.id, 'learning')}
            title="Öğreniliyor olarak işaretle"
          >
            Öğreniliyor
          </button>
          <button
            className={`btn-status mastered ${status === 'mastered' ? 'active' : ''}`}
            onClick={() => onStatusChange(topic.id, 'mastered')}
            title="Tamamlandı (Hazır) olarak işaretle"
          >
            Tamamlandı
          </button>
        </div>

        <button 
          className="btn-expand" 
          onClick={() => setExpanded(!expanded)}
        >
          <span>{expanded ? 'Gizle' : 'Detaylar'}</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
    </div>
  );
}
