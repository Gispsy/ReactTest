import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommandation'

function Banner() {

    const title ="La maison jungle"

    return(

        <div className="lmj-banner">
            <div>
                <img src={logo} alt="La maison jungle logo" className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>
            <Recommendation />
        </div>
    )
}                                                                                                                                                                        

export default Banner