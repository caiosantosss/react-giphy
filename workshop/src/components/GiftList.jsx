import React from 'react';
import Gif from './Gif';

const GiftList = (props) => {
  const { gifIDs } = props;
  return (
    <div className="gif-list">
      {gifIDs.map((gifID) => <Gif gifID={gifID} key={gifID} />)}
    </div>
  );
};

export default GiftList;
