import React from 'react';
import Link from 'gatsby-link'

export default (props) => {
   return (
      <h3>
         <Link 
            to={`/${props.path}`}
            style={{ textDecoration:`none`, fontWeight: `normal`, color:`rgba(0,0,0, 0.7)` }}
         >
            {props.title}
         </Link>
      </h3>
   )
}
