import s from "./about/About.module.css";
import Skills from "./skills/Skills";

export const SkillPage = () => {
  return (
      <div>
          <div className={s.Skills}>
              <div className={s.SkillsHeader}>
                  My Skills
                  {/*Линия подчеркивания*/}
                  <div className={s.Divider}/>
                  {/*Линия подчеркивания*/}
              </div>

              <div className={s.SkillsCol}>

                  <div className={s.SkillsSlider}>
                      Javascript
                      <Skills percent={80}/>
                      React+Redux
                      <Skills percent={75}/>
                      MobX
                      <Skills percent={90}/>
                      NodeJs
                      <Skills percent={65}/>
                      TypeScript
                      <Skills percent={70}/>
                  </div>

                  <div className={s.SkillsSlider}>
                      HTML5/CSS3
                      <Skills percent={90}/>
                      Bootstrap
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