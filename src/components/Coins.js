import React from 'react';
import PropTypes from 'prop-types';
import statsIcon from '../assets/image/stats1.png';

const SingleCollection = (props) => {
  const { coin } = props;
  return (
    <div>
      <div>
        <h2 className="coin-name">
          Crypto Name =
          {' '}
          {coin.name}
        </h2>
      </div>
      <div className="coin-info-wrap">
        <span>
          Symbol =
          {' '}
          {coin.symbol}
        </span>
        <span>
          Price =
          {' '}
          {coin.price}
        </span>
        <span className="ranking">
          {' '}
          Crypto Ranking =
          {`#${coin.rank}`}
          <i>
            <img className="stats-icon" src={statsIcon} alt="" />
          </i>
        </span>
      </div>
    </div>
  );
};

SingleCollection.propTypes = {
  coin: PropTypes.shape({
    rank: PropTypes.number,
    name: PropTypes.string,
    symbol: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default SingleCollection;
