import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import CoinDetails from '../pages/CoinDetails';
import store from '../redux/configureStore';

describe('Test for coins', () => {
  test('whether it matches snapshots or not', () => {
    const history = createBrowserHistory();
    const coin = {
      id: '80',
      symbol: 'ETH',
      name: 'Ethereum',
      nameid: 'ethereum',
      rank: 2,
      price_usd: '1428.98',
      percent_change_24h: '-1.48',
      percent_change_1h: '0.24',
      percent_change_7d: '-17.00',
      price_btc: '0.071292',
      market_cap_usd: '174627657078.98',
      volume24: '12027472426.885479',
      volume24a: '17284898737.62316',
      csupply: '1122204013.00',
      tsupply: '122204013',
      msupply: '',
    };

    history.push('/coindetail', { coin });
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <Routes>
              <Route path="/coindetail" element={<CoinDetails />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
