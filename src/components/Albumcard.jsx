import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../redux/actions";

const Albumcard = ({ album }) => {
  const likedArray = useSelector((state) => state.liked.content);
  const dispatch = useDispatch();
  const [style, setStyle] = useState("");

  const changeStyle = () => {
    setStyle("selected-album");
  };

  console.log(likedArray);

  return (
    <>
      <Col sm={6} md={4} lg={2}>
        {likedArray.includes(album) ? (
          <Card
            className="card"
            onClick={() => {
              dispatch(setSelected(album));
              changeStyle();
            }}
          >
            <div className="play-on-hover">
              <img src="./icons/Menu/PlayOnHover.svg" alt="" />
            </div>

            <Card.Img variant="top" src={album.album.cover_medium} />
            <Card.Body>
              <h6 className="card-title">
                {album.album.title}
                <img src="./icons/green-heart.svg" alt="" className="liked" />
              </h6>
              <p className="card-text">{album.artist.name}</p>
              <p className="card-text">{album.album.type}</p>
            </Card.Body>
          </Card>
        ) : (
          <Card
            className="card"
            onClick={() => {
              dispatch(setSelected(album));
              changeStyle();
            }}
          >
            <div className="play-on-hover">
              <img src="./icons/Menu/PlayOnHover.svg" alt="" />
            </div>

            <Card.Img variant="top" src={album.album.cover_medium} />
            <Card.Body>
              <h6 className="card-title">{album.album.title}</h6>
              <p className="card-text">{album.artist.name}</p>
              <p className="card-text">{album.album.type}</p>
            </Card.Body>
          </Card>
        )}
      </Col>
    </>
  );
};

export default Albumcard;
