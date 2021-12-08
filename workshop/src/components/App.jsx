import React, { useState } from 'react';

import Gif from './Gif';
import GiftList from './GiftList';
import SearchBar from './SearchBar';

const App = () => {
  const selectedGif = "gG6OcTSRWaSis";
  const gifList = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifID={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GiftList gifIDs={gifList} />
      </div>
    </div>
  );
};

export default App;
