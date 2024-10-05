const commonWords = [
    "apple", "banana", "car", "dog", "elephant", "fish", "grape", "house", "island", "jungle",
    "kite", "lemon", "moon", "night", "orange", "peach", "queen", "rose", "sun", "tree",
    "umbrella", "vase", "water", "x-ray", "yacht", "zebra", "airplane", "bottle", "candle",
    "dolphin", "eagle", "flower", "guitar", "hat", "ice", "jacket", "key", "lamp", 
    "notebook", "ocean", "pillow", "quilt", "ring", "snake", "turtle", "violet", "wall", 
    "xerox", "yarn", "zodiac", "ant", "bear", "cat", "deer", "elk", "fox", "goat", 
    "horse", "iguana", "jaguar", "kangaroo", "leopard", "monkey", "narwhal", "otter", 
    "parrot", "quokka", "raccoon", "salmon", "tiger", "urchin", "vulture", "whale", 
    "yak", "alligator", "buffalo", "crocodile", "dove", "emu", "flamingo", "gorilla", 
    "heron", "ibex", "jay", "koala", "lemur", "marmot", "newt", "octopus", "platypus", 
    "quail", "raven", "shark", "tapir", "unicorn", "viper", "wombat", "xerus", "yeti", 
    "zorse", "granite", "marble", "quicksand", "clay", "sand", "coal", "pebble", 
    "soil", "earth", "breeze", "flame", "sunshine", "light", "shadow", "rain", 
    "snow", "fog", "thunder", "lightning", "hurricane", "tornado", "blizzard", 
    "earthquake", "volcano", "desert", "river", "lake", "ocean", "creek", "mountain", 
    "valley", "glacier", "canyon", "waterfall", "island", "beach", "coast", 
    "jungle", "forest", "prairie", "field", "meadow", "swamp", "pond", "wetland", 
    "index", "book", "man", "woman", "child", "teacher", "student", "doctor", 
    "nurse", "engineer", "artist", "singer", "worker", "farmer", "scientist", 
    "writer", "developer", "hunter", "fisher", "baker", "chef", "barista", "mechanic",
    "captain", "pilot", "guard", "researcher", "manager", "assistant", "analyst", 
    "advisor", "editor", "nanny", "clerk", "worker", "cowboy", "architect", "design", 
    "sailor", "dancer", "actor", "musician", "director", "producer", "athlete",
    "volunteer", "leader", "judge", "police", "detective", "firefighter", "paramedic", 
    "lawyer", "agent", "broker", "investor", "mechanic", "accountant", "consultant", 
    "spokesperson", "mentor", "coach", "baker", "canvasser", "developer", "commentator", 
    "instructor", "narrator", "historian", "philosopher", "theologian", "diplomat", 
    "politician", "activist", "editor", "reporter", "librarian", "obstetrician", 
    "neurologist", "physiologist", "anesthetist", "pediatrician", "therapist", "psychologist", 
    "pharmacist", "surgeon", "dentist", "orthodontist", "veterinarian", "chiropractor", 
    "naturopath", "nutritionist", "social_worker", "writer", "journalist", "designer", 
    "developer", "consultant", "analyst", "manager", "administrator", "programmer", 
    "scientist", "mathematician", "biologist", "chemist", "physicist", "geologist", 
    "ecologist", "astrophysicist", "sociologist", "economist", "linguist", "educator", 
    "historian", "anthropologist", "archaeologist", "philosopher", "theologian", 
    "veteran", "artist", "painter", "sculptor", "writer", "novelist", "poet", 
    "storyteller", "teller", "singer", "band", "orchestra", "musician", "composer", 
    "captain", "admiral", "senator", "congressperson", "information", "data", 
    "statistics", "analysis", "research", "theory", "hypothesis", "conclusion", "fact", 
    "evidence", "proof", "argument", "statement", "interpretation", "summary", 
    "commentary", "debate", "discussion", "conversation", "interview", "presentation", 
    "lecture", "seminar", "workshop", "panel", "forum", "conference", "symposium", 
    "summit", "meeting", "gathering", "event", "function", "celebration", "festival", 
    "party", "ceremony", "wedding", "anniversary", "graduation", "reunion", "family", 
    "friend", "colleague", "neighbor", "partner", "spouse", "ex", "lover", "significant_other", 
    "child", "teen", "youth", "adult", "elder", "senior", "baby", "infant", "toddler", 
    "preschooler", "schooler", "teenager", "young_adult", "millennial", "generation_x", 
    "boomer", "zoomer", "cousin", "uncle", "aunt", "grandparent", "parent", 
    "sibling", "brother", "sister", "relative", "ancestor", "descendant", "lineage", 
    "ancestor", "bloodline", "family_tree", "clan", "tribe", "community", "society", 
    "population", "nation", "country", "state", "province", "city", "town", 
    "village", "hamlet", "district", "region", "zone", "area", "neighborhood", 
    "block", "street", "avenue", "road", "lane", "way", "place", "crossing", 
    "junction", "boulevard", "highway", "path", "trail", "track", "route", "bus", 
    "train", "subway", "trolley", "van", "car", "abundance", "area", "closeness",
    "community", "connection", "depth", "engagement", "interaction", "intimacy", 
    "involvement", "participation", "proximity", "relevance", "relationship", 
    "togetherness", "trust", "collaboration", "cooperation", "teamwork", 
    "alliances", "associations", "coalitions", "partnerships", "fellowship", 
    "network", "support", "unity", "solidarity", "harmony", "balance", "synergy", 
    "multiplicity", "variety", "richness", "diversity", "dynamism", "growth", 
    "expansion", "strength", "stability", "resilience", "flexibility", "adaptability", 
    "innovation", "creativity", "imagination", "vision", "direction", "purpose", 
    "goal", "mission", "strategy", "tactics", "plan", "design", "framework", 
    "process", "method", "approach", "system", "model", "strategy", "principle",
    "value", "belief", "attitude", "perspective", "philosophy", "ethics", "morality", 
    "ideal", "dream", "hope", "fear", "anxiety", "joy", "sadness", "anger", 
    "surprise", "trust", "fear", "love", "hate", "delight", "disappointment", 
    "satisfaction", "frustration", "relief", "contentment", "exhilaration", 
    "exhaustion", "boredom", "fatigue", "energy", "inspiration", "motivation", 
    "enthusiasm", "passion", "dedication", "commitment", "perseverance"
];

function getUniqueWord() {
    // Get previously generated words from localStorage
    let usedWords = JSON.parse(localStorage.getItem('usedWords')) || [];
    
    // Filter out words that have already been generated
    const availableWords = commonWords.filter(word => !usedWords.includes(word));
    
    if (availableWords.length === 0) {
        alert('All words have been generated!');
        return;
    }

    // Generate a random index for available words
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const newWord = availableWords[randomIndex];

    // Store the new word in localStorage
    usedWords.push(newWord);
    localStorage.setItem('usedWords', JSON.stringify(usedWords));

    return newWord;
}

document.getElementById('generate-button').addEventListener('click', () => {
    const wordDisplay = document.getElementById('word-display');
    const uniqueWord = getUniqueWord();
    
    if (uniqueWord) {
        wordDisplay.textContent = uniqueWord;
    }
});
