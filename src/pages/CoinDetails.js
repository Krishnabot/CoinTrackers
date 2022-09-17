import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/SingleCoin.css';
import statsIcon from '../assets/image/stats2.png';

const CollectionDetails = () => {
  const location = useLocation();

  const coin = location?.state?.coin;

  return (
    <div className="coins-info">
      <div className="coin-text">
        <div className="coin-name">
          <h2>
            Coin Name =
            {' '}
            {coin.name}
          </h2>
          <span>
            ( Coin Symbol =
            {coin.symbol}
            )
          </span>
        </div>
        <div className="coin-health">
          <span className="price">
            Price =
            $
            {coin.price}
            {' '}
            USD
          </span>
          <span className="coin-rank">
            Rank =
            {coin.rank}
            <i>
              <img src={statsIcon} alt="" />
            </i>
          </span>
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-title">Overall Coin Performance</div>
        <div className="stats-wrap">
          <div className="stat-item">
            <span>Change (24h)</span>
            {coin.percent_change_24h}
            {' '}
            %
          </div>
          <div className="stat-item">
            <span>Change (1h)</span>
            {coin.percent_change_1h}
            %
          </div>
          <div className="stat-item">
            <span>Change (7d)</span>
            {coin.percent_change_7d}
            %
          </div>
          <div className="stat-item">
            <span>BTC</span>
            {coin.price_btc}
          </div>
          <div className="stat-item">
            <span>Market Cap $</span>
            {coin.market_cap_usd}
          </div>
          <div className="stat-item">
            <span>Volume (24h)</span>
            {coin.volume24}
          </div>
          <div className="stat-item">
            <span>Volume (24h A)</span>
            {coin.volume24a}
          </div>
          <div className="stat-item">
            <span>Coin Supply</span>
            {coin.csupply}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;
