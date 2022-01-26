import s from "./about/About.module.css";

export const Education = () => {
  return (
      <div className={s.AboutAll }>
          <div className={s.WorkExperience}>
              Education
              {/*Линия подчеркивания*/}
              <div className={s.Divider}/>
              {/*Линия подчеркивания*/}

              <div className={s.BlackBlock}>
                  <div className={s.BlackBlockHeader}>2022 jan - now --- Frontend React Developer  ---</div>
                  <div className={s.BlackBlockText}>
                      I've learned Node JS, MobX, PostgreSQL, etc by making online-shop (BackEnd & FrontEnd).
                      You can see it on Portfolio page.
                  </div>

              </div>
              <div className={s.BlackBlock}>
                  <div className={s.BlackBlockHeader}>2021feb - now --- Frontend React Developer Student ---</div>
                  <div className={s.BlackBlockText}>
                      Using YouTube course It-kamasutra.com I've learned React by making social network.
                      You can see it on Portfolio page.
                  </div>

              </div>

              <div className={s.BlackBlock}>
                  <div className={s.BlackBlockHeader}>2020-2021 HTML+CSS Developer Student</div>
                  <div className={s.BlackBlockText}>
                      Learned HTML5 and CSS3 adaptive design
                  </div>

              </div>

              <div className={s.BlackBlock}>
                  <div className={s.BlackBlockHeader}>1997-2002 Institute Of Business Administration</div>
                  <div className={s.BlackBlockText}>
                      Specialty: Finance
                  </div>

              </div>

          </div>

      </div>

  )
}