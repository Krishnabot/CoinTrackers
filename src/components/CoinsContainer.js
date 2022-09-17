import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchCoins from '../redux/ConsumeAPI/consumeAPI';
import Coin from './Coins';
import '../CSS/Coins.css';
import searchIcon from '../assets/image/search-icon.png';

const CoinsContainer = () => {
  const coins = useSelector((state) => state.coins);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins());
    }
  });

  const filtered = coins.filter(
    (coin) => !search || new RegExp(search, 'ig').test(coin.name),
  );

  return (
    <>
      <div className="search">
        <input
          type="search"
          value={search}
          placeholder="Search Coins"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <i>
          <img src={searchIcon} alt="" />
        </i>
      </div>
      <div className="coins-wrap">
        <h2 className="title">Available Coins</h2>
        <div className="collections">
          {filtered.map((coin) => (
            <Link
              to="details"
              state={{ coin }}
              className="single-collection"
              key={coin.id}
            >
              <Coin coin={coin} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoinsContainer;
