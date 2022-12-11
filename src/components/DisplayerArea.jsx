import { useEffect, useState } from "react";
import { Container, Row, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../redux/actions";
import ArtistCard from "./ArtistCard";
import Albumcard from "./Albumcard";

const DisplayerArea = () => {
  const albumArray = useSelector((state) => state.albums.content);
  const Liked = useSelector((state) => state.liked.content);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const combinedArray = albumArray.concat(Liked);

  const uniqueIDs = [];

  const uniqueArray = combinedArray.filter((el) => {
    const isDuplicate = uniqueIDs.includes(el.album.id);
    if (!isDuplicate) {
      uniqueIDs.push(el.album.id);
      return true;
    }
    return false;
  });

  // console.log(combinedArray);
  console.log(uniqueArray);

  const search = value ? value : "A";

  useEffect(() => {
    dispatch(getSongs(search));
  }, []);

  useEffect(() => {
    dispatch(getSongs(search));
  }, [value]);

  // useEffect(() => {
  //   setArray(albumArray);
  //   console.log(array);
  // }, [albumArray]);

  return (
    <div className="display-area">
      <Container fluid className="py-3">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search here"
            className="mr-sm-2"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </Form>

        <h2 id="title1">Shows you might like</h2>
        <Row className="mt-4 mb-2">
          {uniqueArray.slice(0, 12).map((album) => (
            <Albumcard album={album} key={album.id} />
          ))}
        </Row>

        {/* --------------------- */}
        <h2 id="title1">Shows you might like</h2>
        <Row className="artist-row">
          {combinedArray.slice(0, 12).map((album) => (
            <ArtistCard album={album} key={album.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DisplayerArea;
