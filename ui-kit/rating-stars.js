import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Rating from 'react-rating'

export const RatingStars = ({initialRating, readonly}) => {
    return (
        <Rating {...{
            emptySymbol: <FaRegStar />,
            fullSymbol: <FaStar />,
            initialRating,
            readonly,
          }}/>
    )
}
