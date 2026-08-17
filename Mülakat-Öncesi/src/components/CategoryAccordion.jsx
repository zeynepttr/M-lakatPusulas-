import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Cpu, 
  Terminal, 
  Globe, 
  Box, 
  Database, 
  Sparkles, 
  GitBranch,
  CheckCircle2
} from 'lucide-react';
import TopicItem from './TopicItem';

const ICON_MAP = {
  Layers: Layers,
  Cpu: Cpu,
  Terminal: Terminal,
  Globe: Globe,
  Box: Box,
  Database: Database,
  Sparkles: Sparkles,
  GitBranch: GitBranch
};

export default function CategoryAccordion({ 
  category, 
  categoryTopics, 
  topicStatuses, 
  onStatusChange,
  isDefaultExpanded = false 
}) {
  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded);

  const IconComponent = ICON_MAP[category.icon] || Layers;

  // Calculate completed count for this category
  const completedCount = categoryTopics.filter(
    (t) => topicStatuses[t.id] === 'mastered'
  ).length;

  const totalCount = categoryTopics.length;
  const isAllCompleted = totalCount > 0 && completedCount === totalCount;

  return (
    <div className={`category-section-card ${isExpanded ? 'expanded' : ''}`}>
      {/* Category Header Bar */}
      <div 
        className="category-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="category-title-group">
          <div className="category-icon-box" style={{ background: `${category.color}15`, color: category.color }}>
            <IconComponent size={22} />
          </div>
          <div>
            <h3 className="category-title">{category.name}</h3>
            <span className="category-subtitle">{totalCount} Konu Başlığı</span>
          </div>
        </div>

        <div className="category-meta">
          <div className={`category-progress-badge ${isAllCompleted ? 'all-completed' : ''}`}>
            {isAllCompleted ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={14} /> Tamamlandı ({completedCount}/{totalCount})
              </span>
            ) : (
              <span>{completedCount} / {totalCount} Tamamlandı</span>
            )}
          </div>

          <ChevronDown 
            size={20} 
            className="expand-chevron"
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} 
          />
        </div>
      </div>

      {/* Expanded Sub-topics List */}
      {isExpanded && (
        <div className="subtopics-list">
          {categoryTopics.map((topic) => (
            <TopicItem
              key={topic.id}
              topic={topic}
              status={topicStatuses[topic.id] || 'unread'}
              onStatusChange={onStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
