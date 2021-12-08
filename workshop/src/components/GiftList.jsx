import React from 'react';
import Gif from './Gif';

const GiftList = ({ gifIDs, setSelectedGif }) => {
  return (
    <div className="gif-list">
      {gifIDs.map((gifID) => <Gif gifID={gifID} setSelectedGif={setSelectedGif} key={gifID} />)}
    </div>
  );
};

export default GiftList;
