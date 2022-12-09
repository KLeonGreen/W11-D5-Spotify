import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../redux/actions";
import Albumcard from "./Albumcard";

const DisplayerArea = () => {
  const albumArray = useSelector((state) => state.albums.contents);
  const [array, setArray] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs());
  }, []);

  useEffect(() => {
    setArray(albumArray);
    console.log(array);
  }, [albumArray]);

  return (
    <div className="display-area">
      <Container>
        <h2 id="title1">Shows you might like</h2>
        <Row>
          <Col sm={6} md={4} lg={2} xl={2}>
            <Albumcard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DisplayerArea;
