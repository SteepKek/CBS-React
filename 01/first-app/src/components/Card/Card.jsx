import './Card.css';
import supraImg from '../../assets/supra.png';

function Card() {
    return(
        <div className='card'>
            <img src={supraImg} alt="Toyota Supra A80" className='card-image'/>
            <h2 className='card-title'>Toyota Supra A80</h2>
        </div>
    );
}

export default Card;