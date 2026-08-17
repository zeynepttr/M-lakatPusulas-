import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import GroupSection from './GroupSection';

export default function CategoryCard({ 
  category, 
  categoryGroups, 
  itemStatuses, 
  onStatusChange,
  isDefaultExpanded = false 
}) {
  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded);

  // Calculate total items and completed items in this category
  let totalCatItems = 0;
  let completedCatItems = 0;

  categoryGroups.forEach(g => {
    g.items.forEach(it => {
      totalCatItems++;
      if (itemStatuses[it.id] === 'mastered') completedCatItems++;
    });
  });

  const isAllCatDone = totalCatItems > 0 && completedCatItems === totalCatItems;

  return (
    <div className={`category-section-card ${isExpanded ? 'expanded' : ''}`}>
      {/* Category Header */}
      <div 
        className="category-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="category-title-group">
          <div className="category-icon-box" style={{ background: `${category.color}15`, color: category.color, fontWeight: 'bold' }}>
            {category.name.charAt(0)}
          </div>
          <div>
            <h3 className="category-title">{category.name}</h3>
            <span className="category-subtitle">{categoryGroups.length} Konu Grubu, {totalCatItems} Alt Başlık</span>
          </div>
        </div>

        <div className="category-meta">
          <div className={`category-progress-badge ${isAllCatDone ? 'all-completed' : ''}`}>
            {isAllCatDone ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={14} /> Tamamlandı ({completedCatItems}/{totalCatItems})
              </span>
            ) : (
              <span>{completedCatItems} / {totalCatItems} Tamamlandı</span>
            )}
          </div>

          <ChevronDown 
            size={20} 
            className="expand-chevron"
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} 
          />
        </div>
      </div>

      {/* Expanded Groups & Subtopics */}
      {isExpanded && (
        <div style={{ padding: '0 24px 24px 24px', display: 'flex', flexDirection: 'column', gap: '20px', background: '#fafafa', borderTop: '1px solid #e2e8f0' }}>
          {categoryGroups.map((grp, idx) => (
            <GroupSection
              key={idx}
              groupName={grp.group}
              items={grp.items}
              itemStatuses={itemStatuses}
              onStatusChange={onStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
