
const questions = [
    [
        "Your favorite planet in the world StarCraft",
        ["Slayn", "Aiur", "Char", "Mar_sara", "Zerus"],
        [
            "this.score.taldarim++",
            "this.score.protoss++",
            "this.score.zerg++",
            "this.score.terran++",
            "this.score.primal++"
        ]
    ],
    [
        "I am a river...",
        ["And I'm a star hunter", "Enemies floating debris", "You are my sea"],
        [
            "this.score.protoss++; this.score.terran--",
            "this.score.primal++; this.score.protoss--; this.score.terran--",
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "Who will you speak to on the Spear of Adun?",
        ["With Abathur", "With Swann", "With Karax"],
        [
            "this.score.protoss--",
            "this.score.protoss--",
            "this.score.protoss++"
        ]
    ],

    [
        "Before you is a well-fortified Terran bunker",
        ["I assimilate the essence of the tyrannozor that lives in these places and evolve", "Request an orbital strike if they are the first to show aggression", "I'll go talk to the marines"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "How about you leave with me, cowboy?",
        ["Damn, it's long overdue"],
        [
            "this.score.terran++"
        ]
    ],
    [
        "You were attacked",
        ["We need swarmers, sporozoans and lashers", "Summon Khaydarin Monoliths and Photon Cannons", "Build a planetary fortress, bunkers and bring in siege tanks"],
        [
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg-=2", 
            "this.score.terran++; this.score.protoss--; this.score.zerg-=2"
        ]
    ],
    [
        "The queen orders you to unleash your wrath on the worlds of the dominion",
        ["Must obey", "While she collects I follow", "Her psionic power has no effect on me."],
        [
            "this.score.zerg++; this.score.protoss--", 
            "this.score.primal++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "Before you is the High Templar",
        ["Strong essence, but I can't collect it", "Destroy the protoss", "Become an archon", "Ask Artanis how are you"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--", 
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--", 
            "this.score.terran++; this.score.protoss--; this.score.zerg--"
        ]
    ],
    [
        "You've spotted a Marine disobeying your orders.",
        ["Destroy mimicrid", "Reprimand him"],
        [
            "this.score.terran++", 
            "this.score.terran--"
        ]
    ],
    [
        "A swarm of locusts is moving towards you",
        ["A lot of essence, you can collect", "Tell them to fly on", "Try to destroy the phoenixes while they are in the air"],
        [
            "this.score.primal++; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "You see the original pool of birth, what will you do?",
        ["Gather a lot of essence", "My body can't handle this kind of power", "I'll try to destroy this place"],
        [
            "this.score.primal++; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "You are very tired today",
        ["Go to Joey's Bar", "Roy knows no fatigue", "The weak will fall first"],
        [
            "this.score.terran++; this.score.zerg--", 
            "this.score.zerg++; this.score.terran--", 
            "this.score.taldarim++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Before you is the hierarch of the protoss",
        ["Summon to Rak-shire", "Greet with the phrase «En Taro Tassadar»", "Send the swarm to attack"],
        [
            "this.score.taldarim++; this.score.zerg--", 
            "this.score.protoss++; this.score.zerg--", 
            "this.score.zerg++; this.score.protoss--"
        ]
    ],
    [
        "Zeratul and Vorazun",
        ["Bound by the Khala", "Husband and wife", "Dark Templar", "A new kind of zerg"],
        [
            "this.score.protoss--", 
            "this.score.protoss-=2", 
            "this.score.protoss++", 
            "this.score.protoss-=3"
        ]
    ],
    [
        "There are many sources of terrazine in these places.",
        ["Defend deposits from alien invaders", "Get as much as possible before these Taldarim bastards have time to understand anything"],
        [
            "this.score.taldarim++; this.score.terran--", 
            "this.score.terran++"
        ]
    ],
    [
        "Brutalisk experiments in the lab",
        ["Brutalisk - the pinnacle of evolution, needed by the swarm", "Ask the guys what interesting things they learned", "Brutalisk is very dangerous, it is better to destroy it along with the Terran laboratory"],
        [
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.terran++; this.score.protoss--; this.score.zerg--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "What is Swann's name?",
        ["Gabriel", "James", "Rory"],
        [
            "this.score.terran--", 
            "this.score.terran--", 
            "this.score.terran++"
        ]
    ],
    [
        "Phoenix -",
        ["Templar", "Nerazim", "sweeper", "Taldarim"],
        [
            "this.score.protoss--", 
            "this.score.protoss--", 
            "this.score.protoss++", 
            "this.score.protoss--"
        ]
    ],
    [
        "You need to catch up with the protoss mothership",
        ["Using hyperjump", "Intercept it by injecting a parasite", "I will send a shuttle with a message"],
        [
            "this.score.terran++; this.score.zerg--; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Zerg infested command centers with Virophages",
        ["It is necessary to destroy everyone so that the epidemic does not spread.", "Burn only infected buildings and save as many people as possible"],
        [
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "Emptiness…",
        ["Man's best friend", "Bleak"],
        [
            "this.score.protoss--", 
            "this.score.protoss++"
        ]
    ],
    [
        "How would you greet James Raynor",
        ["Friend Raynor", "Hello cowboy", "I need your essence"],
        [
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--", 
            "this.score.primal++; this.score.protoss--; this.score.terran--"
        ]
    ],
    [
        "You collected a lot of credits selling terrazine",
        ["Hire the best thugs in the dominion", "Improve technology", "Send them to the Möbius Foundation to study hybrids"],
        [
            "this.score.terran++", 
            "this.score.terran+=2", 
            "this.score.terran--"
        ]
    ],
    [
        "Amun is about to destroy Aiur",
        ["Help the protoss in battle", "Send shuttles to Shakuras and request assistance from the Golden Armada", "Call in the Death Fleet and give Amun a fight"],
        [
            "this.score.terran++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--", 
            "this.score.taldarim++; this.score.zerg--"
        ]
    ],
    [
        "Why did you come to Char?",
        ["Hunt down and kill the Queen of Blades", "Find Kerrigan and convince her to return to Mar Sara", "Bathe in slime"],
        [
            "this.score.protoss++; this.score.terran--; this.score.zerg-=2", 
            "this.score.terran++; this.score.protoss--; this.score.zerg-=2", 
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--"
        ]
    ]
];

const results = {
    'zerg': {
        name: "Zerg",
        description: "You are a true zerg, purity of essence and service to the glory of the swarm is your destiny. Your flock has captured many worlds and now the swarm has become even stronger. The Queen of Blades is pleased with you, continue to serve her further. You respect the protoss, but don't think they have a chance to survive as a species. After all, they cannot evolve, and on the scale of the universe, their race is doomed to extinction. Terans are biomass, their essence can be assimilated and used for the good of the swarm.",
        quote1: "-The concept of perfection is loose. It is possible to strive, it is impossible to achieve. Perfection as a goal is meaningless.",
        quote2: "-Death doesn't matter, only the essence matters.",
        author: "(Abathur)",
        points: "100"
    },
    'primal': {
        name: "Primal",
        description: "All you are interested in is the Essence, the more of it the better for you. You evolve, adapt and adjust to the environment. There are no problems that you cannot solve. Thanks to the constant collection of essence, you can change at any time. Essence is your way of life. So many kinds of essence. Hundreds of species. And every year more and more. You need to collect it all.",
        quote1: "-I need essence. Essence is life. I can't live without her.",
        quote2: "",
        author: "(Dehaka)",
        points: "120"
    },
    'terran': {
        name: "Terran",
        description: "You are not interested in the problems of the protoss and the zerg, the eternal enmity and devastation of the worlds. The trail of blood that has been trailing these warring races since time immemorial affects the Terrans, no matter how hard you try not to get involved. It was not possible to avoid contact with the protoss, but you can negotiate with them, unlike the zerg. Simple human joys adorn your life. Chatting with friends, going to a bar with good music, relaxing in nature. What else does a person need.",
        quote1: "-Don't mess with the guys from Mar-Sara.",
        quote2: "",
        author: "(Raynor)",
        points: "90"
    },
    'infested': {
        name: "Infested",
        description: "Apparently you were infected by the zerg, now you serve the swarm. But that doesn't stop you from dreaming of revenge on the Zerg.",
        quote1: "-Infected always rise again.",
        quote2: "-When the UED returns to the sector, there will be nothing left of you.",
        author: "(Stukov)",
        points: "160"
    },
    'protoss': {
        name: "Protoss",
        description: "You are proud and perfect. Honor guides you through the troubles that have beset your people since the war with the Overmind. For Aiur, you are ready to fight to the death. All protoss strive to be like you. Your people have an eternal enmity with the zerg, cleansing the worlds of their filth and destroying hive after hive is your primary goal. Until the zerg are destroyed, the protoss will not be able to sleep peacefully.",
        quote1: "-Strength in unity.",
        quote2: "",
        author: "(Artanis)",
        points: "80"
    },
    'taldarim': {
        name: "Taldarim",
        description: "Once upon a time you served Amon, the fallen Xel'Naga, but now your people have been freed. After Alarak became the master of the Taldarim by defeating Malasha in the Rak-Shir duel, he not only changed his status in the ascension chain, but also led the Taldarim to peaceful coexistence with other peoples of the protoss. Now you can restore your worlds as one single strong people. And your skills will be very useful in this difficult task.",
        quote1: "- You're talking to the Lord.",
        quote2: "-How can you serve me?",
        author: "(Alarak)",
        points: "140"
    },
    'hybrid': {
        name: "Hybrid",
        description: "The purity of form and the purity of essence are present in your body. You are one of the few beings that the xel'naga sought to create. Dr. Narud managed to bring all the plans of the Xel-Naga to life and now you are the perfect tool. Despite the fact that you are a hybrid of a zerg and a protoss, you do not feel sympathy for these races, but consider the hybrids to be the highest race.",
        quote1: "-It's only begining. Amun whispered about it from distant stars.",
        quote2: "",
        author: "(Narud)",
        points: "200"
    }
}