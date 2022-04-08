import s from "./about/About.module.css";
import Skills from "./skills/Skills";
import {useContext} from "react";
import {Context} from "../App";

export const SkillPage = () => {
    let language = useContext(Context)

  return (
      <div>
          <div className={s.Skills}>
              <div className={s.SkillsHeader}>
                  {language === 'English'&& 'My Skills' }
                  {language === 'Ukrainian'&& 'Мої Навички' }

                  {/*underline*/}
                  <div className={s.Divider}/>
                  {/*underline*/}
              </div>

              <div className={s.SkillsCol}>

                  <div className={s.SkillsSlider}>
                      Javascript
                      <Skills percent={90}/>
                      React+Redux
                      <Skills percent={75}/>
                      MobX
                      <Skills percent={90}/>
                      NodeJs
                      <Skills percent={65}/>
                      TypeScript
                      <Skills percent={85}/>
                      Sequelize
                      <Skills percent={85}/>
                  </div>

                  <div className={s.SkillsSlider}>
                      HTML5/CSS3
                      <Skills percent={90}/>
                      Bootstrap
                      <Skills percent={90}/>
                      Material UI
                      <Skills percent={90}/>
                      Version Control/Git
                      <Skills percent={95}/>
                      Testing and debugging
                      <Skills percent={40}/>
                      PostgreSQL
                      <Skills percent={60}/>
                  </div>
              </div>
          </div>

      </div>
  )
}
