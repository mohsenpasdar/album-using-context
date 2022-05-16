import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AlbumsContext from '../context/albums-context'

const Card = (props) => {
  const { dispatch } = useContext(AlbumsContext)

  const handleClick = () => {
    dispatch({
      type: 'GET_ID',
      id: props.album.id
    })
  }

  return (
    <div className="card">
      <Link className="card__body" to={`/album/${props.album.id}`} onClick={handleClick} >
        <img src="/logo192.png" alt="react logo" />
        <p>{props.album.title}</p>
      </Link>

    </div>
  )
}

export default Card
