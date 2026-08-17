import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Code2, Lightbulb, Flame, Zap, Target, CheckSquare } from 'lucide-react';

export default function TopicItem({ topic, status, onStatusChange }) {
  const [expanded, setExpanded] = useState(false);

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'high':
        return <span className="priority-badge priority-high"><Flame size={12} /> Sık Sorulur</span>;
      case 'fundamental':
        return <span className="priority-badge priority-fundamental"><Target size={12} /> Temel Konu</span>;
      case 'medium':
      default:
        return <span className="priority-badge priority-medium"><Zap size={12} /> Kritik</span>;
    }
  };

  return (
    <div className={`subtopic-item ${status}`}>
      <div className="subtopic-main-row">
        <div className="subtopic-info">
          <div className="subtopic-title-row">
            {getPriorityBadge(topic.priority)}
            <h4 className="subtopic-title">{topic.title}</h4>
          </div>
          <p className="subtopic-summary">{topic.summary}</p>

          {/* Sub-topics Bullet Pills (User's Exact Concepts) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
            {topic.keyConcepts.map((concept, idx) => (
              <span 
                key={idx} 
                style={{ 
                  fontSize: '0.76rem', 
                  padding: '2px 8px', 
                  borderRadius: '6px', 
                  background: '#f1f5f9', 
                  color: '#475569', 
                  border: '1px solid #e2e8f0',
                  fontWeight: 500
                }}
              >
                • {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Status Buttons */}
        <div className="status-buttons-group">
          <button
            className={`btn-status-pill unread ${status === 'unread' ? 'active' : ''}`}
            onClick={() => onStatusChange(topic.id, 'unread')}
          >
            Çalışılacak
          </button>
          <button
            className={`btn-status-pill learning ${status === 'learning' ? 'active' : ''}`}
            onClick={() => onStatusChange(topic.id, 'learning')}
          >
            Öğreniliyor
          </button>
          <button
            className={`btn-status-pill mastered ${status === 'mastered' ? 'active' : ''}`}
            onClick={() => onStatusChange(topic.id, 'mastered')}
          >
            Tamamlandı
          </button>
        </div>
      </div>

      {/* Expand/Collapse Toggle */}
      <button 
        className="subtopic-details-toggle"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{expanded ? 'Detayları Gizle' : 'Mülakat Soruları, Kod & İpuçları'}</span>
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {/* Expanded Topic Details */}
      {expanded && (
        <div className="subtopic-details-body">
          {/* Sub-topics Checklist */}
          {topic.keyConcepts && (
            <div className="detail-block">
              <div className="detail-label">
                <CheckSquare size={14} />
                <span>Bilinmesi Gereken Alt Başlıklar Kontrol Listesi</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px', marginTop: '4px' }}>
                {topic.keyConcepts.map((item, i) => (
                  <div key={i} style={{ fontSize: '0.84rem', background: '#ffffff', padding: '6px 10px', borderRadius: '6px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-indigo)', fontWeight: 'bold' }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Questions */}
          {topic.keyQuestions && topic.keyQuestions.length > 0 && (
            <div className="detail-block">
              <div className="detail-label">
                <HelpCircle size={14} />
                <span>Mülakatta Nasıl Sorulur?</span>
              </div>
              <ul className="questions-ul">
                {topic.keyQuestions.map((q, idx) => (
                  <li key={idx} className="question-li">
                    ❓ {q}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code / Logic Example */}
          {topic.codeExample && (
            <div className="detail-block">
              <div className="detail-label">
                <Code2 size={14} />
                <span>Kod & Mantık Özet Kartı</span>
              </div>
              <pre className="code-snippet">{topic.codeExample}</pre>
            </div>
          )}

          {/* Interview Tip */}
          {topic.interviewTip && (
            <div className="tip-box">
              <Lightbulb size={16} style={{ flexShrink: 0, color: '#b45309' }} />
              <div>
                <strong>Mülakat Taktiği:</strong> {topic.interviewTip}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
