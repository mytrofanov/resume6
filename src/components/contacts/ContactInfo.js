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
                                fontSize: 45
                            }}/>
                    </div>
                    <div>
                        <h3 className={s.InfoHeader}>Location</h3>
                        <span className={s.InfoText}>Ukraine, Kryvyi Rih city, 50082 </span>
                    </div>
                </div>

                <div className={s.InfoBlock}>
                    <div className={s.icon}>
                        <SendOutlinedIcon
                            sx={{
                                fontSize: 40,
                                transform: 'rotate(310deg)'
                            }}/>
                    </div>
                    <div>
                        <h3 className={s.InfoHeader}>Email</h3>
                        <span className={s.InfoText}>MytrofanovMaxym@gmail.com </span>
                    </div>
                </div>

                {/*<div className={s.InfoBlock}>*/}
                {/*    <div className={s.icon}>*/}
                {/*        <LocalPhoneOutlinedIcon*/}
                {/*            sx={{*/}
                {/*                fontSize: 40,*/}
                {/*                transform: 'rotate(90deg)'*/}
                {/*            }}/>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h3 className={s.InfoHeader}>Phone Call</h3>*/}
                {/*        <span className={s.InfoText}>+38 (067) 825 35 25 </span>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>
        </div>


    )
}
