import React from 'react';
import { CheckCircle2, Clock, Circle } from 'lucide-react';

export default function SyllabusRow({ item, status, onStatusChange }) {
  return (
    <div className={`syllabus-row ${status}`}>
      <div className="syllabus-row-main">
        <div className="syllabus-title-area">
          <span className="bullet-dot">•</span>
          <span className="syllabus-item-title">{item.title}</span>
          {item.detail && <span className="syllabus-item-detail">— {item.detail}</span>}
        </div>

        {/* Status Toggle Buttons */}
        <div className="syllabus-status-buttons">
          <button
            className={`btn-row-status unread ${status === 'unread' ? 'active' : ''}`}
            onClick={() => onStatusChange(item.id, 'unread')}
            title="Bakılacak olarak işaretle"
          >
            <Circle size={12} /> Bakılacak
          </button>
          <button
            className={`btn-row-status learning ${status === 'learning' ? 'active' : ''}`}
            onClick={() => onStatusChange(item.id, 'learning')}
            title="Çalışılıyor olarak işaretle"
          >
            <Clock size={12} /> Çalışılıyor
          </button>
          <button
            className={`btn-row-status mastered ${status === 'mastered' ? 'active' : ''}`}
            onClick={() => onStatusChange(item.id, 'mastered')}
            title="Tamamlandı olarak işaretle"
          >
            <CheckCircle2 size={12} /> Tamamlandı
          </button>
        </div>
      </div>
    </div>
  );
}
