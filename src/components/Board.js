import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './Board.css';
import SearchForm from './SearchForm';
import Photo from './Photo';
import { fetchPhotos } from '../Actions';

const Board = (props) => {
  console.log(props.searchHistory)

  const userSearch = (searchText) => {
    props.dispatch(fetchPhotos(searchText));
  }
  
  let output;
  if(props.photos.length > 0) {
    output = props.photos.map((photo, index) => {
      return <Photo key={index} title={photo.title} image={photo.image} />;
    });
  } else {
    output = <div>Get ready to see some photos...</div>;
  }
  
  return (
    <Fragment>
      <div className="row">
        <div className="column one">
          <SearchForm userSearch={userSearch} />
          <section>
            {props.searchHistory.map(search => <a onClick={() => userSearch(search)} href="#">{search}</a>)}
          </section>
        </div>
        <div className="column two">
        <ul className="photo-list">
          {output}
        </ul>
        </div>
      </div>
      <div className="footer">Footer area for credits and social icons</div>
    </Fragment>
  );
}


const mapStateToProps = state => {
  console.log(state);
  return {
    photos: state.photos,
    searchHistory: state.searchHistory  
  }
}


export default connect(mapStateToProps)(Board);