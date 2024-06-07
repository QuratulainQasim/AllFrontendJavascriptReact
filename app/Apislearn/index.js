const express = require('express');
const app = express();
const port = 3000;

const currencies = {
  USD: { name: 'United States Dollar', symbol: '$' },
  EUR: { name: 'Euro', symbol: '€' },
  JPY: { name: 'Japanese Yen', symbol: '¥' },
  GBP: { name: 'British Pound Sterling', symbol: '£' },
  AUD: { name: 'Australian Dollar', symbol: 'A$' },
  CAD: { name: 'Canadian Dollar', symbol: 'C$' },
  CHF: { name: 'Swiss Franc', symbol: 'CHF' },
  CNY: { name: 'Chinese Yuan', symbol: '¥' },
  SEK: { name: 'Swedish Krona', symbol: 'kr' },
  NZD: { name: 'New Zealand Dollar', symbol: 'NZ$' }
};
// start of end point
app.get('/api/currencies', (req, res) => { // ghor kro is p ya path m ny url dia tha localg diya haisari curre
  res.json(currencies);
});
// end of endpoint

app.listen(port, () => {
  console.log(`Currency API listening at http://localhost:${port}`);
});
