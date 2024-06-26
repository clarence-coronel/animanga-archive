import PropTypes from 'prop-types'

function Card({ title, img, url }) {

    const truncate = (str, limit) => {
        if(str.length > limit) {
            return str.substring(0, limit) + "..."
        }
        return str
    }

    return(
        <a target='_blank' href={url} className="duration-200 max-sm:max-w-32 group w-full relative max-w-52 dark:bg-neutral-700 bg-neutral-200 rounded-md flex flex-col overflow-hidden border-2 dark:border-neutral-500">
            <img className='w-full aspect-[4/5] object-fit object-center' src={img} alt="" />
            <h3 className='group-hover:opacity-100 duration-200 opacity-0 absolute left-0 bottom-0 text-sm  text-white bg-black/90 w-full p-2 md:text-base text-center' title={title}>{truncate(title,50)}</h3>
        </a>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string
  };
  
Card.defaultProps = {
    title: "Anime Title",
    img: ""
};

export default Card