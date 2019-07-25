import React from 'react';
import './Photo.css';

export default function Photo(props) {
  return (
    <li className="photo-list-item">
      <figure>
        <figcaption>{props.title}</figcaption>
        <img src={props.image} alt={props.title}/>
      </figure>
    </li>
  );
}