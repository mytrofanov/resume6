import s from './ContactInfo.module.css'
import HomeIcon from '../../images/home_black_24dp.svg'
import PhoneCall from '../../images/call_black_24dp.svg'
import SendIcon from '../../images/send_black_24dp.svg'

export function ContactInfo() {
    return (
        <div>
            <div className={s.ContactInfo}>

                <div className={s.InfoBlock}>
                    <div className={s.icon}>
                        <img src={HomeIcon} alt="Home"/>
                    </div>
                    <div>
                        <h3>Location</h3>
                        Ukraine, Kryvyi Rih city, 50082
                    </div>
                </div>

                <div className={s.InfoBlock}>
                    <div className={s.icon}>
                        <img className={s.Send} src={SendIcon} alt="Send" />
                    </div>
                    <div><h3>Location</h3>
                        Ukraine, Kryvyi Rih city, 50082</div>
                </div>

                <div className={s.InfoBlock}>
                    <div className={s.icon}>
                        <img className={s.Phone} src={PhoneCall} alt="Phone"/>
                    </div>
                    <div>
                        <h3>Location</h3>
                        Ukraine, Kryvyi Rih city, 50082</div>
                </div>



            </div>
        </div>



    )
}