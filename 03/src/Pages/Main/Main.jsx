import './Main.css';
import data from '../../data/data.json';
import Articles from '../../components/Articles/Articles';

const Main = () => {
    return(
        <div className="Main">
            <Articles data={data}/>
        </div>
    );
}

export default Main;