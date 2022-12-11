import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTofavorites } from "../redux/actions";

const Player = () => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const selectedItem = useSelector((state) => state.selected.content);
  const iconColor = useSelector((state) => state.liked.heartColor);
  const Liked = useSelector((state) => state.liked.content);

  const checkLiked = (alb) => {
    Liked.map((song) => {
      return song.id === alb.id ? true : false;
    });
  };

  useEffect(() => {
    Liked.map((song) => {
      return song.id === selectedItem.id ? setIsLiked(true) : setIsLiked(false);
    });
  }, [selectedItem]);

  return (
    <div className="player-area">
      <div className="bottom-container">
        {selectedItem && (
          <div className="playing d-flex">
            <div className="playing-image">
              <img src={selectedItem.album.cover_medium} alt="" />
            </div>
            <div className="playing-title">
              <div className="text-cover-image">
                <div className="song-title">{selectedItem.album.title}</div>
                <div className="song-artist">{selectedItem.artist.name}</div>
              </div>
            </div>
            <div>
              <img
                id="heart"
                className={iconColor ? "filter" : ""}
                //className={iconColor ? "filter" : ""}
                style={{ cursor: "pointer" }}
                src="./icons/heart.svg"
                alt=""
                onClick={() => {
                  dispatch(addTofavorites(selectedItem));
                  // setFilter("filter");
                }}
              />
            </div>
          </div>
        )}

        <div className="player d-flex flex-column justify-content-center">
          <div className="player-icons d-flex align-items-center">
            <div>
              <img src="./icons/shurffle.svg" alt="" />
            </div>
            <div>
              <img src="./icons/prev.svg" alt="" />
            </div>
            <div>
              <img id="play-button-js" src="./icons/play.svg" alt="" />
            </div>
            <div>
              <img src="./icons/next.svg" alt="" />
            </div>
            <div>
              <img src="./icons/playall.svg" alt="" />
            </div>
          </div>
          <div className="player-bar d-flex">
            <span>1:45</span>
            <div className="progress" style={{ height: "5px" }}>
              <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            3:56
          </div>
        </div>

        <div className="other-functions d-flex">
          <div className="player-icons d-flex align-items-center justify-content-a">
            <div>
              <img src="./icons/mic.svg" alt="" />
            </div>
            <div>
              <img src="./icons/playlist.svg" alt="" />
            </div>
            <div className="volume d-flex align-items-center">
              <img src="./icons/volume.svg" alt="" />
              <div className="progress volume-bar">
                <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
