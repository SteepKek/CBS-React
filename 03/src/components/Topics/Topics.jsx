import './Topics.css';
import Topic from './Topic';

function Topics({data}) {
  return (
    <ul className='Topics'>
        {data.map((obj, i) => (
          <Topic key={i} href={obj.href} title={obj.title}/>
        ))}
    </ul>
  )
}

export default Topics;
