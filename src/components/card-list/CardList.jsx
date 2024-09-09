import './CardList.css'
import MonsterCard from '../card/MonsterCard';

const CardList = ({ cards }) => (
    <div className='card-list'>
        {
            cards.map((card)=> <MonsterCard key={card.id} card={card} />)
        }
    </div>
);

export default CardList;