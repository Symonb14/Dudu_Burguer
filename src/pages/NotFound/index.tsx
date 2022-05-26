import styles from './notFound.module.scss'
import { ReactComponent as NotFoundLogo } from 'assets/not_found.svg'
import classNames from 'classnames'
import stylesTema from 'styles/tema.module.scss'
import { useNavigate } from 'react-router-dom'
import { callbackify } from 'util'

export default function NotFound(){
    const navigate = useNavigate();

    return(
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true
        })}>
            <div className={styles.voltar}>
                <button onClick={() => navigate( -1 )}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundLogo />
        </div>
    )
}