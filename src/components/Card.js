import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Card = (props) => {
  const handleClick = () => {
    props.dispatch({
      type: 'GET_ID',
      id: props.album.id
    })
  }

  return (
    <div className="card">
      <Link className="card__body" to={`/album/${props.album.id}`} onClick={handleClick}>
        <img src="/logo192.png" alt="react logo" />
        <p>{props.album.title}</p>
      </Link>

    </div>
  )
}

export default connect()(Card)
