import React from 'react';
import SyllabusRow from './SyllabusRow';

export default function GroupSection({ groupName, items, itemStatuses, onStatusChange }) {
  const completedInGroup = items.filter(it => itemStatuses[it.id] === 'mastered').length;
  const totalInGroup = items.length;
  const isGroupAllDone = totalInGroup > 0 && completedInGroup === totalInGroup;

  return (
    <div className="syllabus-group-card">
      <div className="syllabus-group-header">
        <h4 className="syllabus-group-title">📌 {groupName}</h4>
        <span className={`group-progress-pill ${isGroupAllDone ? 'done' : ''}`}>
          {completedInGroup} / {totalInGroup} Tamamlandı
        </span>
      </div>

      <div className="syllabus-items-list">
        {items.map((item) => (
          <SyllabusRow
            key={item.id}
            item={item}
            status={itemStatuses[item.id] || 'unread'}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </div>
  );
}
