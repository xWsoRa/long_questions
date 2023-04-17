const questions = [
    { 
      question: "Relationship between meaning and definition.", 
      answer: "The concept of a word´s meaning is closely linked to the concept of definition. Definitions have been particularly important for conceptual theories of meaning which traditionally assumed a close link between concepts and definitions: knowing the concept horse, for example, is simply the ability to use the word horse in a way that accords with or fits its definition."
    },
    { 
      question: "What is the Mental lexicon? What kind (and amount) of information do entries in the mental dictionary contain?", 
      answer: "According to Jackendoff, the mental lexicon is a store of words in long term memory from which the grammar constructs phrases and sentences. In other words, it is a stock of words as associated meanings that our brain holds (like a mental dictionary). It can hold much more detailed information than ordinary dictionaries, like grammatical properties, phonological structure, lexical relations…" 
    },
    { 
      question: "What is the difference between semasiological and Onomasiological approach to meaning?", 
      answer: "Semasiological approach to meaning starts with a language´s indivudual lexemes and tries to specify the meaning of each one.The definitions found in dictionaries are the result of a wordbased. However, Onomasiological definitions have the opposite logic: start with a particular meaning, and list the various forms avalaible in the language for its expression. In summary, semasiology goes from term to concept and  onomasiology goes from concept to term. The first one is used in lexicological work (dictionaries), and the second one is used in lexicological work (dictionaries) terminology work." 
    },
    { 
      question: "Define word and morpheme. What is the difference between these units?", 
      answer: "A word is a linguistic unit which is isolated by a pause, which we can find before and after a word in the spoken language and a blank space is written language. On the other hand, a morpheme is the smallest grammatical unit in language. The principal difference between the two is that a morpheme may or may not stand alone, whereas a word, by definition, is freestanding. Also, every word comprises one or more morphemes." 
    },
    { 
      question: "What is  Phono-semantics and what does it study?", 
      answer: "Phono-semantics or ideophony is the ability of speech sounds, their signs or intonation, to directly express meaning. It studies the existence of semi-systematic correspondences between certain sounds and certain meanings, usually within the domain of the individual morpheme. such as English clash, clang, clatter, etc." 
    },
    { 
      question: "Meaning above the word level: idioms. Give examples.", 
      answer: "Idioms are non-compositional phrases- phrases whose overall meaning is not the same as the combined meaning of the individual parts.  For example,  phrases like throw in the towel or it is raining cats and dogs are idioms." 
    },
    { 
      question: "Contextual modulation of meaning. Give examples.", 
      answer: "The contextual modulation of meaning, according to Cruse, is a phenomenon in which the meaning of words and other morphemes vary according to their collocation, the immediate linguistic context in which they occur. For example, the meaning of the verb to cut varies according to the noun on which its action falls; cut a deal, cut the grass, cut a paragraph or cut prices. Despite this variation, we have the strong sense that essentially the “same” meaning of cut is involved in all those cases." 
    },
    { 
      question: "What is the difference between real and nominal definitions?", 
      answer: "Defining is either giving the meaning of words or other linguistic things, which is called “nominal definition” or clarifying a given meaning, which is a proposition or property or relation, by showing it to be a compound of other propositions or properties or relations, which is called “real definition”." 
    },
    { 
      question: "What is the definiens and the definiendum?", 
      answer: "The definiens is the metalanguage word proposed as the definition; Latin “defining”, and the definiendum is the object language word for which a definition is required; Latin “needing to be defined”" 
    },
    { 
      question: "Definition by ostensión. Define it. Is it useful to explain meaning? Is it accurate?", 
      answer: "It is an act or process of showing, pointing out, or exhibiting something to define something. It is a simple way of defining, but, in spite of the apparent obviousness of this method, it is beset by difficulties. For example, verbs, adjectives and prepositions are not open to this definitional method; objects that are not present or non-tangeable ideas are impossible to define."
    },
	{ 
		question: "Definition by synonymy. Define it. Is it useful to explain meaning? Is it accurate? Give an example.", 
		answer: "To define words by providing synonyms, in either the same language as the word being defined or in a different one. For example, using the words mad o furioso to define angry. The problem with this strategy is that it is usually possible to challenge the identity between the definiens (the metalanguage word proposed as the definition; Latin “defining”) and the definiemdum (the object language word for which a definition is required; Latin “needing to be defined”)."
	  },
	  { 
		question: "Definition by context. Is it accurate? Give an example.", 
		answer: "To show the position of a definiendum with respect to other related notions which are not themselves identical to it, as alleged synonyms are. A possible definition of the verb scratch, for example, would be “ the type of thing you do when you are itchy”. the definition identifies the event of scratching by placing it in relation to another event, being itchy, whose meaning is assumed to be already known, and which is taken as a typical context for the definiendum. This definition only works if the definition’s addressee correctly infers the intended meaning on the basis of the cue given."
	  },
	  { 
		question: "What are semantic primitives?", 
		answer: "The term 'semantic primes' or semantic primitives refers to a relatively small set of words (<100 words) that specify concepts whose meanings cannot be described in terms of other, simpler, non-semantic-prime words."
	  },
	  { 
		question: "What's the most frequent criticism made to definitions? Why?", 
		answer: "One of the most frequent criticisms of definitional theories of semantics is that no satisfying definition of a word has ever actually been formulated. The scepticism about the existence of definitions is so widespread, in fact, that many researchers in disciplines closely related to linguistics, such as cognitive science and artificial intelligence, have completely abandoned the idea that definitions even exist."
	  },
	  { 
		question: "In which areas of human activity are definitions important? Why?", 
		answer: "Definitions work as the guarantor of the consistency of language, particularly, this happens in science and technology, or in the area of Judicial terms, murder, contract or fraud require clear definitions which fix their denotation by designating exactly what does and does not count as an example of each."
	  },
	  { 
		question: "What about ordinary communicative uses of language?", 
		answer: "Conversations and other examples of language proceed without the need for explicit definition: this is only ever required to resolve confusions. When we ask for clarification about the correct use of a word, nominal definitions of word’s meanings are not usually either solicited or provided. Thus, I can define the meaning of water extensionally as H2O, but if the addressee of the definition has no knowledge of chemistry this definition will not be effective in bringing about an understanding of the word’s meaning. We may be quite able to use a word appropriately, without being able to phrase a satisfactory definition of it: the knowledge enabling correct use is unconscious."
	  },
  ];
  
  let score = 0;
  let questionCounter = 0;
  let usedQuestions = [];
  
  const form = document.getElementById("form");
  const questionElement = document.getElementById("question");
  const answerElement = document.getElementById("answer");
  const resultElement = document.getElementById("result");
  const nextButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");
  
  function getQuestion() {
    if (questionCounter >= 10) {
      endGame();
      return;
    }
  
    const index = Math.floor(Math.random() * questions.length);
    if (usedQuestions.includes(index)) {
      getQuestion();
      return;
    }
    usedQuestions.push(index);
    
    const questionObj = questions[index];
    questionElement.innerHTML = questionObj.question;
    answerElement.value = "";
    resultElement.innerHTML = "";
    nextButton.disabled = true;
  }
  
  function checkAnswer(event) {
    event.preventDefault();
  
    const answer = answerElement.value.trim().toLowerCase();
    const questionObj = questions[usedQuestions[usedQuestions.length - 1]];
    
    if (answer === questionObj.answer) {
      resultElement.innerHTML = "Compare your answer to the following: " + questionObj.answer;
      score++;
      questionCounter++;
    } else {
      resultElement.innerHTML = "Compare your answer to the following: " + questionObj.answer;
      questionCounter++;
    }
  
    nextButton.disabled = false;
  }
  
  form.addEventListener("submit", checkAnswer);
  nextButton.addEventListener("click", getQuestion);
  
  getQuestion();
  