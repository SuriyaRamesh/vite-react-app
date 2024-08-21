import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface LikeProps {
    onClick: () => void;
}

const Like = ({ onClick }  : LikeProps) => {

  const [Like, setLike] = useState(false);  
  const handleClick = () => {
    setLike(!Like);
    onClick();
  }

  return (
    <div>
        {
            Like ? <FaHeart size="30" color="red" onClick={handleClick} /> : <FaRegHeart size="30" onClick={handleClick}  />
        }
    </div>
  )
}

export default Like;
