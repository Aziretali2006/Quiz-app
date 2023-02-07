
import { Button } from '@chakra-ui/react';
import React from 'react';
import { toast } from 'react-toastify';
import { Providers } from '../../provider';
import { Questions } from '../../utils/Question';
import cls from "./index.module.scss";

const Quiz = () => {
  const [currentQuest , setCurrentQuest] = React.useState(0);
  const [chosenOption , setChosenOption] = React.useState("");
  const { setScore , setGameState} = Providers.useAuth();
  const notify = () => toast("Choose the answer!")

  const options = ["optionA" , "optionB" , "optionC" , "optionD"];
  
  const listQuest = Questions[currentQuest];

  const nextQuestion = () => {
    if(chosenOption === listQuest.answer) {
      setScore(prev => prev + 1)
    }

    if(chosenOption !== "") {
      setCurrentQuest(prev => prev + 1)
      setChosenOption("")
    } else {
      notify()
    }
  }

  const finishQuiz = () => {
    if(chosenOption === listQuest.answer) {
      setScore(prev => prev + 1)
    }

    setGameState("end")
  }

  return (
    <div className={cls.quiz_point}>
      <span>{currentQuest}</span>
      <h2>{listQuest.question}</h2>
      <ul>
        {
          options.map(item => (
            <li  
              onClick={() => setChosenOption(item)} 
              key={item}
              className={chosenOption === item ? cls.activeList : ""}
            >
                {listQuest[item]}
            </li>
          ))
        }
      </ul>
      <div className={cls.quiz_point_button}>
        {
          currentQuest === Questions.length - 1
            ? <Button onClick={finishQuiz} colorScheme={"blue"}>Finish Quiz</Button>
            : <Button onClick={nextQuestion} colorScheme={"blue"}>Next Question</Button>
        }
      </div>
    </div>
  )
}

export default Quiz;