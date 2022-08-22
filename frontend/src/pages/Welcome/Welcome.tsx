import './styles.css';
import { Navigation } from '../../components/Navigation/Navigation';
import banner from '../../assets/banner.jpeg';

export function Welcome(){
    return(
        <div className='container-welcome'>
            <h1>Hydro Parts Book</h1>
            <Navigation />
            <div className='container-banner'>
                <img src={banner} alt='Banner'/>
            </div>
        </div>
    )
}