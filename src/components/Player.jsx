const Player = () => {
  return (
    <div className="player-area">
      <div className="bottom-container">
        <div className="playing d-flex">
          <div className="playing-image">
            <img src="./images/playing.png" alt="" />
          </div>
          <div className="playing-title">
            <div>Weekly Motivation</div>
            <div>Tie up</div>
          </div>
          <div>
            <img src="./icons/green-heart.svg" alt="" />
          </div>
        </div>

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
              <div className="progress">
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
