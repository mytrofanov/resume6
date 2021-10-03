import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import s from './Bottom.module.css'

export function Bottom() {
    return (
        <div className={s.Bread}>
            <div className={s.BreadPieces}>
            <FacebookIcon
                sx={{fontSize: 30,
                         }}
            />
            </div>
            <div className={s.BreadPiecesMid}>
            <InstagramIcon
                sx={{
                    fontSize: 30,
                    }}
            />
            </div>
            <div className={s.BreadPieces}>
            <LinkedInIcon
                sx={{fontSize: 30
                }}
            />
            </div>
        </div>
    )

}