import './MonsterCard.css';

const MonsterCard = ({card}) => {
    const { id, name, email } = card;
    return <div className='monster-card'>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
};

export default MonsterCard;