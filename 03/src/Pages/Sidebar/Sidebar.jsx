import './Sidebar.css';
import data from '../../data/data.json';
import Topics from '../../components/Topics/Topics';

const Sidebar = () => {
    return(
        <div className="Sidebar">
            <nav>
                <Topics data={data}/>
            </nav>
        </div>
    );
}

export default Sidebar;