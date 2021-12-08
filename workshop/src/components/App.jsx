import React, { useState } from 'react';
import Gif from './Gif';
import GiftList from './GiftList';
import SearchBar from './SearchBar';

const App = () => {
  const [selectedGif, setSelectedGif] = useState("gG6OcTSRWaSis");
  const [gifList, setGifList] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);

  const giphy = require('giphy-api')({
    apiKey: 'fmpinRHFp5B1BBVj6sC2u81lYdgv6Ucc',
    https: true
  });

  const searchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const gifIdArray = res.data.map((gif) => gif.id);
      setGifList(gifIdArray);
    });
  };

  // const changeSelectGif = (newSelectedGifId) => {
  //   setSelectedGif(newSelectedGifId);
  // };

  return (
    <div>
      <div className="left-scene">
        <SearchBar searchGiphy={searchGiphy} />
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
