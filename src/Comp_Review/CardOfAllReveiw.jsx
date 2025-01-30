import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { SiClickup } from "react-icons/si";
import { MdOutlineAdsClick } from "react-icons/md";

const CardOfAllReveiw = ({ reviews }) => {

    // eslint-disable-next-line react/prop-types
    const {_id, thumbnail, title, review, rating, publication, genre, email, name } = reviews;

    const Heart = (
        <path
          d="M433.5,67c-25.3-25.3-59-39.3-94.8-39.3s-69.6,14-94.9,39.4l-7.3,7.3l-7.5-7.5
          c-25.4-25.4-59.1-39.4-95-39.4c-35.8,0-69.4,13.9-94.7,39.3C13.9,92.2,0,125.9,0,161.7s14,69.5,39.4,94.8l182.7,182.7
          c3.8,3.8,9,6,14.5,6c5.4,0,10.6-2.2,14.5-6l182.2-182.4c25.4-25.4,39.3-59.1,39.4-94.9S458.8,92.4,433.5,67z M132.5,117.2
          c-23.9,0-43.4,19.5-43.4,43.4c0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-45.8,37.3-83.1,83.1-83.1c11,0,19.9,8.9,19.9,19.9
          C152.4,108.4,143.5,117.2,132.5,117.2z"
        />
      ); // Source: https://www.svgrepo.com/svg/40627/heart
        
      const customStyles = {
        itemShapes: Heart,
        activeFillColor: 'white',
        activeBoxColor: '#696969',
        inactiveFillColor: 'white',
        inactiveBoxColor: '#E0E0E0',
      };
    return (
        <div className="card bg-base-100 shadow-xl mx-auto rounded-md w-full" >
            <figure>
                <img
                    src={thumbnail}
                    className="w-full h-32 cover"
                    alt="thumbnail" />
            </figure>
            <div className="card-body p-2">

                <h2 className="card-title h-12 items-start text-gray-700">{title}</h2>
                <div className="badge badge-neutral bg-gray-600">{genre}</div>
                <div className="text-center ">
         <Rating  style={{ maxWidth: 150,  

          }} value={rating} itemStyles={customStyles}
          transition="position"
          radius="medium"
          spaceInside="large"
          spaceBetween="small" readOnly/>
       
         </div>

                <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-neutral btn-sm bg-gray-600">See More <MdOutlineAdsClick/></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardOfAllReveiw;