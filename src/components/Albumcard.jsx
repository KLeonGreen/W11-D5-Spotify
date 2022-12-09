import { Card } from "react-bootstrap";

const Albumcard = () => {
  return (
    <Card className="card">
      <div className="play-on-hover">
        <img src="./icons/Menu/PlayOnHover.svg" alt="" />
      </div>
      <Card.Img variant="top" src="https://static-cse.canva.com/blob/978199/1600w-8iSVF3m00jk.jpg" />
      <Card.Body>
        <h6 className="card-title">title</h6>
        <p className="card-text">ererwewerwe</p>
        <p className="card-tex4t">vxvcxcxvcvx</p>
      </Card.Body>
    </Card>
  );
};

export default Albumcard;
