import type { Puzzle } from './puzzles';

// Additional locally curated wordplay; not imported from the Sarah Withee repo.
// Tuple: stable ID, clue, answer, first hint, second hint, optional answer variants.
type Entry = readonly [string, string, string, string, string, ...string[]];

const entries: readonly Entry[] = [
  [
    "shellfish",
    "What do you call a crab that refuses to share?",
    "shellfish",
    "Think of a word for someone who keeps everything.",
    "Replace the start of selfish with a crab's armor."
  ],
  [
    "purrfect",
    "How does a cat describe a flawless day?",
    "purr-fect",
    "It means absolutely ideal.",
    "Start perfect with a happy cat's sound."
  ],
  [
    "pawsitive",
    "A dog is completely sure. It is ____!",
    "paws-itive",
    "Think of a word meaning certain.",
    "Replace the first part of positive with a dog's feet."
  ],
  [
    "purramedic",
    "What do you call a cat who works in an ambulance?",
    "purr-amedic",
    "This emergency worker treats patients.",
    "Start paramedic with a cat's happy sound."
  ],
  [
    "cheetah",
    "What big cat is always accused of breaking the rules?",
    "cheetah",
    "Think of someone who does not play fairly.",
    "This spotted sprinter sounds like cheater."
  ],
  [
    "hare-stylist",
    "What do you call a rabbit who cuts hair?",
    "hare stylist",
    "It is a salon job.",
    "Replace hair with the name of a rabbit's relative."
  ],
  [
    "toad-away",
    "What happened to the frog's illegally parked car? It was ____.",
    "toad away",
    "A truck removed it.",
    "Replace towed with a frog's relative."
  ],
  [
    "croak-and-roll",
    "What music does a frog band play?",
    "croak and roll",
    "Think of a guitar-heavy music genre.",
    "Replace rock in rock and roll with a frog's sound."
  ],
  [
    "hip-hop",
    "What music genre gets rabbits jumping?",
    "hip hop",
    "It features rappers and beats.",
    "The second word is how a rabbit moves."
  ],
  [
    "hiss-tory",
    "What school subject does a snake teach about the past?",
    "hiss-tory",
    "It covers events from long ago.",
    "Start history with a snake's sound."
  ],
  [
    "fish-and-ships",
    "What do hungry sea monsters order with their fish? Fish and ____.",
    "ships",
    "Think of things sailing on the sea.",
    "Change one letter in chips."
  ],
  [
    "carp-enter",
    "What do you call a fish who builds wooden furniture?",
    "carp-enter",
    "It is a woodworking profession.",
    "Start carpenter with a four-letter freshwater fish."
  ],
  [
    "sofishticated",
    "What do you call a very cultured fish?",
    "so-fish-ticated",
    "Think of someone elegant and worldly.",
    "Put fish into sophisticated."
  ],
  [
    "porpoise",
    "A dolphin says its work gives life meaning. It has a sense of ____.",
    "porpoise",
    "Think of a reason for doing something.",
    "An animal related to dolphins sounds like purpose."
  ],
  [
    "whale-done",
    "How do whales congratulate a great effort?",
    "whale done",
    "It is a two-word compliment.",
    "Replace well in well done with a huge sea mammal."
  ],
  [
    "seal-approval",
    "What stamp does a sea mammal give a good plan? A ____ of approval.",
    "seal",
    "It is both an animal and an official stamp.",
    "This flippered animal often balances a ball in cartoons."
  ],
  [
    "otterly",
    "How does an otter say completely?",
    "otterly",
    "Think of utterly.",
    "Begin that word with a playful river mammal."
  ],
  [
    "bear-minimum",
    "What is the least effort a lazy grizzly makes? The ____.",
    "bear minimum",
    "It means only the essentials.",
    "Replace bare with a large furry animal."
  ],
  [
    "koalafied",
    "What is a koala with all the right job credentials?",
    "koala-fied",
    "It means suitably trained.",
    "Replace the start of qualified with koala."
  ],
  [
    "irrelephant",
    "What do you call an elephant's comment that is off-topic?",
    "irrelephant",
    "Think of a word meaning unrelated.",
    "Blend irrelevant with elephant."
  ],
  [
    "trunk-call",
    "What kind of telephone call does an elephant make?",
    "trunk call",
    "Think of an elephant's long nose.",
    "That body part also names an old long-distance phone call."
  ],
  [
    "quack",
    "What do you call a duck pretending to be a doctor?",
    "quack",
    "It is a word for a fake medical expert.",
    "It is also the sound a duck makes."
  ],
  [
    "owlgebra",
    "What kind of math does an owl study?",
    "owl-gebra",
    "This subject uses letters in equations.",
    "Replace the start of algebra with owl."
  ],
  [
    "tweet",
    "What does a bird post on social media?",
    "tweet",
    "Think of a short bird sound.",
    "It was also the name for a post on Twitter."
  ],
  [
    "egg-spert",
    "What do you call a chicken who knows absolutely everything about a subject?",
    "egg-spert",
    "Think of a highly skilled specialist.",
    "Start expert with what a hen lays."
  ],
  [
    "impeckable",
    "How would a chicken describe its flawless manners?",
    "impeckable",
    "Think of impeccable.",
    "Put the way a chicken eats into that word."
  ],
  [
    "egg-cellent",
    "How does a hen say excellent?",
    "egg-cellent",
    "It is very high praise.",
    "Start the word with something found in a nest."
  ],
  [
    "fowl-play",
    "What do detectives suspect when chickens break the rules?",
    "fowl play",
    "Think of a phrase for dishonest behavior.",
    "Replace foul with a word for domestic birds."
  ],
  [
    "bee-hive",
    "What hairstyle does a fashionable bee request?",
    "beehive",
    "It is a tall, rounded hairdo.",
    "It shares a name with a bee colony's home."
  ],
  [
    "buzz",
    "What is all the excitement around a bee's new movie called?",
    "buzz",
    "It means public excitement or chatter.",
    "It is also the sound a flying bee makes."
  ],
  [
    "hum-bug",
    "What do you call an insect that hums holiday complaints?",
    "hum-bug",
    "Think of Scrooge's famous word.",
    "Combine a tuneless song sound with an insect."
  ],
  [
    "butterfly",
    "What do you get when butter grows wings?",
    "butterfly",
    "It is a colorful insect.",
    "Combine butter with what wings let you do."
  ],
  [
    "ant-iques",
    "What do ants call their valuable old furniture?",
    "ant-iques",
    "Think of collectible items from long ago.",
    "Begin antiques with a tiny colony insect."
  ],
  [
    "ant-icipation",
    "What do ants feel while waiting excitedly for a picnic?",
    "ant-icipation",
    "It is excitement about something ahead.",
    "The word anticipation starts with their name."
  ],
  [
    "escargot",
    "What do you call a snail's tiny vehicle? An ____.",
    "es-car-go",
    "It is a pun on a French snail dish.",
    "Put car into escargot.",
    "escargot"
  ],
  [
    "dino-snore",
    "What do you call a dinosaur that makes noise in its sleep?",
    "dino-snore",
    "Think of the sound a noisy sleeper makes.",
    "Combine dino with snore."
  ],
  [
    "tyrannosaurus-wrecks",
    "What do you call a T. rex that keeps crashing cars?",
    "tyrannosaurus wrecks",
    "Think of the dinosaur's full name.",
    "Replace rex with a word for ruined vehicles.",
    "t rex wrecks"
  ],
  [
    "tea-rex",
    "What do you call a dinosaur that loves a hot cuppa?",
    "tea rex",
    "It sounds like a famous dinosaur nickname.",
    "Replace T in T. rex with a brewed drink."
  ],
  [
    "tea-riffic",
    "How does a teapot say terrific?",
    "tea-riffic",
    "It means wonderful.",
    "Begin terrific with a brewed drink."
  ],
  [
    "brew-tiful",
    "How does a coffee lover describe a lovely morning?",
    "brew-tiful",
    "Think of a word meaning lovely.",
    "Start beautiful with the act of making coffee."
  ],
  [
    "depresso",
    "What do you call a sad espresso?",
    "depresso",
    "Think of feeling down.",
    "Blend depressed and espresso."
  ],
  [
    "mugged",
    "A coffee cup was robbed. What happened to it?",
    "mugged",
    "It means robbed in the street.",
    "The word begins with a type of drinking cup."
  ],
  [
    "espresso-yourself",
    "What does a coffee artist say instead of express yourself?",
    "espresso yourself",
    "It is advice to share your feelings.",
    "Replace express with a strong coffee drink."
  ],
  [
    "lettuce",
    "Which leafy vegetable says let us in one word?",
    "lettuce",
    "You might put it in a salad.",
    "It sounds like let us."
  ],
  [
    "romaine",
    "What does a salad leaf say instead of remain calm? ____ calm.",
    "romaine",
    "It is a lettuce variety.",
    "Its name sounds like remain."
  ],
  [
    "turnip",
    "Which root vegetable sounds like the instruction to arrive?",
    "turnip",
    "Think of the phrase turn up.",
    "This root vegetable is often purple and white."
  ],
  [
    "beet",
    "Which vegetable sounds like a drummer's rhythm?",
    "beet",
    "Think of a musical beat.",
    "This root often has a deep red color."
  ],
  [
    "peas",
    "Which vegetable sounds like a request for world peace?",
    "peas",
    "Think of small green seeds.",
    "Their name sounds like peace."
  ],
  [
    "corny",
    "How would you describe a maize farmer's cheesy jokes?",
    "corny",
    "It means silly or overly sentimental.",
    "The word begins with another name for maize."
  ],
  [
    "a-maize-ing",
    "How does a corn farmer say amazing?",
    "a-maize-ing",
    "It means astonishing.",
    "Replace the middle of amazing with maize."
  ],
  [
    "stalk",
    "What do you call a corn plant's secretive following of someone?",
    "stalk",
    "It is also a plant's main stem.",
    "The verb means to follow stealthily."
  ],
  [
    "sweet-potato",
    "What do you call a potato that is always kind?",
    "sweet potato",
    "The first word means nice or sugary.",
    "It is also the name of an orange-fleshed root."
  ],
  [
    "couch-potato",
    "What do you call a spud that watches TV all day?",
    "couch potato",
    "Think of someone who rarely leaves the sofa.",
    "Combine a sofa with a spud."
  ],
  [
    "common-tater",
    "What do you call a potato describing a sports match?",
    "common-tater",
    "Think of the person narrating a game.",
    "Make commentator end with a nickname for potato.",
    "commentater"
  ],
  [
    "spec-tater",
    "What do you call a potato watching from the stadium seats?",
    "spec-tater",
    "Think of a person watching an event.",
    "Make spectator end with tater.",
    "spectater"
  ],
  [
    "dictater",
    "What do you call a potato that rules with absolute power?",
    "dic-tater",
    "Think of an authoritarian ruler.",
    "Make dictator end with tater."
  ],
  [
    "appealing",
    "Why is a banana so charming? It is very ____.",
    "a-peeling",
    "Think of a word meaning attractive.",
    "A banana's outer covering sounds like part of appealing.",
    "appealing"
  ],
  [
    "banana-split",
    "What do you call a banana that suddenly leaves?",
    "banana split",
    "The second word can mean leave quickly.",
    "It is also a banana-and-ice-cream dessert."
  ],
  [
    "orange",
    "Complete the citrus pun: ____ you glad we met?",
    "orange",
    "Think of aren't you.",
    "Use the name of a round citrus fruit."
  ],
  [
    "pear",
    "What fruit sounds like two things that belong together?",
    "pear",
    "Think of a matching pair.",
    "This fruit often has a narrow top and wide bottom."
  ],
  [
    "grape",
    "Complete the fruit compliment: You did a ____ job!",
    "grape",
    "The usual word is great.",
    "Replace it with a small fruit that grows in bunches."
  ],
  [
    "raisin",
    "A grape has a good explanation. It has a good ____.",
    "raisin",
    "Think of a reason.",
    "Use the word for a dried grape."
  ],
  [
    "date",
    "What fruit can also be a romantic appointment?",
    "date",
    "It grows on a palm.",
    "The word also names a day on a calendar."
  ],
  [
    "jam",
    "What do you call fruit stuck in traffic? A ____.",
    "jam",
    "It is a word for congested traffic.",
    "It is also a fruity spread for toast."
  ],
  [
    "berry",
    "Complete the fruit thank-you: Thank you ____ much!",
    "berry",
    "The usual word is very.",
    "Replace it with a small, often juicy fruit."
  ],
  [
    "melon-choly",
    "What do you call a sad melon's mood?",
    "melon-choly",
    "Think of a word for deep sadness.",
    "Put melon into melancholy."
  ],
  [
    "one-in-a-melon",
    "How does a melon say someone is one in a million?",
    "one in a melon",
    "It means exceptionally special.",
    "Replace million with melon."
  ],
  [
    "dill",
    "Complete the pickle boast: I am a big ____!",
    "dill",
    "The usual phrase ends with deal.",
    "Use an herb commonly used in pickles."
  ],
  [
    "fun-guy",
    "What do you call a mushroom who is great company?",
    "fun guy",
    "Think of someone enjoyable to spend time with.",
    "The answer sounds like fungi.",
    "fungi",
    "a fun guy"
  ],
  [
    "relish",
    "What condiment also means to enjoy something greatly?",
    "relish",
    "You might put it on a hot dog.",
    "The word can mean to savor an experience."
  ],
  [
    "mustard",
    "Complete the condiment challenge: Can you cut the ____?",
    "mustard",
    "The phrase means meet expectations.",
    "It is a yellow condiment."
  ],
  [
    "ketchup",
    "What condiment tells a slow runner to catch up?",
    "ketchup",
    "It is often made from tomatoes.",
    "Its name sounds like catch up."
  ],
  [
    "grate",
    "How does a cheese lover say great?",
    "grate",
    "Think of shredding cheese.",
    "It sounds like great but ends in ate."
  ],
  [
    "gouda",
    "Complete the cheesy compliment: You are looking ____!",
    "gouda",
    "The usual compliment uses good.",
    "Use a Dutch cheese whose name starts with G."
  ],
  [
    "brie-lieve",
    "How does a cheese lover say believe?",
    "brie-lieve",
    "Think of accepting something as true.",
    "Start believe with a soft French cheese."
  ],
  [
    "legend-dairy",
    "What do you call a milk farmer whose achievements are legendary?",
    "legen-dairy",
    "Think of the word legendary.",
    "Make its ending refer to milk products.",
    "legendairy"
  ],
  [
    "udderly",
    "How does a cow say utterly?",
    "udderly",
    "It means completely.",
    "Replace utter with the part of a cow that gives milk."
  ],
  [
    "moosic",
    "What does a cow listen to on the radio?",
    "moo-sic",
    "Think of songs and melodies.",
    "Start music with a cow's sound."
  ],
  [
    "moo-vie",
    "What does a cow watch at the cinema?",
    "moo-vie",
    "Think of another word for film.",
    "Start movie with a cow's sound."
  ],
  [
    "milk-shake",
    "What drink does a dancing cow make?",
    "milkshake",
    "It is a thick, sweet drink.",
    "Combine milk with a dance-like movement."
  ],
  [
    "bread-winner",
    "What do you call a baker who earns the family's income?",
    "breadwinner",
    "Think of the household's main earner.",
    "The word starts with something a baker makes."
  ],
  [
    "knead",
    "A baker says, I really ____ a holiday. Which dough-working word fits?",
    "knead",
    "The usual word means require.",
    "This word sounds like need and means work dough."
  ],
  [
    "loafing",
    "What do you call bread doing no work all afternoon?",
    "loafing",
    "It means spending time idly.",
    "It begins with the name for a whole baked bread."
  ],
  [
    "roll-model",
    "What do you call a bread roll everyone looks up to?",
    "roll model",
    "Think of someone who sets a good example.",
    "Replace role in role model with a small bread."
  ],
  [
    "flour-power",
    "What gives a baker strength?",
    "flour power",
    "It sounds like a famous flower slogan.",
    "Replace flower with a powder used in baking."
  ],
  [
    "dough",
    "What does a baker call the money they earn?",
    "dough",
    "It is slang for money.",
    "It is also bread before baking."
  ],
  [
    "cookie-crumble",
    "Complete the baker's saying about accepting bad luck: That's the way the ____ crumbles.",
    "cookie",
    "Think of a small sweet baked treat.",
    "It often has chocolate chips."
  ],
  [
    "pie-thon",
    "What do you call a snake made of pastry?",
    "pie-thon",
    "Think of a large constricting snake.",
    "Start python with a baked dessert."
  ],
  [
    "pi-rate",
    "What do you call a pirate obsessed with the number 3.14?",
    "pi-rate",
    "Think of the mathematical constant.",
    "Put pi at the start of pirate."
  ],
  [
    "acute",
    "What do you call an adorable angle under 90 degrees?",
    "a-cute angle",
    "It is a geometry term that sounds like a compliment.",
    "Combine a cute with angle.",
    "acute",
    "acute angle"
  ],
  [
    "parallel",
    "Which lines have so much in common but will never meet? ____ lines.",
    "parallel",
    "They stay the same distance apart.",
    "The geometry word begins with para."
  ]
];

export const extraPuzzles: readonly Puzzle[] = entries.map(
  ([id, clue, answer, firstHint, secondHint, ...variants]) => ({
    id,
    image: require('../../assets/puzzle-placeholder.png'),
    clue,
    acceptedAnswers: [...new Set([answer, ...variants].flatMap((value) => [
      value, `a ${value}`, `an ${value}`, `the ${value}`,
    ]))],
    hints: [firstHint, secondHint, `Answer: ${answer}.`],
  }),
);
