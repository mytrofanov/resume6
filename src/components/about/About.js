import s from './About.module.css'
import {Cube} from "../cube/Cube";
import {Education} from "../Education";
import {Experience} from "../Experience";
import {SkillPage} from "../SkillPage";


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
            <Experience/>

            {/*============================Раздел образование==========================*/}
            <Education/>
            {/*========================= Skills ===================================*/}
            <SkillPage/>


        </div>
    )

}
