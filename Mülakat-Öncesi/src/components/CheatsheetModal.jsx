import React, { useState } from 'react';
import { X, FileText, Database, Globe, GitBranch, Cpu, Shield, Sparkles, Terminal, Box, Server } from 'lucide-react';
import { CHEATSHEETS } from '../data/topicsData';

export default function CheatsheetModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('bigO');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '960px' }}>
        <div className="modal-header">
          <h2>
            <FileText style={{ color: 'var(--accent-emerald)' }} />
            Junior CS Mülakat Hızlı Özet Rehberi (Cheatsheets)
          </h2>
          <button className="btn-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <button
            className={`btn-action ${activeTab === 'bigO' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('bigO')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            Big-O Tablosu
          </button>
          <button
            className={`btn-action ${activeTab === 'sorting' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('sorting')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            Sıralama Karmaşıklığı
          </button>
          <button
            className={`btn-action ${activeTab === 'patterns' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('patterns')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            Design Patterns
          </button>
          <button
            className={`btn-action ${activeTab === 'system' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('system')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            Sistem Tasarımı
          </button>
          <button
            className={`btn-action ${activeTab === 'db' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('db')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            SQL vs NoSQL
          </button>
          <button
            className={`btn-action ${activeTab === 'http' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('http')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            HTTP Kodları
          </button>
          <button
            className={`btn-action ${activeTab === 'linux' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('linux')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            Linux Komutları
          </button>
          <button
            className={`btn-action ${activeTab === 'osi' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('osi')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            OSI 7 Katmanı
          </button>
          <button
            className={`btn-action ${activeTab === 'solid' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('solid')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            SOLID Özet
          </button>
          <button
            className={`btn-action ${activeTab === 'git' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('git')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            Git Rehberi
          </button>
          <button
            className={`btn-action ${activeTab === 'ai' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('ai')}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            ML Metrikleri
          </button>
        </div>

        {/* Tab 1: Big-O Data Structures */}
        {activeTab === 'bigO' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Veri Yapıları Zaman & Alan Karmaşıklığı</h3>
            <table className="cheatsheet-table">
              <thead>
                <tr>
                  <th>Veri Yapısı</th>
                  <th>Erişim (Access)</th>
                  <th>Arama (Search)</th>
                  <th>Ekleme (Insertion)</th>
                  <th>Silme (Deletion)</th>
                  <th>Bellek (Space)</th>
                </tr>
              </thead>
              <tbody>
                {CHEATSHEETS.bigO.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.structure}</strong></td>
                    <td className={row.access === 'O(1)' ? 'badge-o1' : 'badge-on'}>{row.access}</td>
                    <td className={row.search === 'O(1)' ? 'badge-o1' : row.search === 'O(log N)' ? 'badge-ologn' : 'badge-on'}>{row.search}</td>
                    <td className={row.insert === 'O(1)' || row.insert.includes('O(1)') ? 'badge-o1' : 'badge-ologn'}>{row.insert}</td>
                    <td className={row.delete === 'O(1)' || row.delete.includes('O(1)') ? 'badge-o1' : 'badge-ologn'}>{row.delete}</td>
                    <td>{row.space}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Sorting */}
        {activeTab === 'sorting' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Sıralama Algoritmaları</h3>
            <table className="cheatsheet-table">
              <thead>
                <tr>
                  <th>Algoritma</th>
                  <th>En İyi (Best)</th>
                  <th>Ortalama (Avg)</th>
                  <th>En Kötü (Worst)</th>
                  <th>Alan (Space)</th>
                  <th>Kararlı (Stable)?</th>
                </tr>
              </thead>
              <tbody>
                {CHEATSHEETS.sorting.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.algo}</strong></td>
                    <td className="badge-ologn">{row.best}</td>
                    <td className="badge-ologn">{row.avg}</td>
                    <td className={row.worst === 'O(N^2)' ? 'badge-on2' : 'badge-ologn'}>{row.worst}</td>
                    <td>{row.space}</td>
                    <td><span style={{ color: row.stable === 'Evet' ? '#059669' : '#dc2626', fontWeight: 600 }}>{row.stable}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Design Patterns */}
        {activeTab === 'patterns' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Tasarım Desenleri (Design Patterns) Karar Rehberi</h3>
            <table className="cheatsheet-table">
              <thead>
                <tr>
                  <th>Pattern Name</th>
                  <th>Amacı (Intent)</th>
                  <th>Ne Zaman Kullanılır (Use Case)</th>
                </tr>
              </thead>
              <tbody>
                {CHEATSHEETS.designPatterns.map((row, i) => (
                  <tr key={i}>
                    <td><strong style={{ color: '#4f46e5' }}>{row.pattern}</strong></td>
                    <td>{row.intent}</td>
                    <td style={{ fontSize: '0.84rem', color: '#475569' }}>{row.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 4: System Design */}
        {activeTab === 'system' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Sistem Tasarımı (System Design) Temel Kavramları</h3>
            {CHEATSHEETS.systemDesign.map((row, i) => (
              <div key={i} style={{ background: '#fafafa', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <strong style={{ color: '#0284c7', fontSize: '1rem' }}>{row.concept}:</strong>
                <p style={{ marginTop: '4px', fontSize: '0.9rem', color: '#334155' }}>{row.detail}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: SQL vs NoSQL */}
        {activeTab === 'db' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>SQL (İlişkisel) vs NoSQL Karşılaştırma Matrisi</h3>
            <table className="cheatsheet-table">
              <thead>
                <tr>
                  <th>Özellik</th>
                  <th>SQL (Relational)</th>
                  <th>NoSQL (Non-Relational)</th>
                </tr>
              </thead>
              <tbody>
                {CHEATSHEETS.sqlVsNosql.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.feature}</strong></td>
                    <td style={{ color: '#0284c7' }}>{row.sql}</td>
                    <td style={{ color: '#7c3aed' }}>{row.nosql}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 6: HTTP Codes */}
        {activeTab === 'http' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Sık Sorulan HTTP Status Kodları</h3>
            <table className="cheatsheet-table">
              <thead>
                <tr>
                  <th>Status Kodu</th>
                  <th>Kategori</th>
                  <th>Açıklama</th>
                </tr>
              </thead>
              <tbody>
                {CHEATSHEETS.httpCodes.map((row, i) => (
                  <tr key={i}>
                    <td><strong style={{ fontFamily: 'var(--font-code)' }}>{row.code}</strong></td>
                    <td><span style={{ fontSize: '0.8rem', padding: '2px 6px', borderRadius: '4px', background: '#f1f5f9', fontWeight: 600 }}>{row.category}</span></td>
                    <td>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 7: Linux Commands */}
        {activeTab === 'linux' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Mülakatlarda Sık Sorulan Linux / Terminal Komutları</h3>
            <table className="cheatsheet-table">
              <thead>
                <tr>
                  <th>Komut</th>
                  <th>Kategori</th>
                  <th>Açıklama</th>
                </tr>
              </thead>
              <tbody>
                {CHEATSHEETS.linuxCommands.map((row, i) => (
                  <tr key={i}>
                    <td><strong style={{ fontFamily: 'var(--font-code)', color: '#dc2626' }}>{row.cmd}</strong></td>
                    <td><span style={{ fontSize: '0.78rem', padding: '2px 6px', borderRadius: '4px', background: '#f1f5f9' }}>{row.category}</span></td>
                    <td>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 8: OSI */}
        {activeTab === 'osi' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>OSI 7 Katmanı (7-1) & Protokoller</h3>
            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #4f46e5', border: '1px solid #e2e8f0' }}>
              <strong>7. Application (Uygulama):</strong> HTTP, HTTPS, FTP, DNS, SMTP, SSH, Telnet
            </div>
            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #0284c7', border: '1px solid #e2e8f0' }}>
              <strong>6. Presentation (Sunum):</strong> SSL/TLS, JPEG, ASCII, Veri Şifreleme & Sıkıştırma
            </div>
            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #7c3aed', border: '1px solid #e2e8f0' }}>
              <strong>5. Session (Oturum):</strong> NetBIOS, PPTP, RPC, Oturum Yönetimi
            </div>
            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #059669', border: '1px solid #e2e8f0' }}>
              <strong>4. Transport (Taşıma):</strong> TCP (Güvenilir/Sıralı), UDP (Hızlı/Bağlantısız), Port Adresleme
            </div>
            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #d97706', border: '1px solid #e2e8f0' }}>
              <strong>3. Network (Ağ):</strong> IP (IPv4/IPv6), ICMP (Ping), Router, Yönlendirme (Routing)
            </div>
            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #dc2626', border: '1px solid #e2e8f0' }}>
              <strong>2. Data Link (Veri Bağlantı):</strong> Ethernet, MAC Adresi, Switch, Frame paketleri
            </div>
            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #64748b', border: '1px solid #e2e8f0' }}>
              <strong>1. Physical (Fiziksel):</strong> Kablolar, Fiber, Hub, Sinyaller ve Bit Akışı (0/1)
            </div>
          </div>
        )}

        {/* Tab 9: SOLID */}
        {activeTab === 'solid' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3 style={{ fontSize: '1.1rem' }}>SOLID Prensipleri Özet Kartları</h3>
            <div style={{ background: '#f5f3ff', padding: '14px', borderRadius: '8px', border: '1px solid #ddd6fe' }}>
              <strong style={{ color: '#6d28d9' }}>S — Single Responsibility Principle (Tek Sorumluluk):</strong> Bir sınıfın veya metodun değiştirmek için sadece TEK bir nedeni olmalıdır.
            </div>
            <div style={{ background: '#e0f2fe', padding: '14px', borderRadius: '8px', border: '1px solid #bae6fd' }}>
              <strong style={{ color: '#0369a1' }}>O — Open / Closed Principle (Açık/Kapalı):</strong> Yazılım varlıkları geliştirmeye AÇIK, kaynak kodunu değiştirmeye KAPALI olmalıdır.
            </div>
            <div style={{ background: '#ecfdf5', padding: '14px', borderRadius: '8px', border: '1px solid #a7f3d0' }}>
              <strong style={{ color: '#047857' }}>L — Liskov Substitution Principle (İkame):</strong> Alt sınıflar üst sınıfın davranışını bozmadan ikame edebilmelidir.
            </div>
            <div style={{ background: '#fffbeb', padding: '14px', borderRadius: '8px', border: '1px solid #fde68a' }}>
              <strong style={{ color: '#b45309' }}>I — Interface Segregation Principle (Arayüz Ayrımı):</strong> İstemciler kullanmadıkları metodlara zorlanmamalıdır.
            </div>
            <div style={{ background: '#fef2f2', padding: '14px', borderRadius: '8px', border: '1px solid #fecaca' }}>
              <strong style={{ color: '#b91c1c' }}>D — Dependency Inversion Principle (Bağımlılık Tersine Çevrilmesi):</strong> Modüller soyutlamalara (Abstraction) bağımlı olmalıdır.
            </div>
          </div>
        )}

        {/* Tab 10: Git */}
        {activeTab === 'git' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>En Sık Sorulan Git Komutları & Kullanımları</h3>
            <table className="cheatsheet-table">
              <thead>
                <tr>
                  <th>Komut</th>
                  <th>Açıklama / Mülakat İpucu</th>
                </tr>
              </thead>
              <tbody>
                {CHEATSHEETS.gitCheatsheet.map((row, i) => (
                  <tr key={i}>
                    <td><strong style={{ fontFamily: 'var(--font-code)', color: '#4f46e5' }}>{row.command}</strong></td>
                    <td>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 11: AI / ML Metrics */}
        {activeTab === 'ai' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Makine Öğrenmesi Başarım Metrikleri & Formüller</h3>
            <div style={{ background: '#fafafa', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong>Precision (Kesinlik):</strong> <code>TP / (TP + FP)</code> ➔ Modelin pozitif dediği tahminlerin ne kadarı doğru?
            </div>
            <div style={{ background: '#fafafa', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong>Recall (Duyarlılık):</strong> <code>TP / (TP + FN)</code> ➔ Gerçek pozitiflerin ne kadarını yakalayabildik?
            </div>
            <div style={{ background: '#fafafa', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong>F1-Score:</strong> <code>2 * (Precision * Recall) / (Precision + Recall)</code> ➔ Precision ve Recall arasındaki harmonik denge.
            </div>
            <div style={{ background: '#fafafa', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong>Accuracy (Doğruluk):</strong> <code>(TP + TN) / (TP + TN + FP + FN)</code> ➔ Dengeli olmayan veri setlerinde yanıltıcı olabilir.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
