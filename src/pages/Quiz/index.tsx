import { useState } from "react";
import QuizOption from "../../components/OptionItem";
import "./styles.css";

interface Question {
  questionText: string;
  options: string[];
}

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const questions: Question[] = [
    {
      questionText:
        "When faced with an unexpected path, which direction do you choose?",
      options: ["⬅️ Left", "➡️ Right", "⬆️ Forward", "⬇️ Back"],
    },
    {
      questionText: "What do you bring on a journey into the unknown?",
      options: ["🗺️ A map", "👫 A companion", "⚔️ A weapon", "📖 A book"],
    },
    {
      questionText: "What color sky excites you the most?",
      options: [
        "🔵 Clear blue",
        "🟠 Sunset orange",
        "🌌 Starry night",
        "🌩️ Stormy gray",
      ],
    },
    {
      questionText: "Which mythical creature would you want as an ally?",
      options: ["🐉 Dragon", "🦅 Phoenix", "🦄 Unicorn", "🦁 Griffin"],
    },
    {
      questionText: "What type of environment calls to you?",
      options: ["⛰️ Mountains", "🌲 Forest", "🏜️ Desert", "🌊 Ocean"],
    },
    {
      questionText: "When you hear a mysterious sound, what do you do?",
      options: ["🔍 Investigate", "🙈 Hide", "🏃 Run", "🗣️ Call for help"],
    },
    {
      questionText: "Which element resonates with you the most?",
      options: ["🔥 Fire", "💧 Water", "🌍 Earth", "🌬️ Air"],
    },
    {
      questionText: "What kind of footwear do you prefer on an adventure?",
      options: [
        "🥾 Sturdy boots",
        "🩴 Comfortable sandals",
        "👣 Barefoot",
        "👟 Sneakers",
      ],
    },
    {
      questionText:
        "What is your preferred time of day to embark on a journey?",
      options: ["🌅 Dawn", "🌞 Noon", "🌇 Dusk", "🌙 Midnight"],
    },
    {
      questionText: "What motivates you to go on an adventure?",
      options: ["🔍 Discovery", "⚔️ Challenge", "🏃 Escape", "🤔 Curiosity"],
    },
    {
      questionText: "Which season inspires your adventurous spirit?",
      options: ["🌸 Spring", "🌞 Summer", "🍂 Autumn", "❄️ Winter"],
    },
    {
      questionText: "What kind of terrain do you find most challenging?",
      options: ["🪨 Rocky", "🌾 Swampy", "❄️ Snowy", "🏜️ Sandy"],
    },
    {
      questionText: "How do you handle obstacles in your path?",
      options: [
        "🧗 Climb over",
        "🚶 Go around",
        "🔨 Break through",
        "↩️ Turn back",
      ],
    },
    {
      questionText: "What is your preferred mode of transportation?",
      options: ["🚗 By car", "🚶 On foot", "⛵ By boat", "✈️ By air"],
    },
    {
      questionText: "What kind of weather do you enjoy the most?",
      options: ["☀️ Sunny", "🌧️ Rainy", "🌬️ Windy", "❄️ Snowy"],
    },
    {
      questionText: "Which historical figure do you admire the most?",
      options: ["🗺️ Explorer", "🛡️ Warrior", "📚 Philosopher", "🔬 Inventor"],
    },
    {
      questionText: "What is your favorite type of food on an adventure?",
      options: [
        "🍇 Dried fruits",
        "🥩 Jerky",
        "🍞 Bread and cheese",
        "🥜 Trail mix",
      ],
    },
    {
      questionText: "What kind of shelter do you prefer?",
      options: ["⛺ Tent", "🏚️ Cave", "🏠 Cabin", "🌌 Under the stars"],
    },
    {
      questionText: "What do you do when you get lost?",
      options: [
        "🔄 Retrace your steps",
        "➡️ Keep going forward",
        "🗣️ Ask for help",
        "🛑 Stay put",
      ],
    },
    {
      questionText: "What is your favorite kind of story?",
      options: ["📖 Adventure", "🔍 Mystery", "🧙‍♂️ Fantasy", "🏺 Historical"],
    },
    {
      questionText: "Which magical artifact would you seek?",
      options: ["🗡️ Sword", "🧿 Amulet", "💍 Ring", "🪄 Staff"],
    },
    {
      questionText: "What do you value most in a travel companion?",
      options: ["❤️ Loyalty", "🦁 Courage", "🧠 Wisdom", "😂 Humor"],
    },
    {
      questionText: "What kind of music do you listen to while traveling?",
      options: ["🎻 Folk", "🎸 Rock", "🎼 Classical", "🎧 Pop"],
    },
    {
      questionText: "What is your approach to new cultures?",
      options: [
        "🤗 Embrace them",
        "👀 Observe them",
        "🔍 Compare them",
        "🚫 Avoid them",
      ],
    },
    {
      questionText: "How do you prepare for an adventure?",
      options: [
        "📚 Research",
        "👜 Pack light",
        "💪 Train physically",
        "🧘‍♂️ Mentally prepare",
      ],
    },
    {
      questionText: "What kind of landscape do you dream of exploring?",
      options: ["🌴 Jungle", "🌾 Savannah", "🏔️ Tundra", "🏜️ Canyon"],
    },
    {
      questionText: "What do you think is the greatest treasure?",
      options: ["📚 Knowledge", "💰 Wealth", "🤝 Friendship", "🗽 Freedom"],
    },
    {
      questionText: "How do you feel about taking risks?",
      options: [
        "😍 Love them",
        "😐 Cautious",
        "😬 Avoid them",
        "🤗 Embrace them",
      ],
    },
    {
      questionText: "What is your ideal adventure duration?",
      options: ["📅 A day", "📆 A week", "📅 A month", "📅 A year"],
    },
    {
      questionText: "What is your preferred source of light in the dark?",
      options: ["🔥 Torch", "🕯️ Lantern", "🌕 Moonlight", "🧚‍♂️ Fireflies"],
    },
    {
      questionText: "How do you find your way?",
      options: ["🧭 Compass", "🌌 Stars", "🧠 Instinct", "🏔️ Landmarks"],
    },
  ];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      alert("Quiz Finished!");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption("");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-app">
      <img className="logo" src="src/assets/logo-2.png" alt="Sun logo" />
      <h1>What kind of adventurer are you?</h1>
      <div className="quiz-app__question">
        <h2>{currentQuestion.questionText}</h2>
        {currentQuestion.options.map((option) => (
          <QuizOption
            key={option}
            option={option}
            onSelect={handleSelect}
            selectedOption={selectedOption}
          />
        ))}
      </div>
      <div className="quiz-app__button-container">
        {currentQuestionIndex === 0 ? null : (
          <button className="quiz-app__button" onClick={handleBack}>
            Back
          </button>
        )}

        <button
          className="quiz-app__button"
          onClick={handleNext}
          disabled={!selectedOption}
        >
          {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
