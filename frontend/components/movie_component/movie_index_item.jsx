import React from 'react';
import { Link } from 'react-router-dom';


const MovieIndexItem = ({ movie }) => {
  return ( <li><Link to={`/posts/${movie.id}`}>{movie.title}</Link>&nbsp;</li> );
};

export default MovieIndexItem;
