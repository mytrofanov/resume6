import s from './About.module.css'
import {Cube} from "../cube/Cube";

export function About() {
    let now = new Date(); //Текущая дата
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    let dob = new Date(1978, 4, 28); //Дата рождения
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age; //Возраст

//Возраст = текущий год - год рождения
    age = today.getFullYear() - dob.getFullYear();
//Если ДР в этом году ещё предстоит, то вычитаем из age один год
    if (today < dobnow) {
        age = age - 1;
    }


    return (
        <div className={s.AboutAll}>
            {/*=================================Раздел обо мне=========================*/}
            <div className={s.AboutMe}>
                <div className={s.AboutText}>
                    About Me
                    {/*Линия подчеркивания*/}
                    <div className={s.Divider}/>
                    {/*Линия подчеркивания*/}
                    <div className={s.AboutTextBlock}>
                        Marital status: married, Have two kids(boys),
                        Hobby: Blogging, Hunting, Sport, Reading
                    </div>
                    <div className={s.AboutMeBlock}>
                        <b>Name:</b> Maxym Mytrofanov
                        <div className={s.AboutMeItem}>
                            <b>Age:</b> {age} Years
                        </div>

                        <div className={s.AboutMeItem}>
                            <b>Email:</b> MytrofanovMaxym@gmail.com
                        </div>
                        <div className={s.AboutMeItem}>
                            <b>Youtube:</b> <a target="_blank" rel="noreferrer"
                                               href={'https://www.youtube.com/channel/UCRnAwO395rTOwPZbIV5RTog'}>
                            My channel in YouTube</a>


                        </div>
                        <div className={s.AboutMeItem}>
                            <b>Adress:</b> Ukraine, Kryvyi Rih city, 50082
                        </div>


                    </div>
                </div>
                <div className={s.cube}>
                    <Cube/>
                </div>
            </div>

            {/*Раздел опыт работы*/}
            <div className={s.WorkExperience}>
                Work Experience
                {/*Линия подчеркивания*/}
                <div className={s.Divider}/>
                {/*Линия подчеркивания*/}

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


            {/*============================Раздел образование==========================*/}

            <div className={s.WorkExperience}>
                Education
                {/*Линия подчеркивания*/}
                <div className={s.Divider}/>
                {/*Линия подчеркивания*/}

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

            {/*========================= Skills ===================================*/}
            <div className={s.Skills}>
                <div className={s.SkillsHeader}>
                    My Skills
                    {/*Линия подчеркивания*/}
                    <div className={s.Divider}/>
                    {/*Линия подчеркивания*/}
                </div>
            <div className={s.SkillsSlider}>
            Slider
            </div>


            </div>


        </div>
    )

}
