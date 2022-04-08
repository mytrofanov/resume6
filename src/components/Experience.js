import s from "./about/About.module.css";
import {useContext} from "react";
import {Context} from "../App";

export const Experience = () => {
    let language = useContext(Context)
    return (
        <div className={s.AboutAll}>
            <div className={s.WorkExperience}>
                {language === 'English' && 'Work Experience'}
                {language === 'Ukrainian' && 'Досвід Роботи'}
                {/*Линия подчеркивания*/}
                <div className={s.Divider}/>
                {/*Линия подчеркивания*/}

                <div className={s.BlackBlock}>
                    <div className={s.BlackBlockHeader}>
                        {language === 'English' && '2022 jan -till now --- Front End Developer, Freelancer ---'}
                        {language === 'Ukrainian' && '2022 січ -сьогодні --- Junior Front End Developer, Freelancer ---'}
                    </div>
                    <div className={s.BlackBlockText}>
                        {language === 'English' && 'Made Pet-project (Backend & FrontEnd) with  React, NodeJs, MobX, ' +
                            'React Bootstrap,\n' +
                            '                        PostgreSQL,Sequelize, axios, react-hooks, etc.'}
                        {language === 'Ukrainian' && 'Зробив Pet-project (Backend & FrontEnd) з використанням  React, ' +
                            'NodeJs, MobX, React Bootstrap,\n' +
                            '                        PostgreSQL,Sequelize, axios, react-hooks, etc.'}


                        <div>
                            {language === 'English' && 'see portfolio ...'}
                            {language === 'Ukrainian' && 'дивись портфоліо ...'}
                        </div>
                    </div>

                </div>
                <div className={s.BlackBlock}>
                    <div className={s.BlackBlockHeader}>
                        {language === 'English' && '2020-2022--- Front End Developer ---'}
                        {language === 'Ukrainian' && '2020-2022  --- Front End Developer ---'}
                    </div>
                    <div className={s.BlackBlockText}>
                        {language === 'English' && 'I\'ve started to learn Development from November 2020. ' +
                            'Now I can show\n' +
                            '                        a few projects on a Portfolio page that were made using React, ' +
                            'Redux, JavaScript,\n' +
                            '                        TypeScript, CSS, Ajax, API, cookie, react-hook-form, Material-UI ' +
                            'and Git'}
                        {language === 'Ukrainian' && 'Почав вивчати Development з Листопада 2020. Зараз вже маю\n' +
                            '                        декілька проектів в Порфолію в яких використовував: React, Redux, JavaScript,\n' +
                            '                        TypeScript, CSS, Ajax, API, cookie, react-hook-form, Material-UI and Git'}

                    </div>

                </div>

                <div className={s.BlackBlock}>
                    <div className={s.BlackBlockHeader}>
                        {language === 'English' && '2015-2021 Heavy truck driver'}
                        {language === 'Ukrainian' && `2015-2022 Водій надважких вантажівок у кар'єрі`}
                    </div>
                    <div className={s.BlackBlockText}>
                        {language === 'English' && 'On this position I\'ve learned how to work hard and how to become strong with your body and your\n' +
                            '                        mind.'}
                        {language === 'Ukrainian' && `На ції позиції я навчився як зміцнити своє тіло та розум.`}
                    </div>

                </div>

                <div className={s.BlackBlock}>
                    <div className={s.BlackBlockHeader}>
                        {language === 'English' && '2002-2015 Bank manager'}
                        {language === 'Ukrainian' && `2002-2015 менеджер у банку`}
                    </div>
                    <div className={s.BlackBlockText}>
                        {language === 'English' && 'I have been working in financial institutions and have ' +
                            'a relevant knowledge.'}
                        {language === 'Ukrainian' && `Працював у різних банках та маю відповідний досвід.`}

                        <div>
                            {language === 'English' && `Worked in Pravex-Bank, SwedBank, Ukreximbank, Universalbank,
                             Sberbank, Favorit Capital`}
                            {language === 'Ukrainian' && `Працював у: Правекс-Банк, SwedBank, Ukreximbank, 
                            Universalbank, Sberbank, Favorit Capital`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
