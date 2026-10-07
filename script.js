/* =========================================================
   QUIZ
========================================================= */

const questions = [

    {
        question: "Este Pokémon é conhecido como o Pokémon Continente.",
        answers: ["Groudon", "Kyogre", "Rayquaza", "Regigigas"],
        correct: "Groudon"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Clima?",
        answers: ["Castform", "Cherrim", "Kecleon", "Porygon"],
        correct: "Castform"
    },

    {
        question: "Qual Pokémon evolui de Magikarp?",
        answers: ["Gyarados", "Milotic", "Sharpedo", "Whiscash"],
        correct: "Gyarados"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Aura?",
        answers: ["Lucario", "Riolu", "Zoroark", "Gallade"],
        correct: "Lucario"
    },

    {
        question: "Qual é o tipo do Pokémon Spiritomb?",
        answers: [
            "Fantasma/Sombrio",
            "Fantasma/Psíquico",
            "Sombrio/Psíquico",
            "Fantasma/Venenoso"
        ],
        correct: "Fantasma/Sombrio"
    },

    {
        question: "Qual Pokémon é famoso por sua habilidade Intimidate e por ser uma serpente marinha?",
        answers: ["Gyarados", "Milotic", "Serperior", "Arbok"],
        correct: "Gyarados"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Dragão?",
        answers: ["Dragonite", "Salamence", "Garchomp", "Goodra"],
        correct: "Dragonite"
    },

    {
        question: "Qual item é utilizado para evoluir Scyther em Scizor?",
        answers: ["Metal Coat", "King's Rock", "Dragon Scale", "Protector"],
        correct: "Metal Coat"
    },

    {
        question: "Qual Pokémon possui a habilidade Levitate em sua forma normal?",
        answers: ["Gengar", "Charizard", "Garchomp", "Tyranitar"],
        correct: "Gengar"
    },

    {
        question: "Qual Pokémon é conhecido por dormir bloqueando caminhos no mundo Pokémon?",
        answers: ["Snorlax", "Slaking", "Komala", "Munchlax"],
        correct: "Snorlax"
    },

    {
        question: "Qual Pokémon é o parceiro principal de Ash Ketchum?",
        answers: ["Pikachu", "Charizard", "Greninja", "Lucario"],
        correct: "Pikachu"
    },

    {
        question: "Qual Pokémon lendário forma uma dupla com Kyogre?",
        answers: ["Groudon", "Rayquaza", "Latios", "Ho-Oh"],
        correct: "Groudon"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Espada?",
        answers: ["Aegislash", "Zacian", "Honedge", "Gallade"],
        correct: "Aegislash"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Espada Coroado?",
        answers: ["Zacian", "Zamazenta", "Cobalion", "Kartana"],
        correct: "Zacian"
    },

    {
        question: "Qual é o tipo principal de Umbreon?",
        answers: ["Sombrio", "Fantasma", "Noturno", "Veneno"],
        correct: "Sombrio"
    },

    {
        question: "Qual Pokémon evolui através de amizade durante a noite?",
        answers: ["Umbreon", "Espeon", "Sylveon", "Leafeon"],
        correct: "Umbreon"
    },

    {
        question: "Qual Pokémon evolui através de amizade durante o dia?",
        answers: ["Espeon", "Umbreon", "Sylveon", "Glaceon"],
        correct: "Espeon"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Genético?",
        answers: ["Mewtwo", "Mew", "Ditto", "Genesect"],
        correct: "Mewtwo"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Nova Espécie?",
        answers: ["Mew", "Mewtwo", "Celebi", "Deoxys"],
        correct: "Mew"
    },

    {
        question: "Qual Pokémon pode copiar a aparência de outros Pokémon?",
        answers: ["Ditto", "Zorua", "Mew", "Porygon"],
        correct: "Ditto"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon DNA?",
        answers: ["Deoxys", "Genesect", "Mewtwo", "Porygon-Z"],
        correct: "Deoxys"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Equilíbrio?",
        answers: ["Rayquaza", "Giratina", "Arceus", "Kyurem"],
        correct: "Rayquaza"
    },

    {
        question: "Qual Pokémon é associado ao mundo distorcido?",
        answers: ["Giratina", "Dialga", "Palkia", "Darkrai"],
        correct: "Giratina"
    },

    {
        question: "Qual Pokémon controla o tempo?",
        answers: ["Dialga", "Palkia", "Giratina", "Celebi"],
        correct: "Dialga"
    },

    {
        question: "Qual Pokémon controla o espaço?",
        answers: ["Palkia", "Dialga", "Giratina", "Deoxys"],
        correct: "Palkia"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Desastre?",
        answers: ["Absol", "Zoroark", "Mightyena", "Darkrai"],
        correct: "Absol"
    },

    {
        question: "Qual Pokémon é conhecido por provocar pesadelos?",
        answers: ["Darkrai", "Cresselia", "Hypno", "Gengar"],
        correct: "Darkrai"
    },

    {
        question: "Qual Pokémon é considerado o oposto de Darkrai e está associado a bons sonhos?",
        answers: ["Cresselia", "Lunala", "Munna", "Jirachi"],
        correct: "Cresselia"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Lua?",
        answers: ["Lunala", "Clefable", "Cresselia", "Umbreon"],
        correct: "Lunala"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Sol?",
        answers: ["Solgaleo", "Lunala", "Espeon", "Volcarona"],
        correct: "Solgaleo"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Solitário?",
        answers: ["Cubone", "Marowak", "Absol", "Mimikyu"],
        correct: "Cubone"
    },

    {
        question: "Qual Pokémon usa um crânio de sua mãe como parte de sua aparência?",
        answers: ["Cubone", "Marowak", "Duskull", "Yamask"],
        correct: "Cubone"
    },

    {
        question: "Qual Pokémon possui uma máscara que lembra um rosto?",
        answers: ["Mimikyu", "Yamask", "Banette", "Sableye"],
        correct: "Mimikyu"
    },

    {
        question: "Qual Pokémon é conhecido por guardar tesouros dentro de seu corpo?",
        answers: ["Gimmighoul", "Meltan", "Klefki", "Sableye"],
        correct: "Gimmighoul"
    },

    {
        question: "Qual Pokémon evolui de Gimmighoul?",
        answers: ["Gholdengo", "Miraidon", "Kingambit", "Kleavor"],
        correct: "Gholdengo"
    },

    {
        question: "Qual Pokémon possui uma forma chamada Bloodmoon no jogo Pokémon Scarlet e Violet?",
        answers: ["Ursaluna", "Ursaring", "Bewear", "Lycanroc"],
        correct: "Ursaluna"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Paradoxo que lembra um Donphan futurista?",
        answers: ["Iron Treads", "Iron Hands", "Iron Bundle", "Iron Jugulis"],
        correct: "Iron Treads"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Paradoxo que lembra um Donphan pré-histórico?",
        answers: ["Great Tusk", "Sandy Shocks", "Brute Bonnet", "Slither Wing"],
        correct: "Great Tusk"
    },

    {
        question: "Qual é o Pokémon inicial de fogo da região de Kanto?",
        answers: ["Charmander", "Cyndaquil", "Torchic", "Litten"],
        correct: "Charmander"
    },

    {
        question: "Qual é o Pokémon inicial de água da região de Hoenn?",
        answers: ["Mudkip", "Treecko", "Torchic", "Popplio"],
        correct: "Mudkip"
    },

    {
        question: "Qual é o Pokémon inicial de grama da região de Sinnoh?",
        answers: ["Turtwig", "Chikorita", "Rowlet", "Snivy"],
        correct: "Turtwig"
    },

    {
        question: "Qual é o Pokémon inicial de fogo de Galar?",
        answers: ["Scorbunny", "Grookey", "Sobble", "Fuecoco"],
        correct: "Scorbunny"
    },

    {
        question: "Qual é o Pokémon inicial de água de Galar?",
        answers: ["Sobble", "Grookey", "Scorbunny", "Oshawott"],
        correct: "Sobble"
    },

    {
        question: "Qual é o Pokémon inicial de grama de Paldea?",
        answers: ["Sprigatito", "Fuecoco", "Quaxly", "Meowscarada"],
        correct: "Sprigatito"
    },

    {
        question: "Qual Pokémon é conhecido por carregar uma cebola nas costas?",
        answers: ["Bulbasaur", "Oddish", "Gloom", "Bellsprout"],
        correct: "Bulbasaur"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Semente?",
        answers: ["Bulbasaur", "Chikorita", "Treecko", "Sprigatito"],
        correct: "Bulbasaur"
    },

    {
        question: "Qual Pokémon é conhecido por possuir três cabeças?",
        answers: ["Dugtrio", "Dodrio", "Exeggutor", "Magneton"],
        correct: "Dodrio"
    },

    {
        question: "Qual Pokémon possui três Magnemite formando seu corpo?",
        answers: ["Magneton", "Magnezone", "Dugtrio", "Metagross"],
        correct: "Magneton"
    },

    {
        question: "Qual Pokémon possui quatro braços e é conhecido por sua força física?",
        answers: ["Machamp", "Machoke", "Hariyama", "Conkeldurr"],
        correct: "Machamp"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Carpa?",
        answers: ["Magikarp", "Feebas", "Goldeen", "Barboach"],
        correct: "Magikarp"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Dragão Pseudo-Lendário de Hoenn?",
        answers: ["Salamence", "Flygon", "Altaria", "Rayquaza"],
        correct: "Salamence"
    },

    {
        question: "Qual Pokémon possui uma Mega Evolução que se torna Dragão/Fada?",
        answers: ["Altaria", "Salamence", "Gardevoir", "Ampharos"],
        correct: "Altaria"
    },

    {
        question: "Qual Pokémon possui uma Mega Evolução extremamente poderosa e é conhecido por sua velocidade?",
        answers: ["Rayquaza", "Lucario", "Garchomp", "Metagross"],
        correct: "Rayquaza"
    },

    {
        question: "Qual Pokémon é conhecido por ter uma habilidade chamada Wonder Guard?",
        answers: ["Shedinja", "Ninjask", "Spiritomb", "Sableye"],
        correct: "Shedinja"
    },

    {
        question: "Qual Pokémon possui apenas 1 HP em condições normais?",
        answers: ["Shedinja", "Ditto", "Magikarp", "Wishiwashi"],
        correct: "Shedinja"
    },

    {
        question: "Qual Pokémon possui a habilidade Protean?",
        answers: ["Greninja", "Inteleon", "Cinderace", "Meowscarada"],
        correct: "Greninja"
    },

    {
        question: "Qual Pokémon ficou famoso no anime por usar o golpe Water Shuriken?",
        answers: ["Greninja", "Samurott", "Inteleon", "Blastoise"],
        correct: "Greninja"
    },

    {
        question: "Qual Pokémon possui a habilidade Libero?",
        answers: ["Cinderace", "Greninja", "Scorbunny", "Raboot"],
        correct: "Cinderace"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Lendário associado à região de Galar e ao escudo?",
        answers: ["Zamazenta", "Zacian", "Eternatus", "Kubfu"],
        correct: "Zamazenta"
    },

    {
        question: "Qual Pokémon lendário é responsável pelo fenômeno Dynamax em Galar?",
        answers: ["Eternatus", "Zacian", "Zamazenta", "Calyrex"],
        correct: "Eternatus"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Rei?",
        answers: ["Calyrex", "Kingambit", "Slowking", "Slaking"],
        correct: "Calyrex"
    },

    {
        question: "Qual Pokémon pode evoluir para Annihilape após usar Rage Fist várias vezes?",
        answers: ["Primeape", "Mankey", "Pawniard", "Passimian"],
        correct: "Primeape"
    },

    {
        question: "Qual Pokémon evolui para Kingambit?",
        answers: ["Bisharp", "Pawniard", "Mawile", "Scizor"],
        correct: "Bisharp"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Lâmina?",
        answers: ["Gallade", "Scizor", "Bisharp", "Kartana"],
        correct: "Gallade"
    },

    {
        question: "Qual Pokémon Ultra Beast é conhecido por parecer uma mariposa luminosa?",
        answers: ["Pheromosa", "Buzzwole", "Nihilego", "Xurkitree"],
        correct: "Pheromosa"
    },

    {
        question: "Qual Pokémon Ultra Beast parece uma enorme árvore de Natal?",
        answers: ["Xurkitree", "Kartana", "Celesteela", "Stakataka"],
        correct: "Xurkitree"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Origem?",
        answers: ["Arceus", "Mew", "Dialga", "Regigigas"],
        correct: "Arceus"
    },

    {
        question: "Qual Pokémon é considerado o criador do mundo Pokémon segundo a mitologia?",
        answers: ["Arceus", "Mew", "Rayquaza", "Dialga"],
        correct: "Arceus"
    },

    {
        question: "Qual Pokémon lendário é conhecido por viver no fundo do mar?",
        answers: ["Kyogre", "Lugia", "Suicune", "Manaphy"],
        correct: "Kyogre"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Mergulho?",
        answers: ["Lugia", "Kyogre", "Lapras", "Milotic"],
        correct: "Lugia"
    },

    {
        question: "Qual Pokémon é conhecido por controlar os mares na mitologia de Johto?",
        answers: ["Lugia", "Ho-Oh", "Suicune", "Kyogre"],
        correct: "Lugia"
    },

    {
        question: "Qual Pokémon é associado ao arco-íris e à região de Johto?",
        answers: ["Ho-Oh", "Lugia", "Celebi", "Entei"],
        correct: "Ho-Oh"
    },

    {
        question: "Qual Pokémon é conhecido por viajar através do tempo?",
        answers: ["Celebi", "Dialga", "Jirachi", "Celebi"],
        correct: "Celebi"
    },

    {
        question: "Qual Pokémon é conhecido por conceder desejos?",
        answers: ["Jirachi", "Victini", "Mew", "Togepi"],
        correct: "Jirachi"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Vitória?",
        answers: ["Victini", "Jirachi", "Hoopa", "Meloetta"],
        correct: "Victini"
    },

    {
        question: "Qual Pokémon possui a forma regional de Alola que é do tipo Gelo/Fada?",
        answers: ["Ninetales", "Vulpix", "Sandslash", "Meowth"],
        correct: "Ninetales"
    },

    {
        question: "Qual Pokémon possui uma forma regional de Galar que é do tipo Sombrio/Fada?",
        answers: ["Moltres", "Articuno", "Zapdos", "Weezing"],
        correct: "Moltres"
    },

    {
        question: "Qual Pokémon possui uma forma regional de Galar que é do tipo Venenoso/Fada?",
        answers: ["Weezing", "Rapidash", "Farfetch'd", "Corsola"],
        correct: "Weezing"
    },

    {
        question: "Qual Pokémon é conhecido por usar uma colher e possuir poderes psíquicos?",
        answers: ["Alakazam", "Kadabra", "Mr. Mime", "Hypno"],
        correct: "Alakazam"
    },

    {
        question: "Qual Pokémon é conhecido por possuir uma cauda em formato de peixe e ser extremamente rápido na água?",
        answers: ["Floatzel", "Golduck", "Vaporeon", "Lumineon"],
        correct: "Floatzel"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Caranguejo e possui o tipo Lutador?",
        answers: ["Crabrawler", "Krabby", "Kingler", "Clauncher"],
        correct: "Crabrawler"
    },

    {
        question: "Qual Pokémon possui a habilidade Speed Boost?",
        answers: ["Ninjask", "Shedinja", "Accelgor", "Yanmega"],
        correct: "Ninjask"
    },

    {
        question: "Qual Pokémon é conhecido por sua habilidade Huge Power?",
        answers: ["Azumarill", "Marill", "Diggersby", "Mawile"],
        correct: "Azumarill"
    },

    {
        question: "Qual Pokémon possui a habilidade Good as Gold?",
        answers: ["Gholdengo", "Gimmighoul", "Kingambit", "Miraidon"],
        correct: "Gholdengo"
    },

    {
        question: "Qual Pokémon possui a habilidade Supreme Overlord?",
        answers: ["Kingambit", "Bisharp", "Gholdengo", "Annihilape"],
        correct: "Kingambit"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Lobo e possui diferentes formas dependendo da hora do dia?",
        answers: ["Lycanroc", "Rockruff", "Zoroark", "Mightyena"],
        correct: "Lycanroc"
    },

    {
        question: "Qual Pokémon pode ter as formas Midday, Midnight e Dusk?",
        answers: ["Lycanroc", "Rockruff", "Solgaleo", "Lunala"],
        correct: "Lycanroc"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Poltergeist?",
        answers: ["Sinistea", "Polteageist", "Mimikyu", "Banette"],
        correct: "Polteageist"
    },

    {
        question: "Qual Pokémon é literalmente uma xícara de chá possuída?",
        answers: ["Sinistea", "Polteageist", "Gothita", "Mimikyu"],
        correct: "Sinistea"
    },

    {
        question: "Qual Pokémon possui duas formas diferentes dependendo de sua origem, Antique ou Phony?",
        answers: ["Sinistea", "Polteageist", "Basculin", "Alcremie"],
        correct: "Sinistea"
    },

    {
        question: "Qual Pokémon é conhecido por sua grande quantidade de diferentes decorações de bolo?",
        answers: ["Alcremie", "Milcery", "Slurpuff", "Vanilluxe"],
        correct: "Alcremie"
    },

    {
        question: "Qual Pokémon pode mudar de forma dependendo do tipo de item que segura?",
        answers: ["Arceus", "Silvally", "Genesect", "Rotom"],
        correct: "Arceus"
    },

    {
        question: "Qual Pokémon possui diferentes formas relacionadas a aparelhos eletrônicos?",
        answers: ["Rotom", "Porygon", "Magnezone", "Klinklang"],
        correct: "Rotom"
    },

    {
        question: "Qual Pokémon pode assumir formas de diferentes aparelhos domésticos?",
        answers: ["Rotom", "Porygon-Z", "Ditto", "Meltan"],
        correct: "Rotom"
    },

    {
        question: "Qual Pokémon é conhecido por ser extremamente pesado e possuir o tipo Aço/Psíquico?",
        answers: ["Metagross", "Aggron", "Bronzong", "Steelix"],
        correct: "Metagross"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Ferro-Cobra?",
        answers: ["Steelix", "Onix", "Orthworm", "Serperior"],
        correct: "Steelix"
    },

    {
        question: "Qual Pokémon evolui de Onix quando é trocado segurando Metal Coat?",
        answers: ["Steelix", "Scizor", "Klefki", "Aggron"],
        correct: "Steelix"
    },

    {
        question: "Qual Pokémon é conhecido como o Pokémon Imitação?",
        answers: ["Mimic?"],
        correct: "Mimic?"
    }

];


/*
    Corrige a última pergunta para evitar uma questão
    inválida caso ela seja carregada.
*/

questions.pop();


/* =========================================================
   VARIÁVEIS DO QUIZ
========================================================= */

const quizStart = document.getElementById("quiz-start");
const quizGame = document.getElementById("quiz-game");
const quizResult = document.getElementById("quiz-result");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

const questionNumberElement =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const progressBar =
    document.getElementById("progress-bar");

const finalScore =
    document.getElementById("final-score");

const finalMessage =
    document.getElementById("final-message");


let quizQuestions = [];

let currentQuestion = 0;

let score = 0;


/* =========================================================
   EMBARALHAR
========================================================= */

function shuffle(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const randomIndex =
            Math.floor(Math.random() * (i + 1));

        [
            shuffled[i],
            shuffled[randomIndex]
        ] = [
            shuffled[randomIndex],
            shuffled[i]
        ];
    }

    return shuffled;
}


/* =========================================================
   INICIAR QUIZ
========================================================= */

function startQuiz() {

    quizQuestions = shuffle(questions);

    currentQuestion = 0;

    score = 0;

    quizStart.classList.add("hidden");

    quizResult.classList.add("hidden");

    quizGame.classList.remove("hidden");

    scoreElement.textContent =
        "Pontos: 0";

    showQuestion();
}


/* =========================================================
   MOSTRAR PERGUNTA
========================================================= */

function showQuestion() {

    nextButton.classList.add("hidden");

    answersElement.innerHTML = "";

    const question =
        quizQuestions[currentQuestion];

    questionNumberElement.textContent =
        `Pergunta ${currentQuestion + 1} de ${quizQuestions.length}`;

    questionElement.textContent =
        question.question;

    progressBar.style.width =
        `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;


    const shuffledAnswers =
        shuffle(question.answers);


    shuffledAnswers.forEach(answer => {

        const button =
            document.createElement("button");

        button.classList.add("answer-button");

        button.textContent = answer;

        button.addEventListener(
            "click",
            () => selectAnswer(button, answer)
        );

        answersElement.appendChild(button);

    });
}


/* =========================================================
   SELECIONAR RESPOSTA
========================================================= */

function selectAnswer(button, answer) {

    const question =
        quizQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-button");


    buttons.forEach(btn => {

        btn.disabled = true;

        if (btn.textContent === question.correct) {
            btn.classList.add("correct");
        }

    });


    if (answer === question.correct) {

        button.classList.add("correct");

        score++;

        scoreElement.textContent =
            `Pontos: ${score}`;

    } else {

        button.classList.add("wrong");

    }


    nextButton.classList.remove("hidden");
}


/* =========================================================
   PRÓXIMA PERGUNTA
========================================================= */

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {

        finishQuiz();

        return;
    }

    showQuestion();
}


/* =========================================================
   FINALIZAR QUIZ
========================================================= */

function finishQuiz() {

    quizGame.classList.add("hidden");

    quizResult.classList.remove("hidden");


    const total =
        quizQuestions.length;

    const percentage =
        Math.round((score / total) * 100);


    finalScore.textContent =
        `Você acertou ${score} de ${total} perguntas (${percentage}%).`;


    if (percentage === 100) {

        finalMessage.textContent =
            "PERFEITO! Você é praticamente um Professor Pokémon! 🏆";

    } else if (percentage >= 80) {

        finalMessage.textContent =
            "Excelente! Você conhece MUITO sobre Pokémon! 🔥";

    } else if (percentage >= 60) {

        finalMessage.textContent =
            "Muito bom! Você é um ótimo treinador! ⚡";

    } else if (percentage >= 40) {

        finalMessage.textContent =
            "Nada mal! Ainda há alguns conhecimentos para treinar. 🎒";

    } else {

        finalMessage.textContent =
            "Parece que está na hora de estudar a Pokédex! 📖";

    }
}


/* =========================================================
   EVENTOS DO QUIZ
========================================================= */

startButton.addEventListener(
    "click",
    startQuiz
);

nextButton.addEventListener(
    "click",
    nextQuestion
);

restartButton.addEventListener(
    "click",
    startQuiz
);


/* =========================================================
   POKEDEX
========================================================= */

const pokemonContainer =
    document.getElementById("pokemon-container");

const searchInput =
    document.getElementById("search");

const generationFilter =
    document.getElementById("generation-filter");

const pokemonCount =
    document.getElementById("pokemon-count");


let allPokemon = [];


/* =========================================================
   GERAÇÕES
========================================================= */

const generations = {

    1: {
        start: 1,
        end: 151
    },

    2: {
        start: 152,
        end: 251
    },

    3: {
        start: 252,
        end: 386
    },

    4: {
        start: 387,
        end: 493
    },

    5: {
        start: 494,
        end: 649
    },

    6: {
        start: 650,
        end: 721
    },

    7: {
        start: 722,
        end: 809
    },

    8: {
        start: 810,
        end: 905
    },

    9: {
        start: 906,
        end: 1025
    }

};


/* =========================================================
   CARREGAR POKÉMON
========================================================= */

async function loadPokemon() {

    pokemonCount.textContent =
        "Carregando os 1025 Pokémon...";


    try {

        const response =
            await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=1025"
            );

        const data =
            await response.json();


        const pokemonList =
            data.results;


        /*
            Carrega os detalhes em lotes para evitar
            fazer 1025 requisições ao mesmo tempo.
        */

        const batchSize = 50;

        for (
            let i = 0;
            i < pokemonList.length;
            i += batchSize
        ) {

            const batch =
                pokemonList.slice(
                    i,
                    i + batchSize
                );


            const batchData =
                await Promise.all(

                    batch.map(async pokemon => {

                        const response =
                            await fetch(pokemon.url);

                        return await response.json();

                    })

                );


            allPokemon.push(...batchData);


            pokemonCount.textContent =
                `Carregando... ${allPokemon.length} / 1025`;

            displayPokemon(allPokemon);

        }


        pokemonCount.textContent =
            `Mostrando ${allPokemon.length} Pokémon`;


    } catch (error) {

        console.error(error);

        pokemonCount.textContent =
            "Erro ao carregar a Pokédex.";

        pokemonContainer.innerHTML = `
            <p class="error-message">
                Não foi possível carregar os Pokémon.
                Verifique sua conexão com a internet.
            </p>
        `;
    }
}


/* =========================================================
   MOSTRAR POKÉMON
========================================================= */

function displayPokemon(pokemonList) {

    pokemonContainer.innerHTML = "";


    pokemonList.forEach(pokemon => {

        const card =
            document.createElement("div");

        card.classList.add("pokemon-card");


        const number =
            String(pokemon.id).padStart(4, "0");


        const types =
            pokemon.types.map(typeData => {

                const type =
                    typeData.type.name;

                return `
                    <span class="type type-${type}">
                        ${translateType(type)}
                    </span>
                `;

            }).join("");


        card.innerHTML = `

            <img
                src="${pokemon.sprites.other["official-artwork"].front_default}"
                alt="${pokemon.name}"
                loading="lazy"
            >

            <div class="pokemon-number">
                #${number}
            </div>

            <div class="pokemon-name">
                ${capitalize(pokemon.name)}
            </div>

            <div class="types">
                ${types}
            </div>

        `;


        pokemonContainer.appendChild(card);

    });


    pokemonCount.textContent =
        `Mostrando ${pokemonList.length} Pokémon`;
}


/* =========================================================
   TRADUZIR TIPOS
========================================================= */

function translateType(type) {

    const types = {

        normal: "Normal",
        fire: "Fogo",
        water: "Água",
        electric: "Elétrico",
        grass: "Grama",
        ice: "Gelo",
        fighting: "Lutador",
        poison: "Veneno",
        ground: "Terrestre",
        flying: "Voador",
        psychic: "Psíquico",
        bug: "Inseto",
        rock: "Pedra",
        ghost: "Fantasma",
        dragon: "Dragão",
        dark: "Sombrio",
        steel: "Aço",
        fairy: "Fada"

    };


    return types[type] || type;
}


/* =========================================================
   CAPITALIZAR
========================================================= */

function capitalize(text) {

    return text.charAt(0).toUpperCase()
        + text.slice(1);

}


/* =========================================================
   FILTRAR POKÉMON
========================================================= */

function filterPokemon() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const generation =
        generationFilter.value;


    let filteredPokemon =
        allPokemon.filter(pokemon => {

            const matchesSearch =
                pokemon.name
                    .toLowerCase()
                    .includes(search);


            let matchesGeneration = true;


            if (generation !== "all") {

                const range =
                    generations[generation];


                matchesGeneration =
                    pokemon.id >= range.start &&
                    pokemon.id <= range.end;

            }


            return (
                matchesSearch &&
                matchesGeneration
            );

        });


    displayPokemon(filteredPokemon);
}


/* =========================================================
   EVENTOS DA POKEDEX
========================================================= */

searchInput.addEventListener(
    "input",
    filterPokemon
);

generationFilter.addEventListener(
    "change",
    filterPokemon
);


/* =========================================================
   INICIAR POKEDEX
========================================================= */

loadPokemon();