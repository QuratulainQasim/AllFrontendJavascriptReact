import React, { useState } from 'react';

const CurrencyTable = () => {
  const [currencies, setCurrencies] = useState([
    { id: 1, symbol: 'USD', name: 'US Dollar' },
    { id: 2, symbol: 'EUR', name: 'Euro' },
    { id: 3, symbol: 'GBP', name: 'British Pound' },
  ]);

  const [newCurrency, setNewCurrency] = useState({ symbol: '', name: '' });
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddCurrency = () => {
    setCurrencies([...currencies, { id: currencies.length + 1, ...newCurrency }]);
    setNewCurrency({ symbol: '', name: '' });
    setShowAddModal(false);
  };

  const handleDeleteCurrency = (id: number) => {
    const updatedCurrencies = currencies.filter((currency) => currency.id !== id); 6
    setCurrencies(updatedCurrencies);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <tr key={currency.id}>
              <td>{currency.id}</td>
              <td>{currency.symbol}</td>
              <td>{currency.name}</td>
              <td>
                <button onClick={() => handleDeleteCurrency(currency.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setShowAddModal(true)}>Add Currency</button>

      {showAddModal && (
        <div className="modal">
          <div>
            <label htmlFor="symbol">Symbol:</label>
            <input
              type="text"
              id="symbol"
              value={newCurrency.symbol}
              onChange={(e) => setNewCurrency({ ...newCurrency, symbol: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={newCurrency.name}
              onChange={(e) => setNewCurrency({ ...newCurrency, name: e.target.value })}
            />
          </div>
          <button onClick={handleAddCurrency}>Add</button>
          <button onClick={() => setShowAddModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CurrencyTable;