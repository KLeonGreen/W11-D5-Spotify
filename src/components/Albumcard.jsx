import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../redux/actions";

const Albumcard = ({ album, song }) => {
  const isLiked = useSelector((state) => state.liked.isLiked);
  const Liked = useSelector((state) => state.liked.content);
  const AlbumArray = useSelector((state) => state.albums.content);
  const [likedSong, setLikedSong] = useState();

  const dispatch = useDispatch();

  const checkGreenHeart = (alb) => {
    Liked.map((song) => {
      return song.id === alb.id ? "true" : "false";
      console.log(song.id === alb.id);
    });
  };

  return (
    <>
      <Col sm={6} md={4} lg={2}>
        <Card
          className="card"
          onClick={() => {
            dispatch(setSelected(album, isLiked));
          }}
        >
          <div className="play-on-hover">
            <img src="./icons/Menu/PlayOnHover.svg" alt="" />
          </div>

          <Card.Img variant="top" src={album.album.cover_medium} />
          <Card.Body>
            <h6 className="card-title">
              {album.album.title}
              {Liked.map((song) => (
                <img src="./icons/green-heart.svg" alt="" className="liked" id={song.id === album.id ? "show" : "hide"} />
              ))}
            </h6>
            <p className="card-text">{album.artist.name}</p>
            <p className="card-text">{album.album.type}</p>
          </Card.Body>
        </Card>
        );
      </Col>
    </>
  );
};

export default Albumcard;
