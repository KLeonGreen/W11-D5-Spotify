import { Card, Col } from "react-bootstrap";

const Albumcard = ({ album }) => {
  return (
    <Col sm={6} md={4} lg={2}>
      <Card className="card">
        <div className="play-on-hover">
          <img src="./icons/Menu/PlayOnHover.svg" alt="" />
        </div>
        <Card.Img variant="top" src={album.album.cover_medium} />
        <Card.Body>
          <h6 className="card-title">{album.album.title}</h6>
          <p className="card-text">{album.artist.name}</p>
          <p className="card-tex4t">{album.album.type}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Albumcard;
