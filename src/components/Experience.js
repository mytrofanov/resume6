import s from "./about/About.module.css";

export const Experience = () => {
    return (
        <div className={s.AboutAll}>
            <div className={s.WorkExperience}>
                Work Experience
                {/*Линия подчеркивания*/}
                <div className={s.Divider}/>
                {/*Линия подчеркивания*/}

                <div className={s.BlackBlock}>
                    <div className={s.BlackBlockHeader}>2022 jan -till now --- Junior Front End Developer ---</div>
                    <div className={s.BlackBlockText}>
                        Made Pet-project (Backend & FrontEnd) with  React, NodeJs, MobX, React Bootstrap,
                        PostgreSQL,Sequelize, axios, react-hooks, etc.
                        <div>see portfolio ... </div>
                    </div>

                </div>
                <div className={s.BlackBlock}>
                    <div className={s.BlackBlockHeader}>2020-till now --- Front End Developer ---</div>
                    <div className={s.BlackBlockText}>
                        I've started to learn Development from November 2020. Now I can show
                        a few projects on a Portfolio page that were made using React, Redux, JavaScript,
                        TypeScript, CSS, Ajax, API, cookie, react-hook-form, Material-UI and Git
                    </div>

                </div>

                <div className={s.BlackBlock}>
                    <div className={s.BlackBlockHeader}>2015-2021 Heavy truck driver</div>
                    <div className={s.BlackBlockText}>
                        On this position I've learned how to work hard and how to become strong with your body and your
                        mind.

                    </div>

                </div>

                <div className={s.BlackBlock}>
                    <div className={s.BlackBlockHeader}>2002-2015 Bank manager</div>
                    <div className={s.BlackBlockText}>
                        I have been working in financial institutions and have a relevant knowledge.
                        <div>
                            Worked in: Pravex-Bank, SwedBank, Ukreximbank, Universalbank, Sberbank
                            and LLC "Favorit Capital" (trademark "Family Credit")
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}