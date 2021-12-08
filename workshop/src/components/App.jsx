import React, { useState } from 'react';

import Gif from './Gif';
import GiftList from './GiftList';
import SearchBar from './SearchBar';

const App = () => {
  const [selectedGif, setSelectedGif] = useState("gG6OcTSRWaSis");
  const [gifList, setGifList] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifID={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GiftList gifIDs={gifList} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;
