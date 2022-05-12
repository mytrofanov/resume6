import s from './About.module.css'
import {Cube} from "../cube/Cube";
import {Education} from "../Education";
import {Experience} from "../Experience";
import {SkillPage} from "../SkillPage";
import {useContext} from 'react'
import {Context} from "../../App";


export function About() {
    let now = new Date(); //Текущая дата
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    let dob = new Date(1978, 3, 28); //Дата рождения - отсчет месяцев с нуля
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age; //Возраст
    let language = useContext(Context)
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
                    {language === 'English'&& 'About Me' }
                    {language === 'Ukrainian'&& 'Про мене' }

                    {/*Линия подчеркивания*/}
                    <div className={s.Divider}/>
                    {/*Линия подчеркивания*/}
                    <div className={s.AboutTextBlock}>
                        {language === 'English'&& '                        Marital status: married, Have two kids(boys),\n' +
                            '                        Hobby: Blogging, Hunting, Sport, Reading' }
                        {language === 'Ukrainian'&& '                        Сімейний стан: одружений, двоє дітей,\n' +
                            '                        Хоббі: Блог, Мисливство, Спорт, Читання' }


                    </div>
                    <div className={s.AboutMeBlock}>

                        {language === 'English'&& <span> <b>Name:</b> Maxym Mytrofanov</span> }
                        {language === 'Ukrainian'&& <span> <b>Ім'я:</b> Максим Митрофанов</span> }

                        <div className={s.AboutMeItem}>
                            {language === 'English'&& <span><b>Age:</b> {age} Years</span> }
                            {language === 'Ukrainian'&& <span><b>Вік:</b> {age} Років</span> }
                        </div>

                        <div className={s.AboutMeItem}>
                            <b>Email:</b> MytrofanovMaxym@gmail.com
                        </div>
                        <div className={s.AboutMeItem}>
                            {language === 'English'&& <span><b>Youtube:</b> <a target="_blank" rel="noreferrer"
                                                                               href={'https://www.youtube.com/channel/UCRnAwO395rTOwPZbIV5RTog'}>
                            My channel in YouTube</a></span> }
                            {language === 'Ukrainian'&& <span><b>Youtube:</b> <a target="_blank" rel="noreferrer"
                                                                                 href={'https://www.youtube.com/channel/UCRnAwO395rTOwPZbIV5RTog'}>
                            Мій канал на YouTube</a></span> }



                        </div>
                        <div className={s.AboutMeItem}>
                            {language === 'English'&& <span><b>Adress:</b> Ukraine, Kryvyi Rih city, 50082</span> }
                            {language === 'Ukrainian'&& <span><b>Адреса:</b> Україна, місто Кривий Ріг, 50082</span> }

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
