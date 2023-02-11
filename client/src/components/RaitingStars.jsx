import React, {useState} from "react";

const StarRating = ({rating, setRating}) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <div className="star text-2xl">&#9733;</div>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
