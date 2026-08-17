import React from 'react';
import { 
  Grid, 
  Layers, 
  Cpu, 
  Terminal, 
  Globe, 
  Box, 
  Database, 
  Sparkles, 
  GitBranch 
} from 'lucide-react';

const ICON_MAP = {
  Grid: Grid,
  Layers: Layers,
  Cpu: Cpu,
  Terminal: Terminal,
  Globe: Globe,
  Box: Box,
  Database: Database,
  Sparkles: Sparkles,
  GitBranch: GitBranch
};

export default function CategoryFilter({ categories, activeCategory, onSelectCategory, topics }) {
  return (
    <div className="category-bar">
      {categories.map((cat) => {
        const IconComponent = ICON_MAP[cat.icon] || Grid;
        const isActive = activeCategory === cat.id;

        // Calculate count for this category
        const count = cat.id === 'all' 
          ? topics.length 
          : topics.filter(t => t.category === cat.id).length;

        return (
          <button
            key={cat.id}
            className={`category-pill ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <IconComponent size={16} style={{ color: cat.color }} />
            <span>{cat.name}</span>
            <span className="category-badge">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
