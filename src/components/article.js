import React, { Component } from 'react';
import Link from 'gatsby-link'

export default (props) => {
   return (
      <h3>
         <Link 
            to={props.fields.slug}
            style={{ textDecoration:`none`, fontWeight: `normal`, color:`rgba(0,0,0, 0.7)` }}
         >
            {props.frontmatter.title}
         </Link>
      </h3>
   )
}
