import ellipsisImage from '../../assets/images/icon-ellipsis.svg'

const CardInfo = ({title, currentHours, previousHours, date, children}) => {
    return (
        <section className='card'>
            <span className='card__icon'>{children}</span>
            <article className='card__info'>
                <h2 className='card__info__title'>{title}</h2>
                <img className='card__info__ellipsis' src={ellipsisImage} alt="menu" aria-label='menu' role='menu'/>
                <h3 className='card__info__current-time'>{`${currentHours}hrs`}</h3>
                <p className='card__info__previous-time'>{`Last ${date} - ${previousHours}hrs`}</p>
            </article>
        </section>
    )
}
export default CardInfo