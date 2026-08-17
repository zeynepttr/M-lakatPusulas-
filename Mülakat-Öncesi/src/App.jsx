import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Search, Filter } from 'lucide-react';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import QuizModal from './components/QuizModal';
import CheatsheetModal from './components/CheatsheetModal';
import { CATEGORIES, SYLLABUS } from './data/topicsData';

const LOCAL_STORAGE_KEY = 'mulakat_pusulasi_item_statuses';

export default function App() {
  // Item statuses state: { [itemId]: 'unread' | 'learning' | 'mastered' }
  const [itemStatuses, setItemStatuses] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Failed to parse localStorage topic statuses', e);
      return {};
    }
  });

  // Filter state
  const [searchQuery, setSearchQuery] = useState('');

  // Modal states
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCheatsheetOpen, setIsCheatsheetOpen] = useState(false);

  // Sync statuses with localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(itemStatuses));
  }, [itemStatuses]);

  // Handle status update for an item
  const handleStatusChange = (itemId, newStatus) => {
    setItemStatuses((prev) => {
      const updated = { ...prev, [itemId]: newStatus };
      
      // Check total items
      let totalCount = 0;
      SYLLABUS.forEach(g => totalCount += g.items.length);
      const totalMastered = Object.values(updated).filter(s => s === 'mastered').length;

      if (newStatus === 'mastered' && totalMastered === totalCount) {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 }
        });
      }
      return updated;
    });
  };

  // Reset progress
  const handleResetProgress = () => {
    if (window.confirm('Tüm müfredat hazırlık ilerlemenizi sıfırlamak istediğinize emin misiniz?')) {
      setItemStatuses({});
    }
  };

  // Calculate overall stats
  const stats = useMemo(() => {
    let total = 0;
    let mastered = 0;
    let learning = 0;

    SYLLABUS.forEach(group => {
      group.items.forEach(item => {
        total++;
        const st = itemStatuses[item.id] || 'unread';
        if (st === 'mastered') mastered++;
        else if (st === 'learning') learning++;
      });
    });

    const unread = total - mastered - learning;
    const percentage = total > 0 ? Math.round((mastered / total) * 100) : 0;

    return { total, mastered, learning, unread, percentage };
  }, [itemStatuses]);

  // Filter Categories, Groups & Items based on Search Query
  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return CATEGORIES.map(cat => {
      const catGroups = SYLLABUS.filter(g => g.category === cat.id);

      const filteredGroups = catGroups.map(grp => {
        const filteredItems = query === ''
          ? grp.items
          : grp.items.filter(it => 
              it.title.toLowerCase().includes(query) || 
              (it.detail && it.detail.toLowerCase().includes(query)) ||
              grp.group.toLowerCase().includes(query)
            );

        return {
          ...grp,
          items: filteredItems
        };
      }).filter(grp => grp.items.length > 0);

      return {
        ...cat,
        groups: filteredGroups,
        isAutoExpanded: query !== '' && filteredGroups.length > 0
      };
    }).filter(cat => cat.groups.length > 0);
  }, [searchQuery]);

  return (
    <div className="app-container">
      {/* Top Header Card */}
      <Header
        stats={stats}
        onResetProgress={handleResetProgress}
        onOpenStudyMode={() => {
          // Open first category by expanding
          setSearchQuery('');
        }}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenCheatsheet={() => setIsCheatsheetOpen(true)}
      />

      {/* Search Bar */}
      <div className="controls-bar">
        <div className="search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Müfredatta başlık veya kavram ara (ör: Indexing, Binary Search, Deadlock, SOLID, REST, Sharding)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main Categories Tree */}
      {filteredData.length > 0 ? (
        <div className="categories-container">
          {filteredData.map((cat, index) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              categoryGroups={cat.groups}
              itemStatuses={itemStatuses}
              onStatusChange={handleStatusChange}
              isDefaultExpanded={index === 0 || cat.isAutoExpanded}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Filter size={40} style={{ color: 'var(--text-muted)', marginBottom: '12px' }} />
          <h3>Aramanızla Eşleşen Başlık Bulunamadı</h3>
          <p>Lütfen arama kelimenizi kontrol edin veya arama çubuğunu temizleyin.</p>
        </div>
      )}

      {/* Modals */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      <CheatsheetModal
        isOpen={isCheatsheetOpen}
        onClose={() => setIsCheatsheetOpen(false)}
      />
    </div>
  );
}
