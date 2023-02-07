import { Button } from '@chakra-ui/react';
import React from 'react';
import { Providers } from '../../provider';
import { Questions } from '../../utils/Question';
import cls from "./index.module.scss";

const End = () => {
  const { currentUser , setGameState , score , setScore} = Providers.useAuth();

  const restartQuiz = () => {
    setGameState("start");
    setScore(0)
  }

  return (
    <div className={cls.end_point}>
      <h2>{currentUser?.displayName}</h2>

      <p>{score} / {Questions.length}</p>

      <span>
        {score === Questions.length && "WOW! You are monster"}
        {(score < 3 && score > 1) && "So! Not bad"}
        {(score === 1 )&& "Mm! Okey you need restart"}
        {(score === 0 )&& "Go to Home!"}
      </span>

      <div className={cls.end_point_button}>
        <Button onClick={restartQuiz} colorScheme='blue'>Restart quiz</Button>
      </div>
    </div>
  )
}

export default End;