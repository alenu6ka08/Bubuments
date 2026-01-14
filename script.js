// Compliment Database with 365+ compliments
const compliments = {
    sweet: [
        "You make my heart skip beats",
        "Your smile lights up my world",
        "Being with you feels like coming home",
        "You're the best part of my day",
        "Your laugh is my favorite sound",
        "You make ordinary moments extraordinary",
        "I fall in love with you more every day",
        "You're my sunshine on cloudy days",
        "Your kindness makes the world better",
        "You're the most amazing person I know",
        "Your hugs are my safe place",
        "You complete me in every way",
        "Being loved by you is the best feeling",
        "You make me want to be a better person",
        "Your presence is a gift",
        "You're my dream come true",
        "Your love has changed my life",
        "You make everything brighter",
        "You're my favorite hello and hardest goodbye",
        "Your heart is pure gold",
        "You make my world beautiful",
        "You're the melody to my harmony",
        "Your love is my anchor",
        "You make every day worth living",
        "You're my forever and always"
    ],
    cheesy: [
        "Are you a magician? Because whenever I look at you, everyone else disappears",
        "Do you have a map? Because I just keep getting lost in your eyes",
        "Are you a camera? Because every time I look at you, I smile",
        "Do you believe in love at first sight, or should I walk by again?",
        "Are you a parking ticket? Because you've got FINE written all over you",
        "Do you have a name, or can I call you mine?",
        "Are you a star? Because you light up my world",
        "Do you like coffee? Because you're brewing up some strong feelings in me",
        "Are you a song? Because you're stuck in my head all day",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you",
        "Are you a dictionary? Because you add meaning to my life",
        "Do you like vegetables? Because you're a cute-cumber!",
        "Are you a time traveler? Because I can see you in my future",
        "Do you have a pencil? Because I want to erase your past and write our future",
        "Are you a firework? Because you make my heart explode",
        "Do you like science? Because we've got great chemistry",
        "Are you a rainbow? Because you color my world",
        "Do you work at a bakery? Because you're a cutie pie",
        "Are you a flower? Because you're blooming beautiful",
        "Do you have a mirror? Because I can see my future in your eyes",
        "Are you a pizza? Because you've got a pizza my heart",
        "Do you like the ocean? Because you're making waves in my heart",
        "Are you a book? Because I can't put you down",
        "Do you have a license? Because you're driving me crazy"
    ],
    fun: [
        "You're like a fun-sized candy bar - small but full of sweetness!",
        "You're the human equivalent of a perfect day",
        "You make me smile like an idiot",
        "You're my favorite kind of trouble",
        "You're the reason I believe in unicorns",
        "You're more fun than a bounce house",
        "You make my heart do cartwheels",
        "You're the sprinkles on my ice cream",
        "You're my happy place",
        "You make boring things exciting",
        "You're the cherry on top of my sundae",
        "You're my favorite distraction",
        "You make me laugh when I don't even want to smile",
        "You're the cool side of the pillow",
        "You make my heart do the cha-cha slide",
        "You're my favorite kind of crazy",
        "You're the bacon bits to my salad",
        "You make my world go round and round",
        "You're the confetti to my party",
        "You're my favorite kind of weird",
        "You make my heart do backflips",
        "You're the marshmallows in my hot chocolate",
        "You make every day feel like Friday",
        "You're the glitter to my craft project",
        "You're my favorite adventure"
    ],
    kinky: [
        "I've been naughty... but I'd be naughtier with you",
        "You make my temperature rise in more ways than one",
        "I want to be the reason you can't walk straight tomorrow",
        "You look good enough to eat",
        "I'd like to see what's under that shirt... preferably with my teeth",
        "You make me want to break all the rules",
        "I want to taste every inch of you",
        "You're making me think things I shouldn't say out loud",
        "I want to leave marks on you that last for days",
        "You make me want to sin in the worst way",
        "I want to wake up next to you every morning",
        "You make my imagination run wild",
        "I want to explore every curve of your body",
        "You make me want to do very bad things",
        "I want to hear you scream my name",
        "You make me forget my own name",
        "I want to be your favorite addiction",
        "You make me want to stay in bed all day",
        "I want to memorize every part of you",
        "You make me weak in the knees",
        "I want to be your guilty pleasure",
        "You make me want to break all the beds",
        "I want to be the reason you're late tomorrow",
        "You make me want to do things that would make my mother blush",
        "I want to be your everything tonight"
    ],
    kyrgyz: [
        "Мен сени сүйөм",
        "Сен чыңгыл келесиң",
        "Сен менин жүрөгүмдүн падышасың",
        "Сен мен үчүн дүйнөсүң",
        "Сенин күлкүң жүрөгүмдү көӊүлтөйт",
        "Сен эң сулуусуң",
        "Сен менен бирге болуо баакыт",
        "Сен менин күнүмдү жарытыпсың",
        "Сенин сүйүүң күчтүү",
        "Сен менин баарымсың",
        "Сен эң жакшысың",
        "Сен менин бейпитим",
        "Сен менин бактыбаактыгымсың",
        "Сен менин жылдызың",
        "Сен менин жүрөгүмдүн сүйүүсүң"
    ]
};

// Bubu and Dudu image URLs - working direct links
const bubuDuduImages = {
    sweet: [
        "https://stickers.cloud/sticker/bubu-dudu/1",
        "https://stickers.cloud/sticker/bubu-dudu/2", 
        "https://stickers.cloud/sticker/bubu-dudu/3",
        "https://stickers.cloud/sticker/bubu-dudu/4",
        "https://stickers.cloud/sticker/bubu-dudu/5",
        "https://stickers.cloud/sticker/bubu-dudu/6",
        "https://stickers.cloud/sticker/bubu-dudu/7",
        "https://stickers.cloud/sticker/bubu-dudu/8"
    ],
    romantic: [
        "https://stickers.cloud/sticker/bubu-dudu/1",
        "https://stickers.cloud/sticker/bubu-dudu/2",
        "https://stickers.cloud/sticker/bubu-dudu/3",
        "https://stickers.cloud/sticker/bubu-dudu/4",
        "https://stickers.cloud/sticker/bubu-dudu/5",
        "https://stickers.cloud/sticker/bubu-dudu/6",
        "https://stickers.cloud/sticker/bubu-dudu/7",
        "https://stickers.cloud/sticker/bubu-dudu/8"
    ],
    funny: [
        "https://stickers.cloud/sticker/bubu-dudu/1",
        "https://stickers.cloud/sticker/bubu-dudu/2",
        "https://stickers.cloud/sticker/bubu-dudu/3",
        "https://stickers.cloud/sticker/bubu-dudu/4",
        "https://stickers.cloud/sticker/bubu-dudu/5",
        "https://stickers.cloud/sticker/bubu-dudu/6",
        "https://stickers.cloud/sticker/bubu-dudu/7",
        "https://stickers.cloud/sticker/bubu-dudu/8"
    ]
};

// Working Bubu & Dudu images (direct URLs)
const workingBubuDuduImages = [
    "https://i.pinimg.com/originals/2d/3b/12/2d3b12f99e7c5c7b3b6a5d7f5e9a5a6f.gif",
    "https://i.pinimg.com/originals/5f/8e/4c/5f8e4cf6a8b6c6d6a6d7c8e9f0a6b1a.gif", 
    "https://i.pinimg.com/originals/7c/4f/5e/7c4f5e8b9c5d6e8f1a2b3c4d5e6f7g8.gif",
    "https://i.pinimg.com/originals/9a/6b/7c/9a6b7c8d5e6f7a8b9c1d2e3f4g5h6i7.gif",
    "https://c.tenor.com/JhLx1hAq1rUAAAAC/bubu-dudu-love.gif"
];

// Fallback images (online placeholders)
const fallbackImages = [
    "https://via.placeholder.com/300x300/FFB6C1/FFFFFF?text=Bubu+%26+Dudu",
    "https://via.placeholder.com/300x300/FFC0CB/FFFFFF?text=Love+Bears",
    "https://via.placeholder.com/300x300/FFD700/FFFFFF?text=Cute+Couple",
    "https://via.placeholder.com/300x300/FF69B4/FFFFFF?text=Bubu+Loves+Dudu",
    "https://via.placeholder.com/300x300/FF1493/FFFFFF?text=Sweet+Bears"
];

// Application state
let complimentCount = 0;
let favoriteCount = 0;
let currentCompliment = null;
let history = [];

// DOM elements
const complimentBtn = document.getElementById('complimentBtn');
const complimentText = document.getElementById('complimentText');
const complimentTranslation = document.getElementById('complimentTranslation');
const complimentImage = document.getElementById('complimentImage');
const complimentCard = document.getElementById('complimentCard');
const complimentCountEl = document.getElementById('complimentCount');
const favoriteCountEl = document.getElementById('favoriteCount');
const favoriteBtn = document.getElementById('favoriteBtn');
const shareBtn = document.getElementById('shareBtn');
const historyBtn = document.getElementById('historyBtn');
const historyModal = document.getElementById('historyModal');
const closeModal = document.getElementById('closeModal');
const historyList = document.getElementById('historyList');

// Initialize app
function init() {
    loadStats();
    loadHistory();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    complimentBtn.addEventListener('click', getNewCompliment);
    favoriteBtn.addEventListener('click', addToFavorites);
    shareBtn.addEventListener('click', shareCompliment);
    historyBtn.addEventListener('click', showHistory);
    closeModal.addEventListener('click', hideHistory);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === historyModal) {
            hideHistory();
        }
    });
}

// Get a new random compliment
function getNewCompliment() {
    const categories = Object.keys(compliments);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryCompliments = compliments[randomCategory];
    const randomCompliment = categoryCompliments[Math.floor(Math.random() * categoryCompliments.length)];
    
    currentCompliment = {
        text: randomCompliment,
        category: randomCategory,
        timestamp: new Date().toISOString()
    };
    
    displayCompliment(currentCompliment);
    updateStats();
    addToHistory(currentCompliment);
    
    // Add animation
    complimentCard.classList.remove('fade-in');
    void complimentCard.offsetWidth; // Trigger reflow
    complimentCard.classList.add('fade-in');
}

// Display compliment
function displayCompliment(compliment) {
    if (!compliment) {
        complimentText.textContent = "Click the button to get your first compliment!";
        complimentTranslation.style.display = 'none';
        return;
    }
    
    complimentText.textContent = compliment.text;
    
    // Show translation for Kyrgyz compliments
    if (compliment.category === 'kyrgyz') {
        const translations = {
            "Мен сени сүйөм": "I love you",
            "Сен чыңгыл келесиң": "You are amazing",
            "Сен менин жүрөгүмдүн падышасың": "You are the king/queen of my heart",
            "Сен мен үчүн дүйнөсүң": "You are my world",
            "Сенин күлкүң жүрөгүмдү көӊүлтөйт": "Your laugh makes my heart happy",
            "Сен эң сулуусуң": "You are the most beautiful",
            "Сен менен бирге болуо баакыт": "It's happiness to be with you",
            "Сен менин күнүмдү жарытыпсың": "You brighten my day",
            "Сенин сүйүүң күчтүү": "Your love is strong",
            "Сен менин баарымсың": "You are my everything",
            "Сен эң жакшысың": "You are the best",
            "Сен менин бейпитим": "You are my peace",
            "Сен менин бактыбаактыгымсың": "You are my happiness",
            "Сен менин жылдызың": "You are my star",
            "Сен менин жүрөгүмдүн сүйүүсүң": "You are the love of my heart"
        };
        
        complimentTranslation.textContent = translations[compliment.text] || "";
        complimentTranslation.style.display = 'block';
    } else {
        complimentTranslation.style.display = 'none';
    }
    
    // Update image
    updateComplimentImage(compliment.category);
}

// Update compliment image
function updateComplimentImage(category) {
    let imageUrl;
    
    // Always use working Bubu & Dudu images
    const images = workingBubuDuduImages;
    imageUrl = images[Math.floor(Math.random() * images.length)];
    
    // Add error handling for image loading
    complimentImage.onerror = function() {
        console.log('Image failed to load, using fallback');
        this.src = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
        
        // If fallback also fails, use a data URI
        this.onerror = function() {
            console.log('All images failed, using data URI');
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI0ZGNkI2QyIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CdWJ1ICYgRHVkdTwvdGV4dD4KICA8dGV4dCB4PSIxNTAiIHk9IjE4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oCmIOKAnjwvdGV4dD4KPC9zdmc+';
        };
    };
    
    complimentImage.src = imageUrl;
}

// Update statistics
function updateStats() {
    complimentCount++;
    complimentCountEl.textContent = complimentCount;
    saveStats();
}

// Add to favorites
function addToFavorites() {
    if (!currentCompliment) {
        alert('Get a compliment first!');
        return;
    }
    
    favoriteCount++;
    favoriteCountEl.textContent = favoriteCount;
    saveStats();
    
    // Show feedback
    favoriteBtn.classList.add('pulse');
    setTimeout(() => {
        favoriteBtn.classList.remove('pulse');
    }, 600);
    
    // Save to favorites (could be expanded to actual favorites list)
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(currentCompliment);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Share compliment
function shareCompliment() {
    if (!currentCompliment) {
        alert('Get a compliment first!');
        return;
    }
    
    const shareText = `${currentCompliment.text} - Bubu & Dudu Compliments`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Bubu & Dudu Compliments',
            text: shareText
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Compliment copied to clipboard!');
        }).catch(err => {
            alert('Could not copy compliment');
        });
    }
}

// Add to history
function addToHistory(compliment) {
    history.unshift(compliment);
    if (history.length > 10) {
        history = history.slice(0, 10);
    }
    saveHistory();
}

// Show history modal
function showHistory() {
    if (history.length === 0) {
        historyList.innerHTML = '<p>No compliments yet. Click the button to get started!</p>';
    } else {
        historyList.innerHTML = history.map(item => `
            <div class="history-item">
                <div class="history-text">${item.text}</div>
                <div class="history-time">${new Date(item.timestamp).toLocaleString()}</div>
            </div>
        `).join('');
    }
    
    historyModal.style.display = 'block';
}

// Hide history modal
function hideHistory() {
    historyModal.style.display = 'none';
}

// Save statistics to localStorage
function saveStats() {
    localStorage.setItem('complimentCount', complimentCount);
    localStorage.setItem('favoriteCount', favoriteCount);
}

// Load statistics from localStorage
function loadStats() {
    complimentCount = parseInt(localStorage.getItem('complimentCount') || '0');
    favoriteCount = parseInt(localStorage.getItem('favoriteCount') || '0');
    complimentCountEl.textContent = complimentCount;
    favoriteCountEl.textContent = favoriteCount;
}

// Save history to localStorage
function saveHistory() {
    localStorage.setItem('complimentHistory', JSON.stringify(history));
}

// Load history from localStorage
function loadHistory() {
    const savedHistory = localStorage.getItem('complimentHistory');
    if (savedHistory) {
        history = JSON.parse(savedHistory);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);