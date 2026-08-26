// CS Practice & Review - Enterprise Client Engine
// Author: Shivam Patil (shivam.dev)

const QUESTION_BANK = [
  // DSA
  { category: "DSA", question: "What is the average and worst-case time complexity of searching an element in a Hash Table?", options: ["O(1) average, O(N) worst-case", "O(log N) average, O(N) worst-case", "O(1) average, O(1) worst-case", "O(N) average, O(N log N) worst-case"], answer: 0, explanation: "With a uniform hash distribution, key lookup takes O(1) average time. If all keys collide into the same bucket, it degrades linearly to O(N)." },
  { category: "DSA", question: "Which data structure is fundamentally used for Breadth-First Search (BFS) graph traversal?", options: ["Queue (FIFO)", "Stack (LIFO)", "Priority Queue", "Binary Search Tree"], answer: 0, explanation: "BFS explores vertices level by level in First-In, First-Out order, which requires a standard FIFO Queue." },
  { category: "DSA", question: "What is the worst-case time complexity of Merge Sort on an array of size N?", options: ["O(N log N)", "O(N²)", "O(N)", "O(log N)"], answer: 0, explanation: "Merge Sort consistently divides the array in half (log N levels) and merges in linear O(N) time at each level, ensuring guaranteed O(N log N) time complexity." },
  { category: "DSA", question: "Which tree data structure guarantees that the height difference between left and right subtrees is at most 1 for every node?", options: ["AVL Tree", "B+ Tree", "Binary Heap", "Trie"], answer: 0, explanation: "An AVL Tree is a strictly self-balancing Binary Search Tree where the balance factor of every node is constrained to -1, 0, or +1." },
  { category: "DSA", question: "Which algorithm finds the Maximum Subarray Sum in linear O(N) time?", options: ["Kadane's Algorithm", "Binary Search", "Rabin-Karp Algorithm", "Tarjan's Algorithm"], answer: 0, explanation: "Kadane's algorithm maintains the maximum subarray sum ending at the current index in a single O(N) pass." },
  { category: "DSA", question: "What is the time complexity of pushing an element onto a Stack of size N?", options: ["O(1)", "O(N)", "O(log N)", "O(N²)"], answer: 0, explanation: "Push and Pop operations occur strictly at the top pointer of the stack, executing in constant O(1) time." },
  { category: "DSA", question: "What is the primary operational difference between a Min-Heap and a Binary Search Tree (BST)?", options: ["Heap guarantees O(1) retrieval of minimum; BST maintains strict in-order sorted traversal", "Heap cannot store duplicates; BST can", "Heap is always height-unbalanced; BST is strictly balanced", "Heap lookups are O(1) for any arbitrary key"], answer: 0, explanation: "A Min-Heap guarantees the minimum element is at the root for O(1) access, whereas a BST maintains in-order left < root < right relationship allowing O(log N) arbitrary searches." },

  // C++
  { category: "C++", question: "What is the primary difference between `std::unique_ptr` and `std::shared_ptr` in modern C++?", options: ["unique_ptr has exclusive ownership; shared_ptr uses reference counting", "unique_ptr is stored on stack; shared_ptr on heap", "unique_ptr allows multiple owners; shared_ptr does not", "unique_ptr is deprecated in C++17"], answer: 0, explanation: "std::unique_ptr enforces strict single ownership with zero overhead, whereas std::shared_ptr coordinates shared ownership via atomic reference counting." },
  { category: "C++", question: "What is the purpose of declaring a `virtual destructor` in a C++ base class?", options: ["To ensure the derived class destructor is called when deleting through a base pointer", "To prevent inheritance from the base class", "To make the destructor private", "To allocate destructor memory on the heap"], answer: 0, explanation: "Without a virtual destructor, deleting a derived instance through a base pointer results in undefined behavior because only the base destructor executes." },
  { category: "C++", question: "Which C++ cast operator is used to perform safe runtime downcasting in an inheritance hierarchy?", options: ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"], answer: 0, explanation: "dynamic_cast utilizes Run-Time Type Information (RTTI) to verify object types and returns nullptr if an invalid downcast is attempted." },
  { category: "C++", question: "What is RAII (Resource Acquisition Is Initialization) in C++?", options: ["A pattern where resources are bound to object lifetime and released in destructors", "A syntax requirement for global variables", "A compiler optimization flag", "A database connection protocol"], answer: 0, explanation: "RAII guarantees exception-safe resource management (heap memory, mutexes, file handles) by acquiring resources in constructors and releasing them in destructors." },

  // Python
  { category: "Python", question: "How do Python generators save memory compared to traditional lists?", options: ["They yield values on-the-fly without storing the entire sequence in memory", "They compress list items using gzip", "They store elements in C struct arrays", "They execute in parallel GPU threads"], answer: 0, explanation: "Generators utilize lazy evaluation (`yield`) to compute elements one at a time, keeping memory usage constant O(1) regardless of sequence size." },
  { category: "Python", question: "What is the difference between `is` and `==` in Python?", options: ["`is` checks memory identity; `==` checks value equality", "`is` checks value; `==` checks type", "`is` is used only for numbers; `==` for strings", "There is no difference in Python 3"], answer: 0, explanation: "`==` evaluates whether object values are equivalent, whereas `is` checks whether two variables point to the identical memory address (`id(a) == id(b)`)." },
  { category: "Python", question: "What does the `@classmethod` decorator do in Python?", options: ["Passes the class (`cls`) as the first implicit parameter instead of the instance (`self`)", "Converts a method into a static function", "Prevents subclass overriding", "Forces the method to return a dictionary"], answer: 0, explanation: "@classmethod receives the class object as its first argument, allowing factory constructors and class-level state operations." },

  // DBMS
  { category: "DBMS", question: "What does the 'I' in ACID properties of database transactions stand for?", options: ["Isolation", "Integrity", "Indexing", "Inheritance"], answer: 0, explanation: "Isolation ensures concurrent transaction executions remain completely separated without exposing uncommitted intermediate states." },
  { category: "DBMS", question: "What is the key difference between `DELETE` and `TRUNCATE` in SQL?", options: ["DELETE is DML (row-by-row, rollable); TRUNCATE is DDL (deallocates pages immediately)", "DELETE drops the table schema; TRUNCATE deletes rows", "TRUNCATE supports WHERE clauses; DELETE does not", "DELETE is always faster than TRUNCATE"], answer: 0, explanation: "DELETE logs row-level operations allowing rollback, while TRUNCATE deallocates data pages with minimal logging for high throughput." },
  { category: "DBMS", question: "Why are B+ Trees preferred over B-Trees for relational database indexes?", options: ["All data records are stored in linked leaf nodes, optimizing sequential range scans", "B+ Trees have O(1) search complexity", "B+ Trees require no disk I/O", "B+ Trees do not require rebalancing"], answer: 0, explanation: "B+ Trees store all payload keys in sequential linked leaf nodes, allowing extremely fast range queries and higher internal node fanout." },

  // OS & Networks
  { category: "OS", question: "What are the four necessary Coffman conditions for a Deadlock to occur?", options: ["Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait", "Paging, Segmentation, Swapping, Thrashing", "Context Switching, Interrupts, System Calls, Trap", "Atomicity, Consistency, Isolation, Durability"], answer: 0, explanation: "Coffman established that deadlocks occur if and only if Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait occur simultaneously." },
  { category: "OS", question: "What causes 'Thrashing' in an operating system?", options: ["The system spends more time servicing page faults than executing user processes", "The CPU frequency throttles due to thermal limits", "A recursive function exhausts stack frames", "Threads access shared data without mutexes"], answer: 0, explanation: "When aggregate active process memory requirements exceed physical RAM, continuous page faulting and disk swapping degrade CPU throughput." },
  { category: "Networks", "question": "What is the three-way handshake sequence to establish a TCP connection?", options: ["SYN -> SYN-ACK -> ACK", "ACK -> SYN -> FIN", "SYN -> ACK -> DATA", "PING -> PONG -> ACK"], answer: 0, explanation: "The client transmits SYN, the server replies with SYN-ACK, and the client acknowledges with ACK before data streaming starts." }
];

let activeCategory = 'All';
let filteredList = [...QUESTION_BANK];
let currentIndex = 0;
let score = 0;
let currentMode = 'quiz'; // 'quiz' or 'flashcard'
let timer = null;
let secondsLeft = 15;
let isFlipped = false;
let missedQuestions = [];

function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.includes(cat) || (cat === 'All' && btn.textContent === 'All Topics'));
  });

  if (cat === 'All') {
    filteredList = [...QUESTION_BANK];
  } else if (cat === 'OS') {
    filteredList = QUESTION_BANK.filter(q => q.category === 'OS' || q.category === 'Networks');
  } else {
    filteredList = QUESTION_BANK.filter(q => q.category === cat);
  }

  currentIndex = 0;
  score = 0;
  isFlipped = false;
  missedQuestions = [];
  renderView();
}

function switchMode(mode) {
  currentMode = mode;
  document.getElementById('btn-quiz').classList.toggle('active', mode === 'quiz');
  document.getElementById('btn-flash').classList.toggle('active', mode === 'flashcard');
  document.getElementById('meta-bar').style.display = mode === 'quiz' ? 'flex' : 'none';
  document.getElementById('progress-track').style.display = mode === 'quiz' ? 'block' : 'none';

  currentIndex = 0;
  isFlipped = false;
  renderView();
}

function renderView() {
  clearInterval(timer);
  if (currentMode === 'quiz') {
    renderQuiz();
  } else {
    renderFlashcard();
  }
}

function renderQuiz() {
  if (currentIndex >= filteredList.length) {
    renderResults();
    return;
  }

  const q = filteredList[currentIndex];
  secondsLeft = 15;

  document.getElementById('category-badge').textContent = q.category;
  document.getElementById('question-counter').textContent = `Question ${currentIndex + 1} of ${filteredList.length}`;
  document.getElementById('score-display').innerHTML = `Score: <strong>${score}</strong>`;
  document.getElementById('timer-val').textContent = `${secondsLeft}s`;
  document.getElementById('progress-bar').style.width = '100%';

  const workspace = document.getElementById('card-workspace');
  workspace.innerHTML = `
    <h2 class="question-heading">${q.question}</h2>
    <div class="options-container">
      ${q.options.map((opt, idx) => `
        <button class="option-btn" onclick="submitAnswer(${idx})">
          <span class="option-key">${String.fromCharCode(65 + idx)}</span>
          <span class="option-text">${opt}</span>
        </button>
      `).join('')}
    </div>
    <div id="feedback-area" style="display: none;"></div>
  `;

  timer = setInterval(() => {
    secondsLeft--;
    document.getElementById('timer-val').textContent = `${secondsLeft}s`;
    document.getElementById('progress-bar').style.width = `${(secondsLeft / 15) * 100}%`;
    if (secondsLeft <= 0) {
      clearInterval(timer);
      submitAnswer(-1); // Timeout
    }
  }, 1000);
}

function submitAnswer(chosenIdx) {
  clearInterval(timer);
  const q = filteredList[currentIndex];
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);

  if (chosenIdx === q.answer) {
    score += 10;
    document.getElementById('score-display').innerHTML = `Score: <strong>${score}</strong>`;
    if (chosenIdx >= 0) buttons[chosenIdx].classList.add('correct');
  } else {
    missedQuestions.push(q);
    if (chosenIdx >= 0) buttons[chosenIdx].classList.add('wrong');
    buttons[q.answer].classList.add('correct');
  }

  const feedbackArea = document.getElementById('feedback-area');
  feedbackArea.style.display = 'block';
  feedbackArea.innerHTML = `
    <div class="explanation-card">
      <strong>Technical Explanation:</strong>
      ${q.explanation}
    </div>
    <button class="btn-primary-action" id="btn-next" onclick="nextQuestion()">Next Question &rarr;</button>
  `;
  document.getElementById('btn-next').focus();
}

function nextQuestion() {
  currentIndex++;
  renderQuiz();
}

function renderResults() {
  const maxScore = filteredList.length * 10;
  const pct = Math.round((score / maxScore) * 100);

  const workspace = document.getElementById('card-workspace');
  workspace.innerHTML = `
    <div class="results-container">
      <span class="meta-label">Session Summary</span>
      <div class="results-score-big">${score} / ${maxScore}</div>
      <p class="results-summary-text">
        Accuracy: <strong>${pct}%</strong> &bull; ${pct >= 75 ? 'Demonstrates solid technical proficiency.' : 'Review recommended for key conceptual topics.'}
      </p>
      
      <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
        <button class="btn-primary-action" onclick="setCategory(activeCategory)">Restart Full Session</button>
        ${missedQuestions.length > 0 ? `
          <button class="btn-ghost" onclick="reviewMissedOnly()">Review Missed (${missedQuestions.length} Questions)</button>
        ` : ''}
      </div>
    </div>
  `;
}

function reviewMissedOnly() {
  filteredList = [...missedQuestions];
  missedQuestions = [];
  currentIndex = 0;
  score = 0;
  renderQuiz();
}

// Flashcard Mode
function renderFlashcard() {
  const q = filteredList[currentIndex];
  const workspace = document.getElementById('card-workspace');

  workspace.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem;">
      <span class="meta-label">${q.category}</span>
      <span class="meta-counter">Card ${currentIndex + 1} of ${filteredList.length}</span>
    </div>

    <div class="flashcard-wrapper" onclick="toggleFlashcard()">
      <div id="flash-inner">
        <div class="flashcard-prompt">${q.question}</div>
        <div class="flashcard-hint-text">Click anywhere on card to reveal solution</div>
      </div>
    </div>

    <div class="flashcard-actions">
      <button class="btn-ghost" onclick="prevCard()" ${currentIndex === 0 ? 'disabled' : ''}>&larr; Previous</button>
      <button class="btn-ghost" onclick="toggleFlashcard()">Flip Card</button>
      <button class="btn-ghost" onclick="nextCard()" ${currentIndex === filteredList.length - 1 ? 'disabled' : ''}>Next &rarr;</button>
    </div>
  `;
}

function toggleFlashcard() {
  const q = filteredList[currentIndex];
  isFlipped = !isFlipped;
  const inner = document.getElementById('flash-inner');

  if (isFlipped) {
    inner.innerHTML = `
      <div class="flashcard-answer-label">Correct Answer: ${q.options[q.answer]}</div>
      <div class="flashcard-answer-desc">${q.explanation}</div>
      <div class="flashcard-hint-text">Click again to view question</div>
    `;
  } else {
    inner.innerHTML = `
      <div class="flashcard-prompt">${q.question}</div>
      <div class="flashcard-hint-text">Click anywhere on card to reveal solution</div>
    `;
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    isFlipped = false;
    renderFlashcard();
  }
}

function nextCard() {
  if (currentIndex < filteredList.length - 1) {
    currentIndex++;
    isFlipped = false;
    renderFlashcard();
  }
}

// Keyboard shortcuts for natural developer interaction
document.addEventListener('keydown', (e) => {
  if (currentMode === 'quiz') {
    const key = e.key.toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(key)) {
      const idx = key.charCodeAt(0) - 65;
      const btns = document.querySelectorAll('.option-btn');
      if (btns[idx] && !btns[idx].disabled) submitAnswer(idx);
    } else if (['1', '2', '3', '4'].includes(key)) {
      const idx = parseInt(key) - 1;
      const btns = document.querySelectorAll('.option-btn');
      if (btns[idx] && !btns[idx].disabled) submitAnswer(idx);
    } else if (e.key === 'Enter') {
      const nextBtn = document.getElementById('btn-next');
      if (nextBtn) nextQuestion();
    }
  } else if (currentMode === 'flashcard') {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleFlashcard();
    } else if (e.key === 'ArrowRight') {
      nextCard();
    } else if (e.key === 'ArrowLeft') {
      prevCard();
    }
  }
});

// Boot
renderView();
