import s from "./about/About.module.css";
import {useContext} from "react";
import {Context} from "../App";

export const Education = () => {
    let language = useContext(Context)
  return (
      <div className={s.AboutAll }>
          <div className={s.WorkExperience}>
              {language === 'English'&& 'Education' }
              {language === 'Ukrainian'&& 'Освіта' }

              {/*Devider*/}
              <div className={s.Divider}/>
              {/*Devider*/}

              <div className={s.BlackBlock}>
                  <div className={s.BlackBlockHeader}>
                      {language === 'English'&& '2022 jan - now --- Frontend React Developer, Freelancer  ---' }
                      {language === 'Ukrainian'&& '2022 січ - сьогодні --- Frontend React Developer, Фрілансер  ---' }
                      </div>
                  <div className={s.BlackBlockText}>
                      {language === 'English'&& ' Work with Node JS, MobX, PostgreSQL, etc..., made online-shop (BackEnd & FrontEnd).\n' +
                          '                      You can see it on Portfolio page.' }
                      {language === 'Ukrainian'&& ' Працюю з Node JS, MobX, PostgreSQL та iн. зробив Онлайн-Магазин' +
                          ' (BackEnd & FrontEnd).\n' +
                          '                      Можна глянути на сторінці Портфоліо.' }

                  </div>

              </div>
              <div className={s.BlackBlock}>
                  <div className={s.BlackBlockHeader}>
                      {language === 'English'&& '2021feb - 2022jan --- Frontend React Developer Student ---' }
                      {language === 'Ukrainian'&& '2021лют - 2022 січ ---Вчився на Frontend React Developer  ---' }

                      </div>
                  <div className={s.BlackBlockText}>
                      {language === 'English'&& 'Using YouTube course It-kamasutra.com I\'ve learned React by making social network.\n' +
                          '                      You can see it on Portfolio page.' }
                      {language === 'Ukrainian'&& 'YouTube курси за мотивами сайту It-kamasutra.com. Вивчив React створивши соціальну мережу.\n' +
                          '                      Можна глянути на сторінці Портфоліо.' }

                  </div>

              </div>

              <div className={s.BlackBlock}>
                  <div className={s.BlackBlockHeader}>
                      {language === 'English'&& ' 2020-2021 HTML+CSS+JS Developer Student' }
                      {language === 'Ukrainian'&& ' 2020-2021 Вивчав HTML+CSS+JS  ' }
                     </div>
                  <div className={s.BlackBlockText}>
                      {language === 'English'&& ' Learned HTML5 and CSS3 adaptive design' }
                      {language === 'Ukrainian'&& 'Вивчив HTML5 and CSS3 та адаптивний дизайн' }

                  </div>

              </div>

              <div className={s.BlackBlock}>
                  <div className={s.BlackBlockHeader}>
                      {language === 'English'&& '1997-2002 Institute Of Business Administration' }
                      {language === 'Ukrainian'&& '1997-2002 Інститут Ділового Адміністрування' }
                      </div>
                  <div className={s.BlackBlockText}>
                      {language === 'English'&& 'Specialty: Finance' }
                      {language === 'Ukrainian'&& 'Спеціальність: Фінанси' }
                  </div>

              </div>

          </div>

      </div>

  )
}
