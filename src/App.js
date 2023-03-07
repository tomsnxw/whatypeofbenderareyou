import React,{useState} from 'react';
import './App.css';




function App() {


const results  = [
  {resultOptions: [
    {resultTitle: 'Firebender', resultText:'Fire is the only element that is itself a form of energy. The other bending arts manipulate the energy within their elements but firebenders manipulate their own energy. You have a very strong connection with your passion and your will. Firebending comes from the heart, being able to manipulate it means that you have an immense fire within you that makes you capable of bending thermal and electric energy which results in creating heat, fire and electricity.', resultImg: 'fireb.png', resultGif:'firegif.gif'}]},
  {resultOptions: [
    {resultTitle: 'Earthbender', resultText:"Earth is the element of structure, it's static and moves only under natural laws. It's the foundation on which our world is created. Like Earth, you also have a strong sense of duty and responsibility. Earthbenders have a special bond with nature which makes them capable of sensing and bending the minerals and crystals within it, condensing matter and molding its shape.", resultImg: 'earthb.png', resultGif:'earthgif.gif'}]},
    {resultOptions: [
    {resultTitle: 'Airbender', resultText:"Air is the element of freedom, although it surrounds everything, it's not tied to anything. It's fast and adaptive. Airbenders are able to change the pressure and temperature of air at will. You are an intellectual, flexible and very spiritual person, and you're always looking for the most peaceful way to resolve conflicts. Airbenders learn to detach, allowing them to float and move swiftly against earthly laws.", resultImg: 'airb.png', resultGif:'airgif.gif'}]},
  {resultOptions: [
      {resultTitle: 'Waterbender', resultText:'The first waterbenders learned from the Moon which has the ability to manipulate gravity and the electro-magnetic field. You are an intuitive, sensitive person and you have a very strong connection with your deepest feelings. Water changes and adapts, two principles that every waterbender has to be related to. The deep connection with your inner self is what makes you capable of bending your own polar molecules and creating electro-magnetic fields, moving and changing the state of water.', resultImg: 'waterb.png', resultGif:'watergif.gif'}]},
  {resultOptions: [
      {resultTitle: 'Firebender and Lighting redirector', resultText:'Fire is the only element that is itself a form of energy. The other bending arts manipulate the energy within their elements, but firebenders manipulate their own energy. You have a very strong connection with your passion and your will. But you also have a special connection to your emotions that is innate to a waterbender. Your inmense skill to sense and bend your own energy and the opposite poles within it, grant you the rare ability of lightning redirection.', resultImg: 'lightning.png', resultGif:'lightningif.gif'}]},
  {resultOptions: [
      {resultTitle: 'Plantbender', resultText:'The first waterbenders learned from the Moon which has the ability to manipulate gravity and the electro-magnetic field. You are an intuitive, sensitive person and you have a very strong connection with your deepest feelings, which makes you capable of bending your own polar molecules and creating electro-magnetic fields, moving and changing the state of water. Not only that, but you also have a very special connection with nature which allows you to feel the water inside the plants and take waterbending to another level, being able to control organic matter.', resultImg: 'plantb.png', resultGif:'plantbgif.gif'}]},
  {resultOptions: [
      {resultTitle: 'Bloodbender', resultText:"The first waterbenders learned from the Moon which has the ability to manipulate gravity and the electro-magnetic field. You are an intuitive, sensitive person and you have a very strong connection with your deepest feelings. The deep connection with your inner self is what makes you capable of bending your own polar molecules and creating electro-magnetic fields, moving and changing the state of water. The most powerful technique of waterbending is the power to manipulate an organism's fluids. This is probably the rarest form of bending and has been referred to as the highest level of waterbending. It takes not only a full Moon, but also an extremely advanced waterbender to develop this technique. Although this ability may mark you out as a great waterbender, it has been banned as it threatens free will and violates human rights.", resultImg: 'bloodb.png', resultGif:'bloodgif.gif'}]},
  {resultOptions: [
      {resultTitle: 'Lavabender', resultText:"Earth is the element of structure, it's static and moves only under natural laws. It's the foundation on which our world is created. Like Earth, you also have a strong sense of duty and responsibility. Earthbenders have a special bond with nature that makes them capable of sensing and bending the minerals and crystals within it, condensing matter and molding its shape. But you also possess one of the rarest forms of bending. The special bond you have with your own desire and passion is very similar to that of a firebender. Unlike water or air, heating earth is much more complex and requires an inmense amount of power, but with this inner fire of yours, you have the outstanding ability to melt matter and bend magma.", resultImg: 'lavab.png', resultGif:'lavagif.gif'}]},
  {resultOptions: [
      {resultTitle: 'Metalbender', resultText:"Earth is the element of the structure, it's static and moves only under natural laws. It's the foundation on which our world is created. Like Earth, you also have a strong sense of duty and responsibility. Earthbenders have a special bond with nature that makes them capable of sensing and bending the minerals and crystals within it, condensing matter and molding its shape. Not only that, but you possess the highest form of earthbending. Since metal is merely earth that has been purified and refined. Your bond with this element is so powerful that it allows you to perceive the traces of raw, unpurified earth that are still present in the metal and use them to bend it.", resultImg: 'metalb.png', resultGif:'metal.gif'}]},
  {resultOptions: [
      {resultTitle: 'Combustionbender', resultText:"Fire is the only element that is itself a form of energy. The other bending arts manipulate the energy within their elements but firebenders manipulate their own energy. Firebending comes from the heart, being able to manipulate it means that you have an immense fire within you. Although not only is your heart strong, but you also have a very particular mental strength. The power that your own mind has is very rare in firebenders and more similar to that of an airbender. This combination grants you the rare skill to firebend telekinetically. It consists of the ability to channel chi through the forehead, superheating the surrounding air and producing an emission of explosive energy. Unlike conventional firebending, which produces a flame from the body, this technique creates powerful beams that explode on contact with a solid surface.", resultImg: 'combustion.png', resultGif:'combustiongif.gif'}]},
  ]

  
const questions = [

  {
    questionText: 'What do you think is your best trait?',
    answerOptions: [
      { answerText: 'My open mind', value: 3},
      { answerText: 'My motivation', value: 1},
      { answerText: 'How responsible I can be', value:2},
      { answerText: 'My emotional intuition', value:4},
    ]
  },
  {
    questionText: 'What do you think is your worst trait?',
    answerOptions: [
      
      { answerText: 'I am very stubborn sometimes', value: 2},
      { answerText: 'How arrogant I can be', value: 1},
      { answerText: 'I can be very resentful', value: 4},
      { answerText: 'I struggle a lot with indecision', value: 3},
    ]
  },
  {
    questionText: 'What bothers you most in the world?',
    answerOptions: [
      { answerText: 'Injustice', value: 1},
      { answerText: 'Ignorance', value: 3},
      { answerText: 'Selfishness', value: 4},
      { answerText: 'Laziness', value: 2},
    ]
  },
  {
    questionText: 'How do you think Justice is achieved?',
    answerOptions: [
      { answerText: 'Justice is a matter of upholding the rights and responsibilities of each individual and maintaining a harmonious balance between them.', value: 2},
      { answerText: 'Justice is a process of understanding and healing, in which all parties are listened to and their needs are taken into account.', value: 4},
      { answerText: 'Justice is a process of dialogue and negotiation, in which all parties are free to express their views and come to a mutually beneficial agreement.', value: 3},
      { answerText: 'Justice is a powerful and transformative process that demands action and courage.', value: 1},
    ]
  },
  {
    questionText: 'What would be the political and social system of what you consider an utopia?',
    answerOptions: [
      { answerText: 'A society that provides a solid foundation for its members, granting them access to basic needs and allows them to rely on each other.', value: 2},
      { answerText: 'A society that values diversity, encourages open communication and creative expression, and is committed to individual freedom and collective decision-making.', value: 3},
      { answerText: "An empathetic and compassionate society that encourages people to connect on a deep level and respond to each other's needs.", value: 4},
      { answerText: 'A society based on social justice, that is driven by a sense of purpose and vitality, and is focused on creating a more equitable and sustainable world.', value: 1},
      { answerText: 'A state based on  meritocracy, which seeks to use evidence-based decision-making and new technologies to solve complex problems.', value: 3},
      { answerText: 'A system which prioritizes personal freedom and direct action over government intervention or regulation.', value: 1},
    ]
  },
  {
    questionText: 'What are you seeking the most in life?',
    answerOptions: [
      { answerText: 'New experiences', value: 1},
      { answerText: 'Freedom', value: 3},
      { answerText: 'Love', value:4},
      { answerText: 'Knowledge', value: 3},
      { answerText: 'Stability', value:2},
      { answerText: 'Acknowledgment', value: 1},
      { answerText: 'Healing', value:4},
    ]
  },
  {
    questionText: 'Which of these types of games entertain you the most?',
    answerOptions: [
      { answerText: 'Sport games', value: 1},
      { answerText: 'Strategy games', value: 2},
      { answerText: 'Role-playing games', value: 4},
      { answerText: 'Videogames', value: [1,3]},
      { answerText: 'Puzzle games', value: 3},
    ]
  },
  {
    questionText: 'Which one of the five senses are you most connected to?',
    answerOptions: [
      { answerText: 'Touch', value: 2},
      { answerText: 'Sight', value: 1},
      { answerText: 'Hearing', value: 4},
      { answerText: 'Smell', value: 3},
      { answerText: 'Taste', value: 2},
    ]
  },
  {
    questionText: 'What do you struggle with the most?',
    answerOptions: [
      { answerText: 'Change', value: 2},
      { answerText: 'Stagnation', value: 4},
      { answerText: 'Consistency', value:3},
      { answerText: 'Patience', value:1},
    ]
  },
  {
    questionText: 'Which of these artistic expressions do you feel most comfortable with?',
    answerOptions: [
      { answerText: 'Hand drawing', value: 2},
      { answerText: 'Dance', value: [1,2]},
      { answerText: 'Writing', value: 3},
      { answerText: 'Painting', value: [2,4]},
      { answerText: 'Music', value: 4},
      { answerText: 'Pottery/Sculpture', value: 2},
      { answerText: 'Digital art', value: 3},
    ]
  },
  {
    questionText: 'What love language suits you the most?',
    answerOptions: [
      { answerText: 'Words of affirmation', value: 3},
      { answerText: 'Physical touch', value: 1},
      { answerText: 'Receiving gifts', value: 2},
      { answerText: 'Quality time', value: 4},
      { answerText: 'Acts of service', value: 2},
    ]
  },
  {
    questionText: 'What is Destiny for you?',
    answerOptions: [
      { answerText: 'Our destiny is somehow rooted in our physical existence and the circumstances of our lives.', value: 2},
      { answerText: 'Destiny is shaped by the stories we tell ourselves and the beliefs we hold about who we are and what we are capable of.', value: 3},
      { answerText: 'Destiny is not predetermined, but rather something that we create through our actions and choices.', value: 1},
      { answerText: 'Destiny is shaped by our deepest desires and longings, as well as our fears and doubts.', value: 4},
    ]
  },
  {
    questionText: 'Which of these natural disasters best suits your temperament?',
    answerOptions: [
      { answerText: 'Hurricane', value: [3,4]},
      { answerText: 'Thunderstorm', value: [1,4]},
      { answerText: 'Earthquake', value:2},
      { answerText: 'Wildfire', value:1},
      { answerText: 'Tornado', value:3},
      { answerText: 'Volcanic Eruption', value:[1,2]},
      { answerText: 'Tsumani', value:4},
    ]
  },
  {
    questionText: "Do you think the Avatar, as protector of balance in the world, should be willing to kill whoever extremely threatens it?",
    answerOptions: [
      { answerText: 'The Avatar is above earthly laws and their duty is to do whatever it takes to protect peace.', value: 2},
      { answerText: 'In extreme situations, the Avatar must do whatever is necessary to protect the world.', value: 4},
      { answerText: 'if lives are at stake, the Avatar must sacrifice even their own principles to defend them.', value:1},
      { answerText: "Only the Avatar has the power to make such a decision and shouldn't be easily criticized.", value:3},
      { answerText: "Not even the Avatar should make that decision, it would only bring more imbalance.", value: 0}
    ]
  },
  {
    questionText: 'What is the best way to learn for you?',
    answerOptions: [
      { answerText: 'I learn best through active participation, experimentation, and taking risks', value: 1},
      { answerText: 'I learn best through reflection, intuition, and adapting to changing circumstances', value: 4},
      { answerText: 'I learn best through hands-on experiences, repetition, and practical applications', value: 2},
      { answerText: 'I learn best through analysis and search for new ideas and perspectives', value: 3},
    ]
  },
  {
    questionText: 'What season suits you the most?',
    answerOptions: [
      { answerText: 'Summer', value: 1},
      { answerText: 'Autumn', value: 2},
      { answerText: 'Winter', value: 4},
      { answerText: 'Spring', value: 3},
    ]
  },
]

const [showQuiz, setShowQuiz] = useState(true);

const [showScore, setShowScore] = useState(false);

const [currentQuestion,setCurrentQuestion]=useState(0);

const [fire, setFire] = useState(0);
const [earth, setEarth] = useState(0);
const [air, setAir] = useState(0);
const [water, setWater] = useState(0);

const [score,setScore]=useState(0);

const startQuiz = () =>{
  setShowQuiz(false)
};

const handleAnswerButtonClick = (value) => {
  if((value===1)|| (value.length === 2 && value.includes(1))){setFire(fire+1)}
  if((value===2)|| (value.length === 2 && value.includes(2))){setEarth(earth+1)}
  if((value===3) || (value.length === 2 && value.includes(3))){setAir(air+1)}
  if((value===4)|| (value.length === 2 && value.includes(4))){setWater(water+1)}

  const nextQuestion = currentQuestion+1;
  if (nextQuestion<questions.length){setCurrentQuestion(nextQuestion);}
   else { 
   if((fire > earth && fire > water && fire > air) && !( water > earth && water > air) && !( air > earth && air > water)) {setScore(0)}
   else if((fire > earth && fire > water && fire > air) && ( water > earth && water > air)){setScore(4)}
   else if((fire > earth && fire > water && fire > air) && ( air > earth && air > water)){setScore(9)}

   else if ((earth>fire && earth>air && earth>water) && !(fire>water && fire>air) && !(fire<2 && air<2 && water<2)){setScore(1)}
   else if ((earth>fire && earth>air && earth>water) && (fire>water && fire>air)){setScore(7)}
   else if ((earth>fire && earth>air && earth>water) && (fire<2 && air<2 && water<2)){setScore(8)}

   
   else if (air>fire && air>earth && air>water){setScore(2)}

   else if ((water>fire && water>earth && water>air) && !(fire<2 && earth<2 && air<2) && !(earth>fire && earth>air)){setScore(3)}
   else if ((water>fire && water>earth && water>air) && (earth>fire && earth>air) ){setScore(5)}
   else if ((water>fire && water>earth && water>air) && (fire<2 && earth<2 && air<2)){setScore(6)}


    setShowScore(true);
};}



return (<div className='App'>
  {showQuiz ? (<div className='start-section'><div className='bendings'> <img className='img fire' src='fireb.png' alt='fire'></img> <img className='img earth'  src='earthb.png' alt='earth'></img><img className='img air' src='airb.png' alt='air'></img> <img className='img water' src='waterb.png' alt='water'></img></div><h1>WHAT TYPE OF BENDER ARE YOU?</h1><button onClick={startQuiz}>Start</button></div>):(
  <div className='Quiz'> {showScore ? (<div className='result-section'> 
  {results[score].resultOptions.map((resultOption)=><div><img alt='resultImg' className='resultImg' width='30%' src={resultOption.resultImg}></img><h2>you are a</h2><h1>{resultOption.resultTitle}</h1><p>{resultOption.resultText}</p><img alt='resultGif' className='resultGif' src={resultOption.resultGif}></img></div>)}
   </div>):(
  <div className='question-section'>
    <div className='question-count'>
      <span>{currentQuestion+1}</span>/{questions.length}
    <div className='question-text'>{questions[currentQuestion].questionText} </div>
  </div>
  <div className='answer-section'>
  {questions[currentQuestion].answerOptions.map((answerOption)=>(<button onClick={()=>handleAnswerButtonClick(answerOption.value)} className='answer'>{answerOption.answerText}</button>))}
  </div>
  </div>
  )}</div>)}
 
</div>);
}

export default App;
