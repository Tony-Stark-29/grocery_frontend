import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import "./whishList.css";
import toast,{Toaster} from 'react-hot-toast';


export const AddtoWhishListBtn = () => {

    const handleAddtoWhishList=()=>{

        toast.success("Added to whishlist");

    }

  return (
     <>
        <button className=' btn-liked-success rounded-circle' onClick={handleAddtoWhishList} ><FontAwesomeIcon icon={faHeart} /></button>
        <Toaster/>
     </>
  )
}
