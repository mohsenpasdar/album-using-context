import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import LoadingPage from './LoadingPage';
// import { useParams, useNavigate } from "react-router-dom";

const AlbumPage = (props) => {
  // const params = useParams();
  // const id = parseInt(params.id);
  const id = props.albumId
  const [state, setState] = useState({
    album: [],
    loaded: false
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then(response => response.json())
        .then(json => {
          setState({
            album: json,
            loaded: true
          })
        })
  }, [])

  // in case http://localhost:3000/album/:id first loads i.e.: when there is no albumId
  let navigate = useNavigate();
  useEffect(() => {
    if (!props.albumId) {
      navigate("/");
    }
  }, [])


  if (!state.loaded) {
    return (
      <LoadingPage />
    )
  }

  return (
    <div className='album'>
      <h1>list of pictures from albumId: {id}</h1>
      {state.album.map((picture) => (
        <ul key={picture.id}>
          <li>{picture.title}</li>
        </ul>
      ))}

    </div>
  )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(AlbumPage)
