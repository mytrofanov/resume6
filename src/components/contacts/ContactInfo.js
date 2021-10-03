import s from './ContactInfo.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export function ContactInfo() {
    return (
        <div>
            <div className={s.ContactInfo}>

                <div className={s.InfoBlock}>
                    <div className={s.icon}>
                        <HomeOutlinedIcon
                            sx={{
                                fontSize: 40
                            }}/>
                    </div>
                    <div>
                        <h3>Location</h3>
                        Ukraine, Kryvyi Rih city, 50082
                    </div>
                </div>

                <div className={s.InfoBlock}>
                    <div className={s.icon}>
                        <SendOutlinedIcon
                            sx={{
                                fontSize: 40,
                                transform: "rotate(310deg)"
                            }}
                        />
                    </div>
                    <div><h3>Location</h3>
                        Ukraine, Kryvyi Rih city, 50082</div>
                </div>

                <div className={s.InfoBlock}>
                    <div className={s.icon}>
                        <LocalPhoneOutlinedIcon
                            sx={{
                                fontSize: 40,
                                transform: "rotate(90deg)"
                            }}
                        />
                    </div>
                    <div>
                        <h3>Location</h3>
                        Ukraine, Kryvyi Rih city, 50082</div>
                </div>



            </div>
        </div>



    )
}