import './basic-card.css';

function BasicCard(props) {
  let words = 'words';
  return (
    <div className='basic-card' id={props.id}>
      <p>
        This {props.typeof} has an id of <strong>{props.id}</strong>
      </p>
      <img src={props.imgPath} className='basic-card__img' alt={props.alt} />
      <div className='basic-card__body'>
        {props.date && <span>{props.date}</span>}
        <h5>{props.title}</h5>
        <p className='basic-card__description'>{props.description}</p>
        <a href={props.url}>{props.link}</a>
        <p>
          Positive Reactions: <strong>{props.reactions}</strong>
        </p>
        <p>
          Article created by <strong>{props.firstName}</strong>
        </p>
        <p>
          The title of this article has <strong>{props.array}</strong> {words}
        </p>
      </div>
    </div>
  );
}

export function Lengthofarticles(props) {
  return (
    <p>
      This article has <strong>{props.array}</strong>
    </p>
  );
}

export default BasicCard;
