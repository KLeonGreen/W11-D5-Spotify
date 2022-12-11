import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../redux/actions";

const ArtistCard = ({ album, status }) => {
  const selectedItem = useSelector((state) => state.selected.content);
  const dispatch = useDispatch();
  const [style, setStyle] = useState("");

  const changeStyle = () => {
    setStyle("selected-album");
  };

  return (
    <>
      <Col sm={6} md={4} lg={2}>
        <Card
          className="card"
          onClick={() => {
            dispatch(setSelected(album));
            changeStyle();
          }}
          //className={style}
        >
          <div className="play-on-hover">
            <img src="./icons/Menu/PlayOnHover.svg" alt="" />
          </div>
          <Card.Img variant="top" src={album.artist.picture_medium} className="artist-image-cover" />
          <Card.Body>
            <h6 className="card-title">{album.artist.name}</h6>
            <p className="card-text">{album.artist.type}</p>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ArtistCard;
