import '../Page.css';
import silviaImage from '../../assets/silvia.jpg';

function PageJSX() {
    return(
        <div className='wrapper'>
            <h2>Some Header</h2>
            <p>Nissan Silvia S15</p>
            <img src={silviaImage} alt="Nissan Silvia S15" />
        </div>
    );
}

export default PageJSX;