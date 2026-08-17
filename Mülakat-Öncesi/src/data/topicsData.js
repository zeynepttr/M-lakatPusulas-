export const CATEGORIES = [
  { id: 'ds', name: '1. Veri Yapıları — Data Structures', color: '#0284c7' },
  { id: 'algo', name: '2. Algoritmalar — Algorithms', color: '#7c3aed' },
  { id: 'os', name: '3. İşletim Sistemleri — Operating Systems', color: '#dc2626' },
  { id: 'network', name: '4. Bilgisayar Ağları — Computer Networks', color: '#0284c7' },
  { id: 'oop', name: '5. OOP & Design Principles', color: '#059669' },
  { id: 'db', name: '6. Database / DBMS', color: '#d97706' },
  { id: 'ai', name: '7. AI / ML Fundamentals', color: '#9333ea' },
  { id: 'se', name: '8. Software Engineering / Git / System Design', color: '#e11d48' }
];

export const SYLLABUS = [
  // ==========================================
  // 1. VERİ YAPILARI — DATA STRUCTURES
  // ==========================================
  {
    category: 'ds',
    group: 'Arrays (Diziler)',
    items: [
      { id: 'ds-arr-1', title: 'Array mantığı', detail: 'Bellekte ardışık (contiguous) lokasyonlarda aynı tür verilerin saklanması.' },
      { id: 'ds-arr-2', title: 'Indexing', detail: 'İndeks ile adrese doğrudan O(1) zamanda erişim.' },
      { id: 'ds-arr-3', title: 'Traversal', detail: 'Dizinin tüm elemanları üzerinde döngü ile geçme O(N).' },
      { id: 'ds-arr-4', title: 'Insertion / Deletion', detail: 'Araya eleman ekleme ve silme kaydırma (shifting) gerektirdiği için O(N).' },
      { id: 'ds-arr-5', title: 'Static vs Dynamic Array', detail: 'Static boyutu sabit; Dynamic (ArrayList/Vector) doldukça 2 katına genişler.' },
      { id: 'ds-arr-6', title: 'Array Complexity', detail: 'Access: O(1), Search: O(N), Insert/Delete: O(N).' }
    ]
  },
  {
    category: 'ds',
    group: 'Linked Lists (Bağlı Listeler)',
    items: [
      { id: 'ds-ll-1', title: 'Node', detail: 'Veri ve sonraki düğümün adresini (pointer/reference) tutan temel birim.' },
      { id: 'ds-ll-2', title: 'Singly Linked List', detail: 'Her düğümün sadece sonraki (next) düğümü gösterdiği liste.' },
      { id: 'ds-ll-3', title: 'Doubly Linked List', detail: 'Her düğümün hem sonraki (next) hem önceki (prev) düğümü gösterdiği liste.' },
      { id: 'ds-ll-4', title: 'Traversal', detail: 'Head düğümünden başlayarak null olana kadar listede ilerleme O(N).' },
      { id: 'ds-ll-5', title: 'Insertion / Deletion', detail: 'Düğüm referansı biliniyorsa O(1); düğüm aranacaksa O(N).' },
      { id: 'ds-ll-6', title: 'Reverse Linked List', detail: 'Pointer yönlerini tersine çevirme (Iterative & Recursive O(N)).' },
      { id: 'ds-ll-7', title: 'Fast & Slow Pointer', detail: 'Floyd\'s Cycle Detection ile bağlı listede döngü tespiti.' }
    ]
  },
  {
    category: 'ds',
    group: 'Stack (Yığın)',
    items: [
      { id: 'ds-st-1', title: 'LIFO', detail: 'Last In First Out (Son Giren İlk Çıkar) prensibi.' },
      { id: 'ds-st-2', title: 'Push / Pop / Peek', detail: 'Eleman ekleme (Push), çıkarma (Pop), en üsttekine bakma (Peek) O(1).' },
      { id: 'ds-st-3', title: 'Stack Implementation', detail: 'Array veya LinkedList kullanılarak gerçeklenebilir.' },
      { id: 'ds-st-4', title: 'Stack kullanım alanları', detail: 'Undo/Redo işlemleri, Parantez Eşleme, Rekürsiyon Call Stack.' },
      { id: 'ds-st-5', title: 'Parentheses Matching', detail: 'Dengeli parantez kontrolünde açılan parantezleri yığına atma mantığı.' },
      { id: 'ds-st-6', title: 'Call Stack', detail: 'İşletim sisteminde ve dillerde fonksiyon çağrılarının ve lokal değişkenlerin tutulduğu alan.' }
    ]
  },
  {
    category: 'ds',
    group: 'Queue (Kuyruk)',
    items: [
      { id: 'ds-qu-1', title: 'FIFO', detail: 'First In First Out (İlk Giren İlk Çıkar) prensibi.' },
      { id: 'ds-qu-2', title: 'Enqueue / Dequeue', detail: 'Kuyruğun sonuna eleman ekleme (Enqueue) ve başından çıkarma (Dequeue) O(1).' },
      { id: 'ds-qu-3', title: 'Queue Implementation', detail: 'LinkedList veya dairesel dizi ile gerçeklenir.' },
      { id: 'ds-qu-4', title: 'Circular Queue', detail: 'Dizideki boş alanları başa dönerek verimli kullanan kuyruk.' },
      { id: 'ds-qu-5', title: 'Deque (Double-Ended Queue)', detail: 'Her iki uçtan da ekleme ve silme yapılabilen çift yönlü kuyruk.' },
      { id: 'ds-qu-6', title: 'Queue kullanım alanları', detail: 'BFS gezintisi, Yazıcı kuyrukları, Mesaj Kuyrukları (Kafka/RabbitMQ).' }
    ]
  },
  {
    category: 'ds',
    group: 'Hash Table (Hash Tablosu)',
    items: [
      { id: 'ds-ht-1', title: 'Hash Function', detail: 'Anahtarı (Key) sabit boyutlu bir indeks değerine haritalayan fonksiyon.' },
      { id: 'ds-ht-2', title: 'Key / Value', detail: 'Anahtar-Değer çifti saklama modeli.' },
      { id: 'ds-ht-3', title: 'Collision', detail: 'İki farklı anahtarın aynı hash indeksini üretmesi durumu.' },
      { id: 'ds-ht-4', title: 'Chaining', detail: 'Çakışan elemanları aynı bucket içindeki bir bağlı listede tutma.' },
      { id: 'ds-ht-5', title: 'Open Addressing', detail: 'Çakışma olunca boş bir indeks arama (Linear Probing, Quadratic Probing).' },
      { id: 'ds-ht-6', title: 'Load Factor', detail: 'Doluluk oranı (Eleman Sayısı / Tablo Boyutu).' },
      { id: 'ds-ht-7', title: 'Rehashing', detail: 'Load factor aşılınca tablo boyutunu iki katına çıkarıp elemanları yeniden dağıtma.' },
      { id: 'ds-ht-8', title: 'Average / Worst-case Complexity', detail: 'Average Case: O(1), Worst Case (tüm elemanlar çakışırsa): O(N).' }
    ]
  },
  {
    category: 'ds',
    group: 'Trees (Ağaçlar) & BST',
    items: [
      { id: 'ds-tr-1', title: 'Tree Terminology', detail: 'Root, Leaf, Parent, Child, Subtree, Depth, Height kavramları.' },
      { id: 'ds-tr-2', title: 'Binary Tree', detail: 'Her düğümün en fazla 2 çocuk düğümüne sahip olduğu ağaç.' },
      { id: 'ds-tr-3', title: 'Full / Complete / Perfect Tree', detail: 'Full: Her düğüm 0 veya 2 çocuklu; Complete: Son seviye hariç tam dolu; Perfect: Tüm seviyeler tam dolu.' },
      { id: 'ds-tr-4', title: 'Height / Depth', detail: 'Height: Kökten en uzak yaprağa yol; Depth: Kökten ilgili düğüme uzaklık.' },
      { id: 'ds-tr-5', title: 'Preorder Traversal', detail: 'Kök -> Sol -> Sağ sıralaması.' },
      { id: 'ds-tr-6', title: 'Inorder Traversal', detail: 'Sol -> Kök -> Sağ sıralaması (BST\'de küçükten büyüğe sıralar).' },
      { id: 'ds-tr-7', title: 'Postorder Traversal', detail: 'Sol -> Sağ -> Kök sıralaması.' },
      { id: 'ds-tr-8', title: 'Level Order Traversal', detail: 'Katman katman yukarıdan aşağıya gezinti (BFS ile yapılır).' },
      { id: 'ds-tr-9', title: 'BST (Binary Search Tree)', detail: 'Sol çocuk < Kök < Sağ çocuk kuralına uyan arama ağacı.' },
      { id: 'ds-tr-10', title: 'BST Search / Insert / Delete', detail: 'Ortalama zaman karmaşıklığı O(log N), dengesiz ağaçta O(N).' },
      { id: 'ds-tr-11', title: 'Balanced Tree', detail: 'Yüksekliği O(log N) seviyesinde tutulan ağaç yapısı.' },
      { id: 'ds-tr-12', title: 'AVL Tree — temel', detail: 'Sol ve sağ alt ağaç yükseklik farkı en fazla 1 olan kendini dengeleyen ağaç.' }
    ]
  },
  {
    category: 'ds',
    group: 'Graphs (Graflar)',
    items: [
      { id: 'ds-gr-1', title: 'Vertex / Edge', detail: 'Vertex: Düğüm (Köşe), Edge: Düğümler arası bağlantı (Kenar).' },
      { id: 'ds-gr-2', title: 'Directed / Undirected', detail: 'Directed: Tek yönlü kenarlar; Undirected: Çift yönlü kenarlar.' },
      { id: 'ds-gr-3', title: 'Weighted / Unweighted', detail: 'Weighted: Kenarlarda ağırlık/maliyet var; Unweighted: Ağırlıksız.' },
      { id: 'ds-gr-4', title: 'Adjacency List', detail: 'Her düğümün komşularını liste olarak tutma (Seyrek graflarda O(V+E) bellek).' },
      { id: 'ds-gr-5', title: 'Adjacency Matrix', detail: 'VxV boyutunda 2D matris ile bağlantıları tutma (O(V^2) bellek).' },
      { id: 'ds-gr-6', title: 'BFS (Breadth-First Search)', detail: 'Genişlik öncelikli gezinti (Kuyruk kullanılır, ağırlıksız en kısa yol).' },
      { id: 'ds-gr-7', title: 'DFS (Depth-First Search)', detail: 'Derinlik öncelikli gezinti (Rekürsiyon/Yığın kullanılır).' },
      { id: 'ds-gr-8', title: 'Cycle', detail: 'Bir düğümden başlayıp aynı düğüme geri dönen kapalı yol.' },
      { id: 'ds-gr-9', title: 'Connected Components', detail: 'Birbiriyle bağlantılı düğüm kümeleri.' }
    ]
  },
  {
    category: 'ds',
    group: 'Heap / Priority Queue',
    items: [
      { id: 'ds-hp-1', title: 'Min Heap', detail: 'Kök düğümün her zaman en küçük eleman olduğu ikili ağaç.' },
      { id: 'ds-hp-2', title: 'Max Heap', detail: 'Kök düğümün her zaman en büyük eleman olduğu ikili ağaç.' },
      { id: 'ds-hp-3', title: 'Heap Property', detail: 'Ebeveyn düğümün çocuk düğümlerden büyük (Max) veya küçük (Min) olması kuralı.' },
      { id: 'ds-hp-4', title: 'Insert', detail: 'En sona eleman ekleyip yukarı doğru kaydırma (Bubble-up) O(log N).' },
      { id: 'ds-hp-5', title: 'Extract', detail: 'Kök elemanı çıkarıp en son elemanı köğe taşıyarak aşağı kaydırma (Bubble-down) O(log N).' },
      { id: 'ds-hp-6', title: 'Peek', detail: 'Kök elemanı çıkarmadan değerini okuma O(1).' },
      { id: 'ds-hp-7', title: 'Heapify', detail: 'Kuralı bozulan bir düğümü doğru konumuna kaydırma işlemi.' },
      { id: 'ds-hp-8', title: 'Build Heap', detail: 'Diziden sıfırdan Heap yapısı inşa etme O(N).' },
      { id: 'ds-hp-9', title: 'Priority Queue', detail: 'Elemanların öncelik sırasına göre işlendiği soyut veri yapısı.' }
    ]
  },
  {
    category: 'ds',
    group: 'Trie (Prefix Tree)',
    items: [
      { id: 'ds-tr-13', title: 'Trie mantığı', detail: 'Kelimelerin harf harf ağaç şeklinde saklandığı ön ek ağacı.' },
      { id: 'ds-tr-14', title: 'Insert', detail: 'Kelimeyi harf harf düğümler ekleyerek Trie içine yazma O(L).' },
      { id: 'ds-tr-15', title: 'Search', detail: 'Kelimenin Trie içinde tam olarak var olup olmadığını arama O(L).' },
      { id: 'ds-tr-16', title: 'Prefix Search', detail: 'Verilen ön ek (prefix) ile başlayan kelime var mı kontrolü O(L).' },
      { id: 'ds-tr-17', title: 'Autocomplete kullanım alanı', detail: 'Arama motorları kelime tamamlama sistemleri.' }
    ]
  },

  // ==========================================
  // 2. ALGORİTMALAR — ALGORITHMS
  // ==========================================
  {
    category: 'algo',
    group: 'Complexity Analysis (Karmaşıklık Analizi)',
    items: [
      { id: 'al-cx-1', title: 'Time Complexity', detail: 'Girdi boyutu N büyüdükçe çalışma süresinin artış oranı.' },
      { id: 'al-cx-2', title: 'Space Complexity', detail: 'Algoritmanın kullandığı ekstra bellek miktarı.' },
      { id: 'al-cx-3', title: 'Big-O', detail: 'Asemptotik üst sınır gösterimi.' },
      { id: 'al-cx-4', title: 'Best / Average / Worst Case', detail: 'En iyi, ortalama ve en kötü durum senaryoları.' },
      { id: 'al-cx-5', title: 'O(1)', detail: 'Sabit zaman karmaşıklığı.' },
      { id: 'al-cx-6', title: 'O(log n)', detail: 'Logaritmik karmaşıklık (girdi her adımda yarıya iner).' },
      { id: 'al-cx-7', title: 'O(n)', detail: 'Doğrusal karmaşıklık.' },
      { id: 'al-cx-8', title: 'O(n log n)', detail: 'Linearitmik karmaşıklık (verimli sıralama algoritmaları).' },
      { id: 'al-cx-9', title: 'O(n²)', detail: 'Karesel karmaşıklık (iç içe iki döngü).' },
      { id: 'al-cx-10', title: 'Recursive Complexity', detail: 'Rekürsif ağaç derinliği ve çağrı sayısı analizi.' }
    ]
  },
  {
    category: 'algo',
    group: 'Searching (Arama Algoritmaları)',
    items: [
      { id: 'al-sc-1', title: 'Linear Search', detail: 'Diziyi baştan sona sırayla tarama O(N).' },
      { id: 'al-sc-2', title: 'Binary Search', detail: 'Sıralı dizide aralığı her adımda ikiye bölerek arama.' },
      { id: 'al-sc-3', title: 'Binary Search Complexity', detail: 'Zaman: O(log N), Alan: O(1).' },
      { id: 'al-sc-4', title: 'Binary Search koşulları', detail: 'Dizinin mutlaka SIRALI olması şarttır.' }
    ]
  },
  {
    category: 'algo',
    group: 'Sorting (Sıralama Algoritmaları)',
    items: [
      { id: 'al-so-1', title: 'Bubble Sort', detail: 'Yan yana elemanları karşılaştırıp yer değiştirme O(N^2).' },
      { id: 'al-so-2', title: 'Selection Sort', detail: 'En küçük elemanı bulup başa taşıma O(N^2).' },
      { id: 'al-so-3', title: 'Insertion Sort', detail: 'Elemanları tek tek doğru konumuna yerleştirme O(N^2), sıralıya yakın dizide O(N).' },
      { id: 'al-so-4', title: 'Merge Sort', detail: 'Böl ve yönet mantığıyla diziyi bölüp sıralı birleştirme O(N log N) Stable.' },
      { id: 'al-so-5', title: 'Quick Sort', detail: 'Pivot seçip küçükleri sola büyükleri sağa toplama Avg O(N log N).' },
      { id: 'al-so-6', title: 'Heap Sort', detail: 'Heap yapısı kullanarak yerinde (in-place) sıralama O(N log N).' },
      { id: 'al-so-7', title: 'Sorting Complexity Comparison', detail: 'Merge/Heap Sort O(N log N); Bubble/Selection/Insertion O(N^2).' },
      { id: 'al-so-8', title: 'Stable vs Unstable', detail: 'Kararlı algoritmalar aynı değerli elemanların orijinal sırasını bozmaz.' }
    ]
  },
  {
    category: 'algo',
    group: 'Problem-Solving Techniques (Problem Çözme Teknikleri)',
    items: [
      { id: 'al-ps-1', title: 'Brute Force', detail: 'Tüm olası çözümleri kaba kuvvetle deneme yöntemi.' },
      { id: 'al-ps-2', title: 'Two Pointer', detail: 'Dizinin iki ucundan veya aynı yönde iki işaretçi ile ilerleme.' },
      { id: 'al-ps-3', title: 'Sliding Window', detail: 'Sabit veya dinamik pencereyi dizi üzerinde kaydırarak O(N) çözüm.' },
      { id: 'al-ps-4', title: 'Prefix Sum', detail: 'Önceden birikimli toplam dizisi hazırlayarak aralık sorgusunu O(1) yapma.' },
      { id: 'al-ps-5', title: 'Fast & Slow Pointer', detail: 'Biri hızlı biri yavaş iki işaretçi ile döngü veya orta nokta bulma.' },
      { id: 'al-ps-6', title: 'Divide & Conquer', detail: 'Problemi küçük alt problemlere bölüp çözümleri birleştirme.' }
    ]
  },
  {
    category: 'algo',
    group: 'Recursion (Özyineleme)',
    items: [
      { id: 'al-rc-1', title: 'Base Case', detail: 'Rekürsiyonun durma koşulu.' },
      { id: 'al-rc-2', title: 'Recursive Case', detail: 'Fonksiyonun kendisini daha küçük girdi ile tekrar çağırdığı adım.' },
      { id: 'al-rc-3', title: 'Call Stack', detail: 'Rekürsif çağrıların işletim sistemi belleğinde tutulduğu yığın.' },
      { id: 'al-rc-4', title: 'Recursion Complexity', detail: 'Ağaç derinliği x her adımdaki işlem miktarı.' }
    ]
  },
  {
    category: 'algo',
    group: 'Greedy (Açgözlü Algoritmalar)',
    items: [
      { id: 'al-gr-1', title: 'Greedy Approach', detail: 'Her adımda lokal olarak en iyi görünen kararı verme.' },
      { id: 'al-gr-2', title: 'Greedy Choice', detail: 'Lokal optimal kararların global optimale ulaştırması özelliği.' },
      { id: 'al-gr-3', title: 'Activity Selection', detail: 'Bitiş zamanına göre sıralayıp en çok aktivite seçme problemi.' },
      { id: 'al-gr-4', title: 'Fractional Knapsack', detail: 'Eşyaların bölünebildiği sırt çantası problemi (Greedy ile çözülür).' },
      { id: 'al-gr-5', title: 'Greedy vs DP', detail: 'Greedy tek yol seçer geri dönmez; DP tüm yolları hesaba katar.' }
    ]
  },
  {
    category: 'algo',
    group: 'Dynamic Programming (Dinamik Programlama)',
    items: [
      { id: 'al-dp-1', title: 'DP mantığı', detail: 'Tekrarlayan alt problemlerin sonuçlarını saklayıp tekrar kullanma.' },
      { id: 'al-dp-2', title: 'Overlapping Subproblems', detail: 'Aynı alt problemlerin defalarca tekrar hesaplanması durumu.' },
      { id: 'al-dp-3', title: 'Optimal Substructure', detail: 'Ana problemin optimal çözümünün alt problemlerin optimal çözümlerinden oluşması.' },
      { id: 'al-dp-4', title: 'Memoization', detail: 'Top-down (Yukarıdan aşağıya) rekürsif sonuçları tabloya kaydetme.' },
      { id: 'al-dp-5', title: 'Tabulation', detail: 'Bottom-up (Aşağıdan yukarıya) dikey tablo doldurarak ilerleme.' },
      { id: 'al-dp-6', title: 'State', detail: 'Alt problemi tanımlayan değişkenler kümesi (ör: dp[i][j]).' },
      { id: 'al-dp-7', title: 'Transition', detail: 'Bir durumdan diğerine geçiş formülü (Recurrence relation).' },
      { id: 'al-dp-8', title: 'Base Case', detail: 'Tablonun veya rekürsiyonun başlangıç değerleri.' },
      { id: 'al-dp-9', title: '0/1 Knapsack', detail: 'Eşyaların ya alınıp ya alınmadığı klasik DP problemi.' },
      { id: 'al-dp-10', title: 'Coin Change', detail: 'Minimum madeni para ile hedef tutarı oluşturma problemi.' },
      { id: 'al-dp-11', title: 'LCS', detail: 'Longest Common Subsequence (En Uzun Ortak Alt Dizilim).' }
    ]
  },
  {
    category: 'algo',
    group: 'Backtracking (Geri İzleme)',
    items: [
      { id: 'al-bk-1', title: 'Backtracking mantığı', detail: 'Karar ağacında derine inip uygunsuz durumda geri dönme (Undo).' },
      { id: 'al-bk-2', title: 'State / Choice / Constraint', detail: 'Durum, Yapılabilecek Seçim ve Kısıtlar mantığı.' },
      { id: 'al-bk-3', title: 'Permutations', detail: 'Dizideki elemanların tüm olası sıralanışları.' },
      { id: 'al-bk-4', title: 'Combinations', detail: 'Sıra gözetmeksizin belirli boyuttaki alt kümeler.' },
      { id: 'al-bk-5', title: 'Subsets', detail: 'Kümelerin tüm olası alt kümelerini (Power set) türetme.' }
    ]
  },
  {
    category: 'algo',
    group: 'Graph Algorithms (Graf Algoritmaları)',
    items: [
      { id: 'al-ga-1', title: 'BFS', detail: 'Kuyruk ile seviye seviye gezinti.' },
      { id: 'al-ga-2', title: 'DFS', detail: 'Yığın/Rekürsiyon ile derine inen gezinti.' },
      { id: 'al-ga-3', title: 'Cycle Detection', detail: 'Yönlü veya yönsüz grafta döngü kontrolü.' },
      { id: 'al-ga-4', title: 'Connected Components', detail: 'Bağlantılı bileşen sayısını bulma.' },
      { id: 'al-ga-5', title: 'Dijkstra', detail: 'Pozitif ağırlıklı grafta tek kaynaktan en kısa yol O((V+E) log V).' },
      { id: 'al-ga-6', title: 'Topological Sort', detail: 'DAG üzerindeki düğümlerin bağımlılık sırasına göre dizilimi.' },
      { id: 'al-ga-7', title: 'Minimum Spanning Tree', detail: 'Tüm düğümleri en küçük toplam kenar ağırlığıyla bağlayan ağaç.' },
      { id: 'al-ga-8', title: 'Prim', detail: 'Düğümler üzerinden büyüyen MST algoritması.' },
      { id: 'al-ga-9', title: 'Kruskal', detail: 'Kenarları ağırlığa göre sıralayıp Union-Find ile birleştiren MST algoritması.' },
      { id: 'al-ga-10', title: 'Union-Find', detail: 'Ayrık kümeleri birleştirme ve döngü kontrolü yapabilen veri yapısı (Disjoint Set).' }
    ]
  },

  // ==========================================
  // 3. İŞLETİM SİSTEMLERİ — OPERATING SYSTEMS
  // ==========================================
  {
    category: 'os',
    group: 'Process & Thread',
    items: [
      { id: 'os-pt-1', title: 'Process', detail: 'Çalışmakta olan bağımsız program birimi.' },
      { id: 'os-pt-2', title: 'Thread', detail: 'Process içinde kaynakları paylaşan hafif iş parçacığı.' },
      { id: 'os-pt-3', title: 'Process vs Thread', detail: 'Process kendi bellek alanına sahip; Thread\'ler Heap alanını paylaşır.' },
      { id: 'os-pt-4', title: 'Process States', detail: 'New, Ready, Running, Waiting, Terminated durumları.' },
      { id: 'os-pt-5', title: 'Context Switching', detail: 'İşlemcinin bir süreçten diğerine geçerken durum kaydetme maliyeti.' },
      { id: 'os-pt-6', title: 'Multithreading', detail: 'Aynı süreçte birden fazla thread\'in eşzamanlı çalışması.' },
      { id: 'os-pt-7', title: 'Concurrency vs Parallelism', detail: 'Concurrency: İşleri üst üste yönetmek; Parallelism: Birden fazla çekirdekte aynı anda çalıştırmak.' }
    ]
  },
  {
    category: 'os',
    group: 'CPU Scheduling (CPU Zamanlama)',
    items: [
      { id: 'os-cs-1', title: 'FCFS', detail: 'First-Come First-Served (İlk gelen ilk işlenir).' },
      { id: 'os-cs-2', title: 'SJF', detail: 'Shortest Job First (En kısa süren iş önce işlenir).' },
      { id: 'os-cs-3', title: 'Round Robin', detail: 'Süreçlere adil zaman dilimi (Time Quantum) vererek dönme.' },
      { id: 'os-cs-4', title: 'Priority Scheduling', detail: 'Öncelik değerine göre zamanlama (Açlığı önlemek için Aging uygulanır).' },
      { id: 'os-cs-5', title: 'Preemptive vs Non-preemptive', detail: 'Preemptive işi yarıda kesebilir; Non-preemptive iş bitene kadar kesmez.' },
      { id: 'os-cs-6', title: 'Waiting Time', detail: 'Sürecin hazır kuyruğunda beklediği toplam süre.' },
      { id: 'os-cs-7', title: 'Turnaround Time', detail: 'Sürecin sisteme girmesi ile tamamlanması arasında geçen süre.' },
      { id: 'os-cs-8', title: 'Response Time', detail: 'İlk tepkinin verilmesi arasında geçen süre.' }
    ]
  },
  {
    category: 'os',
    group: 'Deadlock (Kilitlenme)',
    items: [
      { id: 'os-dl-1', title: 'Deadlock', detail: 'Süreçlerin karşılıklı kaynak kilitleri yüzünden tıkanması.' },
      { id: 'os-dl-2', title: 'Mutual Exclusion', detail: 'Kaynağın aynı anda tek süreççe kullanılması.' },
      { id: 'os-dl-3', title: 'Hold and Wait', detail: 'Sürecin elindekini tutarken yenisini beklemesi.' },
      { id: 'os-dl-4', title: 'No Preemption', detail: 'Kaynakların zorla geri alınamaması.' },
      { id: 'os-dl-5', title: 'Circular Wait', detail: 'Döngüsel bekleme zincirinin oluşması.' },
      { id: 'os-dl-6', title: 'Deadlock Prevention', detail: '4 Coffman şartından en az birini statik olarak engelleme.' },
      { id: 'os-dl-7', title: 'Deadlock Avoidance', detail: 'Banker\'s Algorithm ile dinamik olarak güvenli durumda kalma.' },
      { id: 'os-dl-8', title: 'Deadlock Detection', detail: 'Kilitlenmeyi tespit edip süreci sonlandırma/kurtarma.' }
    ]
  },
  {
    category: 'os',
    group: 'Memory Management (Bellek Yönetimi)',
    items: [
      { id: 'os-mm-1', title: 'Stack vs Heap', detail: 'Stack otomatik/hızlı/sınırlı; Heap dinamik/manuel/büyük bellek.' },
      { id: 'os-mm-2', title: 'Virtual Memory', detail: 'Fiziksel RAM\'den büyük bellek illüzyonu sağlama.' },
      { id: 'os-mm-3', title: 'Paging', detail: 'Belleğin sabit boyutlu sayfalara (Page) bölünmesi.' },
      { id: 'os-mm-4', title: 'Page', detail: 'Sanal belleğin sabit boyutlu bloğu.' },
      { id: 'os-mm-5', title: 'Frame', detail: 'Fiziksel RAM\'in sabit boyutlu bloğu.' },
      { id: 'os-mm-6', title: 'Page Table', detail: 'Sanal sayfa adreslerini fiziksel frame adreslerine eşleyen tablo.' },
      { id: 'os-mm-7', title: 'Page Fault', detail: 'İstenen sayfanın RAM\'de olmayıp diskten yüklenmesi kesintisi.' },
      { id: 'os-mm-8', title: 'TLB', detail: 'Translation Lookaside Buffer (Adres dönüşüm hızlı önbelleği).' },
      { id: 'os-mm-9', title: 'Demand Paging', detail: 'Sayfanın sadece ihtiyaç anında RAM\'e getirilmesi.' }
    ]
  },
  {
    category: 'os',
    group: 'System Calls (Sistem Çağrıları)',
    items: [
      { id: 'os-sc-1', title: 'System Call', detail: 'Programın işletim sistemi çekirdeğinden hizmet istemesi.' },
      { id: 'os-sc-2', title: 'User Mode vs Kernel Mode', detail: 'User Mode kısıtlı yetki; Kernel Mode tam donanım erişimi.' },
      { id: 'os-sc-3', title: 'Process-related System Calls', detail: 'fork(), exec(), exit(), wait().' },
      { id: 'os-sc-4', title: 'File-related System Calls', detail: 'open(), read(), write(), close().' }
    ]
  },
  {
    category: 'os',
    group: 'IPC & Synchronization',
    items: [
      { id: 'os-ip-1', title: 'IPC', detail: 'Inter-Process Communication (Süreçler arası iletişim).' },
      { id: 'os-ip-2', title: 'Pipe', detail: 'Akraba süreçler arası tek yönlü veri kanalı.' },
      { id: 'os-ip-3', title: 'Shared Memory', detail: 'En hızlı IPC yöntemi (ortak bellek alanı).' },
      { id: 'os-ip-4', title: 'Message Queue', detail: 'Mesaj tabanlı sıralı iletişim kanalı.' },
      { id: 'os-ip-5', title: 'Socket', detail: 'Ağ üzerinden veya yerel süreçler arası iletişim ucu.' },
      { id: 'os-ip-6', title: 'Synchronization', detail: 'Kritik bölgelere erişimi senkronize etme.' },
      { id: 'os-ip-7', title: 'Mutex', detail: 'Mutual Exclusion Lock (Tek kilitli sahiplik).' },
      { id: 'os-ip-8', title: 'Semaphore', detail: 'Sayaçlı kaynak erişim kontrol mekanizması (Counting/Binary).' }
    ]
  },

  // ==========================================
  // 4. BİLGİSAYAR AĞLARI — COMPUTER NETWORKS
  // ==========================================
  {
    category: 'network',
    group: 'Network Models (Ağ Modelleri)',
    items: [
      { id: 'ne-mo-1', title: 'OSI Model', detail: '7 katmanlı teorik ağ mimarisi.' },
      { id: 'ne-mo-2', title: 'TCP/IP Model', detail: '4 katmanlı pratik ağ mimarisi.' },
      { id: 'ne-mo-3', title: 'Katmanların görevleri', detail: 'Fiziksel, Veri Bağlantı, Ağ, Taşıma, Oturum, Sunum, Uygulama.' },
      { id: 'ne-mo-4', title: 'Encapsulation / Decapsulation', detail: 'Veriye katmanlarda başlık (header) ekleme ve sökme işlemi.' }
    ]
  },
  {
    category: 'network',
    group: 'Network Fundamentals (Ağ Temelleri)',
    items: [
      { id: 'ne-fn-1', title: 'IP Address', detail: 'Ağdaki cihazın mantıksal kimlik adresi.' },
      { id: 'ne-fn-2', title: 'IPv4 vs IPv6', detail: 'IPv4 32-bit (4 milyar adres); IPv6 128-bit (sınırsız adres).' },
      { id: 'ne-fn-3', title: 'Public vs Private IP', detail: 'Public internette yönlendirilebilir; Private yerel ağ içindedir.' },
      { id: 'ne-fn-4', title: 'MAC Address', detail: 'Ağ kartının donanımsal benzersiz adresi (Layer 2).' },
      { id: 'ne-fn-5', title: 'Subnetting — temel', detail: 'Ağı daha küçük alt ağlara bölme işlemi.' },
      { id: 'ne-fn-6', title: 'Port', detail: 'Sunucudaki ilgili servise ulaşım kapısı (Layer 4).' },
      { id: 'ne-fn-7', title: 'Router', detail: 'Farklı ağlar arasında paket yönlendiren cihaz (Layer 3).' },
      { id: 'ne-fn-8', title: 'Switch', detail: 'Aynı yerel ağ içindeki cihazları bağlayan cihaz (Layer 2).' }
    ]
  },
  {
    category: 'network',
    group: 'HTTP / HTTPS',
    items: [
      { id: 'ne-ht-1', title: 'HTTP', detail: 'Hypertext Transfer Protocol (Web veri iletim protokolü).' },
      { id: 'ne-ht-2', title: 'Request / Response', detail: 'İstemci isteği ve sunucu yanıtı yapısı.' },
      { id: 'ne-ht-3', title: 'GET', detail: 'Veri okuma / getirme isteği.' },
      { id: 'ne-ht-4', title: 'POST', detail: 'Yeni kaynak oluşturma isteği.' },
      { id: 'ne-ht-5', title: 'PUT', detail: 'Kaynağı tamamen güncelleme / yerine koyma isteği.' },
      { id: 'ne-ht-6', title: 'PATCH', detail: 'Kaynağı kısmi güncelleme isteği.' },
      { id: 'ne-ht-7', title: 'DELETE', detail: 'Kaynağı silme isteği.' },
      { id: 'ne-ht-8', title: 'HTTP Status Codes', detail: 'Yanıt durum kodları.' },
      { id: 'ne-ht-9', title: '2xx', detail: 'Başarılı yanıtlar (200 OK, 201 Created).' },
      { id: 'ne-ht-10', title: '3xx', detail: 'Yönlendirme yanıtları (301 Moved Permanently, 304 Not Modified).' },
      { id: 'ne-ht-11', title: '4xx', detail: 'İstemci hataları (400 Bad Request, 401 Unauthorized, 404 Not Found).' },
      { id: 'ne-ht-12', title: '5xx', detail: 'Sunucu hataları (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable).' },
      { id: 'ne-ht-13', title: 'HTTP vs HTTPS', detail: 'HTTPS = HTTP + TLS/SSL şifreleme katmanı (Port 443).' }
    ]
  },
  {
    category: 'network',
    group: 'TCP / UDP',
    items: [
      { id: 'ne-tu-1', title: 'TCP', detail: 'Transmission Control Protocol (Bağlantılı, güvenilir, sıralı).' },
      { id: 'ne-tu-2', title: 'UDP', detail: 'User Datagram Protocol (Bağlantısız, hızlı, hafif).' },
      { id: 'ne-tu-3', title: 'TCP vs UDP', detail: 'TCP veri garantisi verir; UDP hız odaklıdır paket kaybını önemsemez.' },
      { id: 'ne-tu-4', title: 'Connection-oriented / Connectionless', detail: 'TCP el sıkışma gerektirir; UDP direkt gönderir.' },
      { id: 'ne-tu-5', title: 'Three-way Handshake', detail: 'SYN ➔ SYN-ACK ➔ ACK adımları.' },
      { id: 'ne-tu-6', title: 'Reliability', detail: 'ACK ve yeniden gönderim (retransmission) mekanizması.' },
      { id: 'ne-tu-7', title: 'Flow Control', detail: 'Sliding window ile alıcı kapasitesine göre hız ayarlama.' },
      { id: 'ne-tu-8', title: 'Congestion Control', detail: 'Ağdaki sıkışıklığa göre gönderim hızını ayarlama.' }
    ]
  },
  {
    category: 'network',
    group: 'DNS (Domain Name System)',
    items: [
      { id: 'ne-dn-1', title: 'DNS', detail: 'Alan adını IP adresine dönüştüren sistem.' },
      { id: 'ne-dn-2', title: 'Domain → IP', detail: 'google.com ➔ 142.250.185.78 eşleşmesi.' },
      { id: 'ne-dn-3', title: 'DNS Resolver', detail: 'Sorguyu istemci adına başlatan özyineli sunucu.' },
      { id: 'ne-dn-4', title: 'DNS Server', detail: 'Root, TLD ve Authoritative isim sunucuları.' },
      { id: 'ne-dn-5', title: 'DNS Cache', detail: 'Tarayıcı, işletim sistemi veya router üzerindeki hızlı DNS belleği.' },
      { id: 'ne-dn-6', title: 'A', detail: 'IPv4 adres kaydı.' },
      { id: 'ne-dn-7', title: 'AAAA', detail: 'IPv6 adres kaydı.' },
      { id: 'ne-dn-8', title: 'CNAME', detail: 'Alias / Takma ad kaydı.' },
      { id: 'ne-dn-9', title: 'MX', detail: 'Mail sunucu kaydı.' }
    ]
  },
  {
    category: 'network',
    group: 'REST',
    items: [
      { id: 'ne-rs-1', title: 'REST', detail: 'Representational State Transfer mimarisi.' },
      { id: 'ne-rs-2', title: 'Resource', detail: 'URI ile erişilen veri varlığı (ör: /users/123).' },
      { id: 'ne-rs-3', title: 'Statelessness', detail: 'Sunucunun oturum durumu saklamaması.' },
      { id: 'ne-rs-4', title: 'RESTful API', detail: 'REST ilkelerine uygun tasarlanmış API.' },
      { id: 'ne-rs-5', title: 'HTTP Methods', detail: 'GET, POST, PUT, DELETE standart kullanımı.' },
      { id: 'ne-rs-6', title: 'HTTP Status Codes', detail: 'REST yanıtlarında doğru status kodu dönme.' },
      { id: 'ne-rs-7', title: 'JSON', detail: 'Veri transferinde kullanılan standart format.' }
    ]
  },
  {
    category: 'network',
    group: 'WebSockets',
    items: [
      { id: 'ne-ws-1', title: 'WebSocket', detail: 'İki yönlü gerçek zamanlı iletişim kanalı.' },
      { id: 'ne-ws-2', title: 'HTTP vs WebSocket', detail: 'HTTP istek-yanıt tabanlıdır; WebSocket sürekli açıktır.' },
      { id: 'ne-ws-3', title: 'Persistent Connection', detail: 'Kalıcı tek bir TCP bağlantısı.' },
      { id: 'ne-ws-4', title: 'Real-time Communication', detail: 'Canlı verilerin milisaniyeler içinde aktarılması.' }
    ]
  },
  {
    category: 'network',
    group: 'TLS / SSL',
    items: [
      { id: 'ne-tl-1', title: 'TLS', detail: 'Transport Layer Security (Şifreleme protokolü).' },
      { id: 'ne-tl-2', title: 'Encryption', detail: 'Verinin üçüncü şahıslarca okunmasını engelleme.' },
      { id: 'ne-tl-3', title: 'Symmetric Encryption', detail: 'Tek bir gizli anahtar ile şifreleme ve çözme (AES).' },
      { id: 'ne-tl-4', title: 'Asymmetric Encryption', detail: 'Public ve Private key çifti ile şifreleme (RSA).' },
      { id: 'ne-tl-5', title: 'Public / Private Key', detail: 'Herkese açık anahtar ile şifreleme, gizli anahtar ile çözme.' },
      { id: 'ne-tl-6', title: 'Digital Certificate', detail: 'Sunucunun kimliğini doğrulayan dijital belge.' },
      { id: 'ne-tl-7', title: 'Certificate Authority', detail: 'Sertifikayı imzalayan güvenilir otorite (Let\'s Encrypt vb.).' },
      { id: 'ne-tl-8', title: 'TLS Handshake', detail: 'Sertifika doğrulama ve ortak anahtar oluşturma adımı.' },
      { id: 'ne-tl-9', title: 'HTTPS ↔ TLS ilişkisi', detail: 'HTTPS = HTTP mesajlarının TLS tüneli içinden gönderilmesi.' }
    ]
  },

  // ==========================================
  // 5. OOP & DESIGN PRINCIPLES
  // ==========================================
  {
    category: 'oop',
    group: 'OOP — 4 Temel İlke',
    items: [
      { id: 'oo-4p-1', title: 'Encapsulation', detail: 'Verileri ve metodları bir arada kapsülleyip dış erişimi kısıtlama (private/getter/setter).' },
      { id: 'oo-4p-2', title: 'Abstraction', detail: 'Gereksiz karmaşıklığı gizleyip sadece gerekli arayüzü sunma.' },
      { id: 'oo-4p-3', title: 'Inheritance', detail: 'Bir sınıfın başka bir sınıftan özelliklerini devralması (is-a).' },
      { id: 'oo-4p-4', title: 'Polymorphism', detail: 'Aynı arayüzün farklı alt sınıflarca farklı şekillerde uygulanabilmesi.' },
      { id: 'oo-4p-5', title: 'Composition vs Inheritance', detail: 'Kalıtım yerine bileşim (has-a) tercih edilmesi prensibi.' }
    ]
  },
  {
    category: 'oop',
    group: 'Temel OOP Kavramları',
    items: [
      { id: 'oo-bs-1', title: 'Class', detail: 'Nesnelerin şablonu/taslağı.' },
      { id: 'oo-bs-2', title: 'Object', detail: 'Sınıftan türetilmiş somut bellek varlığı.' },
      { id: 'oo-bs-3', title: 'Constructor', detail: 'Nesne oluşturulurken çalışan kurucu metod.' },
      { id: 'oo-bs-4', title: 'Method', detail: 'Sınıfın gerçekleştirdiği davranış fonksiyonu.' },
      { id: 'oo-bs-5', title: 'Interface', detail: 'Sadece metod imzalarını içeren sözleşme.' },
      { id: 'oo-bs-6', title: 'Abstract Class', detail: 'Ortak kodlar barındırabilen soyut ana sınıf.' },
      { id: 'oo-bs-7', title: 'Overloading', detail: 'Aynı isimli metodun farklı parametrelerle tanımlanması (Compile-time).' },
      { id: 'oo-bs-8', title: 'Overriding', detail: 'Alt sınıfın üst sınıftaki metodu yeniden yazması (Runtime).' },
      { id: 'oo-bs-9', title: 'Access Modifiers', detail: 'public, private, protected, default erişim kısıtlayıcıları.' },
      { id: 'oo-bs-10', title: 'Exception Handling', detail: 'try-catch-finally ile istisnaları yönetme.' }
    ]
  },
  {
    category: 'oop',
    group: 'SOLID Prensipleri',
    items: [
      { id: 'oo-so-1', title: 'Single Responsibility', detail: 'Bir sınıfın değişmesi için tek bir nedeni olmalıdır.' },
      { id: 'oo-so-2', title: 'Open / Closed', detail: 'Sınıflar gelişime açık, değişime kapalı olmalıdır.' },
      { id: 'oo-so-3', title: 'Liskov Substitution', detail: 'Alt sınıflar üst sınıfın davranışını bozmadan ikame edebilmelidir.' },
      { id: 'oo-so-4', title: 'Interface Segregation', detail: 'Büyük arayüzler yerine özelleşmiş küçük arayüzler kullanılmalıdır.' },
      { id: 'oo-so-5', title: 'Dependency Inversion', detail: 'Üst seviye modüller alt seviyeli modüllere değil, soyutlamalara bağımlı olmalıdır.' }
    ]
  },
  {
    category: 'oop',
    group: 'Design Patterns (Tasarım Desenleri)',
    items: [
      { id: 'oo-dp-1', title: 'Singleton', detail: 'Sınıftan tek bir nesne türetilmesini garanti eden desen.' },
      { id: 'oo-dp-2', title: 'Factory', detail: 'Nesne oluşturma mantığını istemciden gizleyen desen.' },
      { id: 'oo-dp-3', title: 'Observer', detail: 'Bir nesnedeki değişikliği abonelerine bildiren Pub/Sub deseni.' },
      { id: 'oo-dp-4', title: 'Strategy', detail: 'Algoritmaları çalışma zamanında dinamik değiştirmeyi sağlayan desen.' },
      { id: 'oo-dp-5', title: 'Adapter', detail: 'Uyumsuz arayüzleri birbiriyle çalışabilir kılan desen.' },
      { id: 'oo-dp-6', title: 'Dependency Injection', detail: 'Bağımlılıkların dışarıdan enjekte edilmesi tekniği.' }
    ]
  },

  // ==========================================
  // 6. DATABASE / DBMS
  // ==========================================
  {
    category: 'db',
    group: 'SQL Komutları',
    items: [
      { id: 'db-sq-1', title: 'SELECT', detail: 'Veri sorgulama komutu.' },
      { id: 'db-sq-2', title: 'INSERT', detail: 'Tabloya yeni satır ekleme komutu.' },
      { id: 'db-sq-3', title: 'UPDATE', detail: 'Mevcut veriyi güncelleme komutu.' },
      { id: 'db-sq-4', title: 'DELETE', detail: 'Tablodan satır silme komutu.' },
      { id: 'db-sq-5', title: 'WHERE', detail: 'Satır bazlı filtreleme koşulu.' },
      { id: 'db-sq-6', title: 'ORDER BY', detail: 'Sonuçları sıralama (ASC/DESC).' },
      { id: 'db-sq-7', title: 'GROUP BY', detail: 'Verileri belirli kolonlara göre gruplama.' },
      { id: 'db-sq-8', title: 'HAVING', detail: 'Gruplanmış veri üzerinde filtreleme.' },
      { id: 'db-sq-9', title: 'DISTINCT', detail: 'Tekrarlayan satırları teke düşürme.' },
      { id: 'db-sq-10', title: 'LIMIT', detail: 'Dönecek satır sayısını sınırlandırma.' },
      { id: 'db-sq-11', title: 'Aggregate Functions', detail: 'COUNT, SUM, AVG, MIN, MAX fonksiyonları.' },
      { id: 'db-sq-12', title: 'Subqueries', detail: 'Sorgu içinde iç sorgu çalıştırma.' }
    ]
  },
  {
    category: 'db',
    group: 'Joins (Birleştirmeler)',
    items: [
      { id: 'db-jn-1', title: 'INNER JOIN', detail: 'Her iki tabloda da kesişen/eşleşen satırları getirir.' },
      { id: 'db-jn-2', title: 'LEFT JOIN', detail: 'Sol tablodaki tüm satırları ve sağda eşleşenleri getirir.' },
      { id: 'db-jn-3', title: 'RIGHT JOIN — temel', detail: 'Sağ tablodaki tüm satırları getirir.' },
      { id: 'db-jn-4', title: 'FULL OUTER JOIN — temel', detail: 'Her iki tablodaki tüm satırları getirir.' },
      { id: 'db-jn-5', title: 'JOIN mantığı', detail: 'İlişkili tabloları FK üzerinden birleştirme.' }
    ]
  },
  {
    category: 'db',
    group: 'Database Fundamentals',
    items: [
      { id: 'db-fn-1', title: 'Primary Key', detail: 'Tablodaki satırı benzersiz kılan anahtar (NULL olamaz).' },
      { id: 'db-fn-2', title: 'Foreign Key', detail: 'Başka bir tablonun PK\'sine referans veren anahtar.' },
      { id: 'db-fn-3', title: 'Candidate Key', detail: 'PK olmaya aday benzersiz kolonlar.' },
      { id: 'db-fn-4', title: 'Constraints', detail: 'NOT NULL, UNIQUE, CHECK, DEFAULT kısıtları.' },
      { id: 'db-fn-5', title: 'Relationships', detail: 'Tablolar arası ilişkiler.' },
      { id: 'db-fn-6', title: 'One-to-One', detail: 'Bire bir tablo ilişkisi.' },
      { id: 'db-fn-7', title: 'One-to-Many', detail: 'Bire çok tablo ilişkisi (En yaygın).' },
      { id: 'db-fn-8', title: 'Many-to-Many', detail: 'Çoka çok ilişki (Ara bağlantı tablosu gerektirir).' }
    ]
  },
  {
    category: 'db',
    group: 'Indexing (İndeksleme)',
    items: [
      { id: 'db-in-1', title: 'Index', detail: 'Arama hızını artıran veri yapısı.' },
      { id: 'db-in-2', title: 'Index neden kullanılır?', detail: 'O(N) tablo taramasını O(log N)\'e düşürmek için.' },
      { id: 'db-in-3', title: 'Index avantaj / dezapartajları', detail: 'Okuma hızlanır; Insert/Update ekstra yük getirir.' },
      { id: 'db-in-4', title: 'B-Tree', detail: 'İndekslerin arkasında yatan dengeli ağaç yapısı.' },
      { id: 'db-in-5', title: 'Clustered / Non-clustered — temel', detail: 'Clustered tablonun fiziksel sırasıdır; Non-clustered ayrı işaretçi indeksidir.' }
    ]
  },
  {
    category: 'db',
    group: 'Transactions & ACID',
    items: [
      { id: 'db-tr-1', title: 'Transaction', detail: 'Mantıksal iş birimi oluşturan sorgular bütünü.' },
      { id: 'db-tr-2', title: 'ACID', detail: 'Atomicity, Consistency, Isolation, Durability prensipleri.' },
      { id: 'db-tr-3', title: 'Atomicity', detail: 'İşlemler ya hepsi gerçekleşir ya hiçbiri (All or Nothing).' },
      { id: 'db-tr-4', title: 'Consistency', detail: 'Veritabanı kısıtlarının korunduğu geçerli durum.' },
      { id: 'db-tr-5', title: 'Isolation', detail: 'Eşzamanlı transaction\'ların birbirinden izole olması.' },
      { id: 'db-tr-6', title: 'Durability', detail: 'Onaylanan (Commit) verinin kalıcı olması.' },
      { id: 'db-tr-7', title: 'Commit / Rollback', detail: 'İşlemi onaylama (Commit) veya geri alma (Rollback).' },
      { id: 'db-tr-8', title: 'Isolation Levels — temel', detail: 'Read Uncommitted, Read Committed, Repeatable Read, Serializable.' }
    ]
  },
  {
    category: 'db',
    group: 'Normalization',
    items: [
      { id: 'db-no-1', title: '1NF', detail: 'Hücrelerin atomik (bölünemez) olması.' },
      { id: 'db-no-2', title: '2NF', detail: 'Kısmi fonksiyonel bağımlılıkların kaldırılması.' },
      { id: 'db-no-3', title: '3NF', detail: 'Geçişli (transitive) bağımlılıkların kaldırılması.' },
      { id: 'db-no-4', title: 'Normalization amacı', detail: 'Veri tekrarını (redundancy) ve anormallikleri önlemek.' },
      { id: 'db-no-5', title: 'Denormalization', detail: 'Okuma performansı için kasten normalizasyonu bozma.' }
    ]
  },
  {
    category: 'db',
    group: 'SQL vs NoSQL',
    items: [
      { id: 'db-sn-1', title: 'Relational Database', detail: 'Tablo tabanlı şemalı veritabanları (PostgreSQL, MySQL).' },
      { id: 'db-sn-2', title: 'NoSQL', detail: 'İlişkisel olmayan esnek veritabanları.' },
      { id: 'db-sn-3', title: 'SQL vs NoSQL', detail: 'SQL dikey ölçeklenir ve tutarlıdır; NoSQL yatay ölçeklenir ve esnektir.' },
      { id: 'db-sn-4', title: 'Document Database', detail: 'JSON/BSON doküman saklayan yapılar (MongoDB).' },
      { id: 'db-sn-5', title: 'Key-Value Database', detail: 'Anahtar-Değer saklayan hızlı yapılar (Redis).' },
      { id: 'db-sn-6', title: 'Ne zaman hangisi?', detail: 'Finansal/ilişkili işte SQL; yüksek veri trafiği/esneklikte NoSQL.' }
    ]
  },

  // ==========================================
  // 7. AI / ML FUNDAMENTALS
  // ==========================================
  {
    category: 'ai',
    group: 'Machine Learning',
    items: [
      { id: 'ai-ml-1', title: 'Machine Learning', detail: 'Veriden öğrenen algoritmalar disiplini.' },
      { id: 'ai-ml-2', title: 'Supervised Learning', detail: 'Etiketli verilerle model eğitme (Gözetimli).' },
      { id: 'ai-ml-3', title: 'Unsupervised Learning', detail: 'Etiketsiz verilerle kalıp/küme bulma (Gözetimsiz).' },
      { id: 'ai-ml-4', title: 'Classification', detail: 'Kategori / etiket tahmini yapma (Spam/Not Spam).' },
      { id: 'ai-ml-5', title: 'Regression', detail: 'Sürekli sayısal değer tahmini yapma (Ev fiyatı).' },
      { id: 'ai-ml-6', title: 'Clustering', detail: 'Benzer verileri gruplama (K-Means).' },
      { id: 'ai-ml-7', title: 'Training / Validation / Test', detail: 'Veri setinin eğitim, doğrulama ve test olarak bölünmesi.' }
    ]
  },
  {
    category: 'ai',
    group: 'Model Problems',
    items: [
      { id: 'ai-mp-1', title: 'Overfitting', detail: 'Modelin eğitim verisini ezberlemesi (High Variance).' },
      { id: 'ai-mp-2', title: 'Underfitting', detail: 'Modelin ilişkiyi öğrenememesi (High Bias).' },
      { id: 'ai-mp-3', title: 'Bias / Variance', detail: 'Hata kaynakları dengesi.' },
      { id: 'ai-mp-4', title: 'Regularization', detail: 'L1/L2 ile modelin aşırı karmaşıklaşmasını cezalandırma.' },
      { id: 'ai-mp-5', title: 'Feature Selection', detail: 'En önemli özellikleri seçme.' },
      { id: 'ai-mp-6', title: 'Feature Engineering', detail: 'Ham veriden yeni anlamlı özellikler türetme.' }
    ]
  },
  {
    category: 'ai',
    group: 'Metrics',
    items: [
      { id: 'ai-mt-1', title: 'Confusion Matrix', detail: 'TP, FP, TN, FN matrisi.' },
      { id: 'ai-mt-2', title: 'Accuracy', detail: 'Doğru tahminlerin toplam tahminlere oranı.' },
      { id: 'ai-mt-3', title: 'Precision', detail: 'Pozitif denenlerin ne kadarı gerçekten pozitif.' },
      { id: 'ai-mt-4', title: 'Recall', detail: 'Gerçek pozitiflerin ne kadarını yakalayabildik.' },
      { id: 'ai-mt-5', title: 'F1 Score', detail: 'Precision ve Recall\'un harmonik ortalaması.' },
      { id: 'ai-mt-6', title: 'Precision vs Recall', detail: 'False Positive ve False Negative maliyet dengesi.' },
      { id: 'ai-mt-7', title: 'ROC-AUC — temel', detail: 'Sınıflandırma modelinin ayırt etme gücü eğrisi.' }
    ]
  },
  {
    category: 'ai',
    group: 'Common Algorithms',
    items: [
      { id: 'ai-ca-1', title: 'Linear Regression', detail: 'Doğrusal ilişki ile sayısal tahmin.' },
      { id: 'ai-ca-2', title: 'Logistic Regression', detail: 'Sigmoid ile ikili sınıflandırma tahmini.' },
      { id: 'ai-ca-3', title: 'Decision Tree', detail: 'Karar ağacı şeklinde dallanan model.' },
      { id: 'ai-ca-4', title: 'Random Forest', detail: 'Çok sayıda karar ağacının topluluğu (Ensemble).' },
      { id: 'ai-ca-5', title: 'K-Nearest Neighbors', detail: 'En yakın K komşuya göre sınıflandırma.' },
      { id: 'ai-ca-6', title: 'K-Means', detail: 'K adet merkeze göre etiketsiz veri kümeleme.' }
    ]
  },
  {
    category: 'ai',
    group: 'Neural Networks',
    items: [
      { id: 'ai-nn-1', title: 'Neuron', detail: 'Yapay sinir ağının temel işlem birimi.' },
      { id: 'ai-nn-2', title: 'Input / Hidden / Output Layer', detail: 'Girdi, Gizli ve Çıktı katmanları.' },
      { id: 'ai-nn-3', title: 'Weights / Bias', detail: 'Öğrenilen katsayılar ve kayma değerleri.' },
      { id: 'ai-nn-4', title: 'Activation Function', detail: 'Doğrusal olmama katan fonksiyonlar.' },
      { id: 'ai-nn-5', title: 'ReLU', detail: 'f(x) = max(0, x) aktivasyonu.' },
      { id: 'ai-nn-6', title: 'Sigmoid', detail: 'Çıktıyı 0-1 arasına sıkıştıran fonksiyon.' },
      { id: 'ai-nn-7', title: 'Softmax', detail: 'Çoklu sınıflarda olasılık dağılımı üreten fonksiyon.' },
      { id: 'ai-nn-8', title: 'Forward Propagation', detail: 'Girdinin ağ boyunca ilerletilip tahmin üretilmesi.' },
      { id: 'ai-nn-9', title: 'Loss Function', detail: 'Tahmin ile gerçek arasındaki hatayı ölçen fonksiyon.' },
      { id: 'ai-nn-10', title: 'Backpropagation', detail: 'Hatanın geriye doğru türevlerle aktarılması.' },
      { id: 'ai-nn-11', title: 'Gradient Descent', detail: 'Ağırlıkları hatayı azaltacak yönde güncelleme.' },
      { id: 'ai-nn-12', title: 'Epoch / Batch / Learning Rate', detail: 'Eğitim turu, paket boyutu ve öğrenme katsayısı.' }
    ]
  },
  {
    category: 'ai',
    group: 'LLM Basics',
    items: [
      { id: 'ai-ll-1', title: 'LLM', detail: 'Large Language Model (Büyük Dil Modeli).' },
      { id: 'ai-ll-2', title: 'Token', detail: 'Metnin bölündüğü kelime/alt kelime birimleri.' },
      { id: 'ai-ll-3', title: 'Embedding', detail: 'Kelimelerin vektör uzayında sayısal temsili.' },
      { id: 'ai-ll-4', title: 'Transformer', detail: 'Self-Attention tabanlı modern LLM mimarisi.' },
      { id: 'ai-ll-5', title: 'Attention — temel', detail: 'Metindeki kelimelerin birbirine olan önem ağırlığı.' },
      { id: 'ai-ll-6', title: 'Context Window', detail: 'Modelin aynı anda işleyebildiği maksimum token penceresi.' },
      { id: 'ai-ll-7', title: 'Prompt', detail: 'Modele verilen girdi talimatı.' },
      { id: 'ai-ll-8', title: 'Hallucination', detail: 'Modelin mantıklı görünen uydurma bilgi üretmesi.' },
      { id: 'ai-ll-9', title: 'RAG — temel', detail: 'Retrieval-Augmented Generation (Harici dokümanla doğru yanıt üretme).' }
    ]
  },

  // ==========================================
  // 8. SOFTWARE ENGINEERING / GIT / SYSTEM DESIGN
  // ==========================================
  {
    category: 'se',
    group: 'Git',
    items: [
      { id: 'se-gt-1', title: 'Repository', detail: 'Projenin ve versiyon geçmişinin saklandığı depo.' },
      { id: 'se-gt-2', title: 'Commit', detail: 'Değişikliklerin kaydedildiği anlık görüntü.' },
      { id: 'se-gt-3', title: 'Branch', detail: 'Bağımsız geliştirme yapılan kod dalı.' },
      { id: 'se-gt-4', title: 'Merge', detail: 'İki dalı birleştirip birleşme commit\'i atma.' },
      { id: 'se-gt-5', title: 'Rebase', detail: 'Dalın geçmişini diğer dalın üzerine yeniden yazma.' },
      { id: 'se-gt-6', title: 'Merge vs Rebase', detail: 'Merge geçmişi korur; Rebase doğrusal tutar.' },
      { id: 'se-gt-7', title: 'Pull', detail: 'Sunucudaki değişiklikleri çekip yerel dala birleştirme (Fetch + Merge).' },
      { id: 'se-gt-8', title: 'Push', detail: 'Yerel commit\'leri uzak sunucuya gönderme.' },
      { id: 'se-gt-9', title: 'Fetch', detail: 'Uzak depodaki değişiklikleri yerel dallara birleştirmeden indirme.' },
      { id: 'se-gt-10', title: 'Pull Request', detail: 'Kod değişikliklerinin ana dala katılması için inceleme isteği.' },
      { id: 'se-gt-11', title: 'Conflict Resolution', detail: 'Çakışan kod bloklarını elle çözme.' },
      { id: 'se-gt-12', title: 'Reset vs Revert', detail: 'Reset commit\'i siler; Revert tam tersi yeni bir commit atar.' }
    ]
  },
  {
    category: 'se',
    group: 'Software Architecture',
    items: [
      { id: 'se-sa-1', title: 'Monolithic Architecture', detail: 'Tüm uygulamanın tek bir kod tabanında ve süreçte çalışması.' },
      { id: 'se-sa-2', title: 'Microservices Architecture', detail: 'Uygulamanın bağımsız küçük servislere bölünmesi.' },
      { id: 'se-sa-3', title: 'Monolith vs Microservices', detail: 'Monolith geliştirmesi kolay/dağıtımı tekil; Microservices bağımsız/karmaşık.' },
      { id: 'se-sa-4', title: 'REST API', detail: 'Servisler arası standart HTTP iletişimi.' },
      { id: 'se-sa-5', title: 'Layered Architecture', detail: 'Presentation, Business, Data katmanları ayrımı.' },
      { id: 'se-sa-6', title: 'Client-Server Architecture', detail: 'İstemci ve sunucu rollerinin ayrılması.' },
      { id: 'se-sa-7', title: 'Stateless vs Stateful', detail: 'Stateless durum saklamaz; Stateful istemci durumunu saklar.' }
    ]
  },
  {
    category: 'se',
    group: 'System Design Basics',
    items: [
      { id: 'se-sd-1', title: 'Scalability', detail: 'Sistemin artan yüke yanıt verebilme yeteneği.' },
      { id: 'se-sd-2', title: 'Horizontal Scaling', detail: 'Sisteme daha fazla makine/sunucu ekleme (Scale Out).' },
      { id: 'se-sd-3', title: 'Vertical Scaling', detail: 'Mevcut makinenin RAM/CPU gücünü artırma (Scale Up).' },
      { id: 'se-sd-4', title: 'Load Balancer', detail: 'Gelen trafiği sunucular arasında dağıtan yük dengeleyici.' },
      { id: 'se-sd-5', title: 'Caching', detail: 'Sık istenen verileri hızlı bellekte saklama.' },
      { id: 'se-sd-6', title: 'Cache Hit / Miss', detail: 'Verinin önbellekte bulunması (Hit) veya bulunamaması (Miss).' },
      { id: 'se-sd-7', title: 'Redis', detail: 'In-memory Key-Value önbellekleme veritabanı.' },
      { id: 'se-sd-8', title: 'Database Replication', detail: 'Master-Slave ile veritabanının yedeklenmesi/okuma yükünün dağıtılması.' },
      { id: 'se-sd-9', title: 'Database Sharding — temel', detail: 'Verinin yatayda farklı veritabanı sunucularına bölünmesi.' },
      { id: 'se-sd-10', title: 'Message Queue — temel', detail: 'RabbitMQ/Kafka ile asenkron mesajlaşma.' },
      { id: 'se-sd-11', title: 'CAP Theorem', detail: 'Consistency, Availability, Partition Tolerance prensibi.' },
      { id: 'se-sd-12', title: 'Consistency', detail: 'Tüm düğümlerin aynı anda aynı veriyi görmesi.' },
      { id: 'se-sd-13', title: 'Availability', detail: 'Her isteğin başarılı bir yanıt alması.' },
      { id: 'se-sd-14', title: 'Partition Tolerance', detail: 'Ağ koptuğunda bile sistemin çalışmaya devam etmesi.' }
    ]
  }
];

export const CHEATSHEETS = {
  bigO: [
    { structure: 'Array / Vector', access: 'O(1)', search: 'O(N)', insert: 'O(N)', delete: 'O(N)', space: 'O(N)' },
    { structure: 'Singly Linked List', access: 'O(N)', search: 'O(N)', insert: 'O(1)*', delete: 'O(1)*', space: 'O(N)' },
    { structure: 'Hash Table', access: 'N/A', search: 'O(1)', insert: 'O(1)', delete: 'O(1)', space: 'O(N)' },
    { structure: 'Binary Search Tree (BST)', access: 'O(log N)', search: 'O(log N)', insert: 'O(log N)', delete: 'O(log N)', space: 'O(N)' },
    { structure: 'AVL / Red-Black Tree', access: 'O(log N)', search: 'O(log N)', insert: 'O(log N)', delete: 'O(log N)', space: 'O(N)' },
    { structure: 'Binary Heap (Min/Max)', access: 'N/A', search: 'O(N)', insert: 'O(log N)', delete: 'O(log N)', space: 'O(N)' }
  ],
  sorting: [
    { algo: 'Quick Sort', best: 'O(N log N)', avg: 'O(N log N)', worst: 'O(N^2)', space: 'O(log N)', stable: 'Hayır' },
    { algo: 'Merge Sort', best: 'O(N log N)', avg: 'O(N log N)', worst: 'O(N log N)', space: 'O(N)', stable: 'Evet' },
    { algo: 'Heap Sort', best: 'O(N log N)', avg: 'O(N log N)', worst: 'O(N^2)', space: 'O(1)', stable: 'Hayır' },
    { algo: 'Insertion Sort', best: 'O(N)', avg: 'O(N^2)', worst: 'O(N^2)', space: 'O(1)', stable: 'Evet' }
  ],
  httpCodes: [
    { code: '200 OK', category: '2xx Success', desc: 'İstek başarılı bir şekilde işlendi ve yanıt döndü.' },
    { code: '201 Created', category: '2xx Success', desc: 'İstek başarılı oldu ve yeni bir kaynak oluşturuldu.' },
    { code: '204 No Content', category: '2xx Success', desc: 'İstek başarılı ancak dönecek yanıt gövdesi yok.' },
    { code: '301 Moved Permanently', category: '3xx Redirection', desc: 'Kaynak kalıcı olarak başka bir URI\'ye taşındı.' },
    { code: '304 Not Modified', category: '3xx Redirection', desc: 'Önbellekteki veri hala güncel, tekrar indirmeye gerek yok.' },
    { code: '400 Bad Request', category: '4xx Client Error', desc: 'İstemci isteği hatalı veya geçersiz formatta.' },
    { code: '401 Unauthorized', category: '4xx Client Error', desc: 'Kimlik doğrulaması gerekiyor (Token/Login eksik).' },
    { code: '403 Forbidden', category: '4xx Client Error', desc: 'Kimlik doğrulandı ancak bu kaynağa yetki yok.' },
    { code: '404 Not Found', category: '4xx Client Error', desc: 'İstenen kaynak sunucuda bulunamadı.' },
    { code: '500 Internal Error', category: '5xx Server Error', desc: 'Sunucu tarafında beklenmeyen bir hata oluştu.' },
    { code: '502 Bad Gateway', category: '5xx Server Error', desc: 'Sunucu/Proxy üst sunucudan geçersiz yanıt aldı.' },
    { code: '503 Service Unavailable', category: '5xx Server Error', desc: 'Sunucu aşırı yüklü veya bakımda.' }
  ],
  sqlVsNosql: [
    { feature: 'Veri Modeli', sql: 'İlişkisel Tablolar (Satır & Kolon)', nosql: 'Doküman (JSON), Key-Value, Graph' },
    { feature: 'Şema', sql: 'Katı Sabit Şema (Strict Schema)', nosql: 'Dinamik / Şemasız (Schema-less)' },
    { feature: 'Ölçeklenme', sql: 'Dikey Ölçekleme (Scale Up - RAM/CPU)', nosql: 'Yatay Ölçekleme (Scale Out - Sharding)' },
    { feature: 'İşlem Güvencesi', sql: 'ACID (Atomicity, Consistency)', nosql: 'BASE (Basically Available, Soft state)' },
    { feature: 'Örnek Veritabanları', sql: 'PostgreSQL, MySQL, Oracle, MSSQL', nosql: 'MongoDB, Redis, Cassandra, Neo4j' },
    { feature: 'En İyi Kullanım', sql: 'Finans, Muhasebe, Karmaşık Joins', nosql: 'Büyük Veri, Önbellekleme, Gerçek Zamanlı' }
  ],
  gitCheatsheet: [
    { command: 'git merge <branch>', desc: 'İki dalı birleştirir ve birleşme commit\'i atarak geçmişi korur.' },
    { command: 'git rebase <branch>', desc: 'Mevcut dalın commit\'lerini hedef dalın üzerine taşıyarak doğrusal (linear) geçmiş oluşturur.' },
    { command: 'git reset --hard HEAD~1', desc: 'Son commit\'i ve yapılan tüm kod değişikliklerini tamamen siler.' },
    { command: 'git revert <commit-id>', desc: 'Geçmişi silmeden, ilgili commit\'in tam tersini yapan yeni bir commit atar (Güvenli).' },
    { command: 'git stash', desc: 'Henüz commit atılmamış değişiklikleri geçici hafızaya kaldırır.' },
    { command: 'git cherry-pick <id>', desc: 'Başka bir daldan sadece belirli tek bir commit\'i alıp mevcut dala uygular.' }
  ],
  designPatterns: [
    { pattern: 'Singleton (Creational)', intent: 'Sınıftan sadece TEK bir nesne türetilmesini garanti eder.', useCase: 'DB Connection Pool, Logger, Configuration Manager.' },
    { pattern: 'Factory Method (Creational)', intent: 'Nesne oluşturma mantığını istemciden gizler ve alt sınıflara devreder.', useCase: 'Farklı ödeme yöntemleri (CreditCard, PayPal) veya Notification (Email, SMS).' },
    { pattern: 'Observer (Behavioral)', intent: 'Bir nesnedeki değişiklikleri tüm abonelerine otomatik bildirir.', useCase: 'Event Listeners, Pub/Sub Sistemleri, Borsa Canlı Fiyat Güncellemeleri.' },
    { pattern: 'Strategy (Behavioral)', intent: 'Algoritmaları bir aile haline getirip çalışma zamanında dinamik değiştirmeyi sağlar.', useCase: 'Farklı sıralama/rotalama algoritmaları, İndirim hesaplama stratejileri.' },
    { pattern: 'Adapter (Structural)', intent: 'İki uyumsuz arayüzün birlikte çalışmasını sağlar.', useCase: 'Üçüncü parti legacy kütüphaneleri sisteme entegre etme.' },
    { pattern: 'Decorator (Structural)', intent: 'Nesneye dinamik olarak yeni sorumluluklar/özellikler ekler.', useCase: 'Java I/O Stream okuyucuları (BufferedReader(FileReader)).' }
  ],
  systemDesign: [
    { concept: 'CAP Teoremi', detail: 'Dağıtık bir sistemde ağ kesintisi olduğunda (P), ya Consistency (CP - Mongo/Postgres) ya da Availability (AP - Cassandra/CouchDB) seçilebilir.' },
    { concept: 'Load Balancing Algoritmaları', detail: 'Round Robin (Sırayla), Least Connections (En az bağlantısı olana), IP Hash (Aynı istemciyi aynı sunucuya yönlendirme).' },
    { concept: 'Caching Stratejileri', detail: 'Cache-Aside (Uygulama önce cache\'e bakar, yoksa DB\'den okuyup yazar), Write-Through (Eşzamanlı DB ve Cache\'e yazar).' },
    { concept: 'DB Scaling & Sharding', detail: 'Read Replicas (Okumayı Master-Slave kopyalarına dağıtma), Sharding (Veriyi kullanıcı ID\'sine göre yatay sunuculara bölme).' }
  ],
  linuxCommands: [
    { cmd: 'ps aux | grep <process>', category: 'Process', desc: 'Çalışan süreçleri arama ve Process ID (PID) bulma.' },
    { cmd: 'kill -9 <PID>', category: 'Process', desc: 'Belirtilen PID\'li süreci zorla sonlandırma.' },
    { cmd: 'netstat -tuln / lsof -i :3000', category: 'Network', desc: 'Port 3000\'i dinleyen süreçleri tespit etme.' },
    { cmd: 'top / htop', category: 'System', desc: 'Canlı CPU ve RAM kullanımını görüntüleme.' },
    { cmd: 'grep -rnw "/path/" -e "search"', category: 'File', desc: 'Dosyalar içinde özyineli kelime/metin arama.' },
    { cmd: 'chmod 755 <filename>', category: 'Permission', desc: 'Dosya okuma, yazma ve çalıştırma izinlerini ayarlama.' }
  ]
};

export const QUIZ_QUESTIONS = [
  // VERİ YAPILARI (DS)
  {
    id: 1,
    category: 'ds',
    difficulty: 'Kolay',
    question: 'Dizide rastgele bir elemana indeksi ile erişim (Random Access) zaman karmaşıklığı nedir?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N^2)'],
    correct: 0,
    explanation: 'Diziler bellekte ardışık yer kapladığı için `Eleman Adresi = Başlangıç Adresi + (İndeks * Eleman Boyutu)` formülü ile O(1) sürede doğrudan erişilir.'
  },
  {
    id: 2,
    category: 'ds',
    difficulty: 'Orta',
    question: 'Java HashMap yapısında çakışan eleman sayısı (Bucket boyutu) 8\'i geçerse liste hangi yapıya dönüştürülür?',
    options: ['Array', 'Red-Black Tree', 'Doubly Linked List', 'Stack'],
    correct: 1,
    explanation: 'Java 8 ile gelen optimizasyon sayesinde Chaining listesi 8 elemanı aşarsa arama süresini O(N)\'den O(log N)\'e düşürmek için Red-Black Tree\'ye çevrilir.'
  },
  {
    id: 3,
    category: 'ds',
    difficulty: 'Orta',
    question: 'Bir bağlı listede (Singly Linked List) döngü (cycle) olup olmadığını O(1) ekstra alan ile tespit eden algoritma hangisidir?',
    options: ['Binary Search', 'Floyd\'s Fast & Slow Pointer', 'Dijkstra', 'Kruskal'],
    correct: 1,
    explanation: 'Floyd\'s Cycle Detection algoritmasında biri yavaş (1 adım) diğeri hızlı (2 adım) ilerleyen iki pointer kullanılır. Döngü varsa hızlı pointer yavaşa yetişir.'
  },
  {
    id: 4,
    category: 'ds',
    difficulty: 'Kolay',
    question: 'Stack (Yığın) hangi çalışma prensibine dayanır?',
    options: ['FIFO (First In First Out)', 'LIFO (Last In First Out)', 'Random Access', 'Priority Access'],
    correct: 1,
    explanation: 'Stack LIFO (Last In First Out - Son Giren İlk Çıkar) prensibiyle çalışır. En son eklenen eleman ilk olarak çıkarılır.'
  },
  {
    id: 5,
    category: 'ds',
    difficulty: 'Zor',
    question: 'Min-Heap veri yapısında kök düğüm (root) hangi elemanı temsil eder?',
    options: ['En büyük eleman', 'En küçük eleman', 'Rastgele eleman', 'Ortanca eleman'],
    correct: 1,
    explanation: 'Min-Heap yapısında her ebeveyn düğüm çocuklarından küçüktür, dolayısıyla en küçük eleman daima köktedir (O(1) erişim).'
  },

  // ALGORİTMALAR (ALGO)
  {
    id: 6,
    category: 'algo',
    difficulty: 'Kolay',
    question: 'Binary Search (İkili Arama) algoritmasının ön koşulu nedir?',
    options: ['Dizinin çift boyutta olması', 'Dizinin önceden SIRALI olması', 'Dizide negatif sayı olmaması', 'Dizinin bağlı liste olması'],
    correct: 1,
    explanation: 'Binary Search diziyi her adımda ikiye bölerek arar. Aralığın elenmesi için dizinin kesinlikle sıralı olması şarttır.'
  },
  {
    id: 7,
    category: 'algo',
    difficulty: 'Orta',
    question: 'Aşağıdaki sıralama algoritmalarından hangisi en kötü durumda (Worst-Case) O(N log N) zaman garantisi VERMEZ?',
    options: ['Merge Sort', 'Heap Sort', 'Quick Sort', 'Tim Sort'],
    correct: 2,
    explanation: 'Quick Sort ortalamada O(N log N)\'dir ancak pivot kötü seçilirse worst-case O(N^2)\'ye düşebilir.'
  },
  {
    id: 8,
    category: 'algo',
    difficulty: 'Zor',
    question: 'Dinamik Programlamadaki (DP) Memoization yöntemi hangi yaklaşımı temsil eder?',
    options: ['Bottom-Up (Aşağıdan Yukarıya)', 'Top-Down (Yukarıdan Aşağıya - Rekürsif + Tablo)', 'Greedy Choice', 'Brute Force'],
    correct: 1,
    explanation: 'Memoization Top-Down bir yaklaşımdır; problemleri rekürsif çözerken hesaplanan sonuçları bir dizide/tabloda saklar.'
  },

  // İŞLETİM SİSTEMLERİ (OS)
  {
    id: 9,
    category: 'os',
    difficulty: 'Orta',
    question: 'Deadlock oluşması için gereken 4 mutlak koşuldan biri DEĞİLDİR?',
    options: ['Mutual Exclusion', 'Hold and Wait', 'Circular Wait', 'Preemption (Zorla Alma)'],
    correct: 3,
    explanation: 'Deadlock için "NO Preemption" (Zorla alma olmaması) gerekir. Eğer kaynak zorla geri alınabiliyorsa kilitlenme oluşmaz.'
  },
  {
    id: 10,
    category: 'os',
    difficulty: 'Orta',
    question: 'Aynı Process içindeki Thread\'ler hangi bellek alanını ORTAK KULLANMAZ?',
    options: ['Heap Alanı', 'Global Değişkenler', 'Kod (Text) Alanı', 'Stack Alanı'],
    correct: 3,
    explanation: 'Thread\'ler Heap ve Kod alanını ortak paylaşır; fakat her Thread kendi yerel değişkenlerini ve çağrılarını tutmak için bağımsız bir STACK alanına sahiptir.'
  },
  {
    id: 11,
    category: 'os',
    difficulty: 'Zor',
    question: 'Sanal bellek dönüşümlerini (Virtual → Physical) hızlandırmak için CPU önbelleğinde tutulan yapı nedir?',
    options: ['PCB (Process Control Block)', 'TLB (Translation Lookaside Buffer)', 'Semaphore', 'Mutex'],
    correct: 1,
    explanation: 'TLB (Translation Lookaside Buffer), sayfa tablosu dönüşümlerini donanımsal olarak önbelleğe alıp RAM erişim süresini düşürür.'
  },

  // BİLGİSAYAR AĞLARI (NETWORK)
  {
    id: 12,
    category: 'network',
    difficulty: 'Kolay',
    question: 'TCP 3-Way Handshake adımlarının doğru sırası hangisidir?',
    options: ['SYN -> ACK -> SYN-ACK', 'SYN -> SYN-ACK -> ACK', 'ACK -> SYN -> FIN', 'CONNECT -> ACCEPT -> READY'],
    correct: 1,
    explanation: 'Client istemci önce SYN gönderir, Server SYN-ACK ile yanıt verir, Client ise ACK göndererek güvenli TCP bağlantısını tamamlar.'
  },
  {
    id: 13,
    category: 'network',
    difficulty: 'Orta',
    question: 'HTTP status kodlarından 401 Unauthorized ile 403 Forbidden arasındaki temel fark nedir?',
    options: [
      '401 sunucu hatasıdır, 403 istemci hatasıdır.',
      '401 kimlik doğrulamasının yapılmadığını (Login/Token yok), 403 ise kimlik doğrulansa bile yetkinin olmadığını belirtir.',
      'İkisi tamamen aynıdır.',
      '403 sayfanın silindiğini gösterir.'
    ],
    correct: 1,
    explanation: '401 Unauthenticated (Kimlik belirsiz); 403 Unauthorized/Forbidden ise kimlik belli fakat erişim yetkisi yetersiz anlamındadır.'
  },

  // OOP & DESIGN PATTERNS
  {
    id: 14,
    category: 'oop',
    difficulty: 'Kolay',
    question: 'SOLID prensiplerindeki "L" (Liskov Substitution Principle) temel olarak neyi ifade eder?',
    options: ['Sınıfların tek bir sorumluluğu olmalıdır.', 'Alt sınıflar, üst sınıflarının yerine geçebilmeli ve davranışı bozmamalıdır.', 'Kod gelişime açık değişime kapalı olmalıdır.', 'Arayüzler küçük parçalara bölünmelidir.'],
    correct: 1,
    explanation: 'Liskov prensibine göre türetilen alt sınıf, üst sınıfın tüm sözleşme ve beklentilerini tam karşılamalıdır.'
  },
  {
    id: 15,
    category: 'oop',
    difficulty: 'Orta',
    question: 'Bir sınıftan çalışma zamanında sadece TEK BİR NESNE türetilmesini garanti eden tasarım deseni hangisidir?',
    options: ['Factory', 'Singleton', 'Observer', 'Adapter'],
    correct: 1,
    explanation: 'Singleton pattern, kurucu metodu (constructor) private yaparak sınıf içinde tek bir statik örnek (instance) tutulmasını sağlar.'
  },

  // DATABASE / DBMS
  {
    id: 16,
    category: 'db',
    difficulty: 'Kolay',
    question: 'Bir veritabanı işleminde (Transaction) tüm adımların ya tam yapılması ya da hatada tamamen geri alınmasını (Rollback) sağlayan ACID özelliği nedir?',
    options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
    correct: 0,
    explanation: 'Atomicity (Bölünemezlik) prensibine göre işlem parçalanamaz, ya tamamen gerçekleşir ya da başa dönülür (All or Nothing).'
  },
  {
    id: 17,
    category: 'db',
    difficulty: 'Orta',
    question: 'SQL sorgusunda gruplanmış veriler (GROUP BY) üzerinde filtreleme yapmak için hangi komut kullanılır?',
    options: ['WHERE', 'HAVING', 'ORDER BY', 'DISTINCT'],
    correct: 1,
    explanation: 'WHERE satırları gruplama öncesinde filtreler; HAVING ise GROUP BY sonrasında birikimli (aggregate) veriyi filtreler.'
  },

  // AI / ML
  {
    id: 18,
    category: 'ai',
    difficulty: 'Orta',
    question: 'Bir makine öğrenmesi modelinin eğitim verisinde %98 başarı verip test verisinde %60 kalması durumu nasıl adlandırılır?',
    options: ['Underfitting', 'Overfitting', 'High Bias', 'Optimal Convergence'],
    correct: 1,
    explanation: 'Model eğitim verisindeki gürültüleri ezberlemiş (Overfitting / High Variance) ve genelleme yeteneğini kaybetmiştir.'
  },
  {
    id: 19,
    category: 'ai',
    difficulty: 'Zor',
    question: 'Büyük Dil Modellerinde (LLM) harici özel dokümanlardan arama yapıp modele bağlam olarak sunan mimari nedir?',
    options: ['CNN', 'RAG (Retrieval-Augmented Generation)', 'LSTM', 'GAN'],
    correct: 1,
    explanation: 'RAG (Retrieval-Augmented Generation) mimarisi bir vektör veritabanından ilgili bilgi parçalarını çekip LLM prompt\'una ekleyerek hallüsünasyonları azaltır.'
  },

  // GIT / SYSTEM DESIGN
  {
    id: 20,
    category: 'se',
    difficulty: 'Orta',
    question: 'Git versiyon kontrol sisteminde "git rebase" ile "git merge" arasındaki temel fark nedir?',
    options: [
      'Rebase kodu siler, merge korur.',
      'Merge yeni bir birleşme commit\'i oluştururken, rebase commit geçmişini doğrusal (linear) olarak yeniden yazar.',
      'Rebase sadece sunucuda çalışır.',
      'İkisi tamamen aynı şeydir.'
    ],
    correct: 1,
    explanation: 'Merge geçmiş dallanmayı korur ve merge commit atar; Rebase ise feature branch commit\'lerini hedef branch\'in tepesine taşıyarak temiz ve doğrusal bir geçmiş sunar.'
  }
];
