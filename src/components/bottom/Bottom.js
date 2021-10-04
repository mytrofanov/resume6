import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import s from './Bottom.module.css'

export function Bottom() {
    return (
        <div className={s.Bread}>
            <div className={s.BreadPieces}>
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100005637646093">
                    <FacebookIcon
                        sx={{
                            fontSize: 30,
                        }}
                    />
                </a>
            </div>
            <div className={s.BreadPiecesMid}>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/mytrofanovmaxym/?hl=ru">
                <InstagramIcon
                    sx={{
                        fontSize: 30,
                    }}
                />
                </a>
            </div>
            <div className={s.BreadPieces}>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/maksym-mytrofanov-967365215/">
                <LinkedInIcon
                    sx={{
                        fontSize: 30
                    }}
                />
                </a>
            </div>
        </div>
    )

}