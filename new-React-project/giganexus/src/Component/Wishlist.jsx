import React from 'react'
import '../css/wishlist.css'

const Wishlist = ({wishlist}) => {
    console.log(wishlist)
  return (
    <div>
     {
        wishlist.map((wishlistItem,wishlistIndex)=>{
             return(

                <>
                    <div key={wishlistIndex}>
                        <img src={wishlistItem.url} alt={wishlistItem.name} /> </div>
                    <div>{wishlistItem.name}</div>
                    <div></div>
                </>
             ) 
                
        })

     }
    </div>
  )
}

export default Wishlist
