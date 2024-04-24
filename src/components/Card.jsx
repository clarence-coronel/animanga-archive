import PropTypes from 'prop-types'

function Card({ title, img }) {
    return(
        <button className="max-sm:max-w-32 group w-full relative max-w-52 bg-neutral-700 rounded-md flex flex-col overflow-hidden border-2 border-neutral-500">
            <img className='w-full aspect-[4/5] object-fit object-center' src={img} alt="" />
            <h3 className='group-hover:opacity-100 duration-200 opacity-0 absolute left-0 bottom-0 bg-black/90 w-full p-2 text-base text-center'>{title}</h3>
        </button>
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