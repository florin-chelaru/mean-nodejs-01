import classes from './Card.module.css';

const Card = (props: Props) =>
  <div className={classes.card}>{props.children}</div>
;

export default Card;