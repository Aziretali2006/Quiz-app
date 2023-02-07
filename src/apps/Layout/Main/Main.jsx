

import React from 'react'
import { Providers } from '../../../provider';
import * as Screen from "../../../screen";
import cls from "./index.module.scss";

const Main = () => {
  const { gameState } = Providers.useAuth();


  return (
    <section className={cls.main_point}>
      {gameState === "start" && <Screen.Start />}
      {gameState === "quiz" && <Screen.Quiz />}
      {gameState === "end" && <Screen.End />}
    </section>
  )
}

export default Main;
