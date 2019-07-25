import $ from 'jquery';

export const API_RESULT = 'API_RESULT'; 
export const apiResult = (cleanedAPIData, searchText) => {
  console.log(cleanedAPIData);
  console.log(searchText);
  return {
    type: API_RESULT,
    searchText: searchText,
    photos: cleanedAPIData 
  }
}

export const fetchPhotos = (searchText) => dispatch => {
  const accessKey = `aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5`;
  const unsplashAPI = `https://api.unsplash.com/users/${searchText}/photos/?client_id=${accessKey}`;

  $.ajax({ 
    method: "get",
    url: unsplashAPI,
    success: function(data) { 
      console.log(data)
      const cleanedAPIData = data.map(photo => {
       return {
                image: photo.urls.thumb
              }
      })
      dispatch(apiResult(cleanedAPIData, searchText));
    }
  });
}

