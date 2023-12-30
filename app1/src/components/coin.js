import { useEffect, useState } from "react";

function CoinChange() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState();
    const [coinPrice, setCoinPrice] = useState(0);
    const [money, setMoney] = useState(0);



    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            })
    }, [])

    const setectCoin = (event) => {
        setSelectedCoin(event.target.value);
    }

    const handleDollarAmountChange = (event) => {
        setMoney(event.target.value);
        const selectedCoinData = coins.find((coin) => coin.symbol === selectedCoin);
        if (selectedCoinData) {
            setCoinPrice(selectedCoinData.quotes.USD.price);
        }
    }


    return (
        <div>
            <h1>
                The Coins! {loading ? "" : `(${coins.length})`}
            </h1>
            {loading ? <strong>Loading ...</strong> : (
                <div>
                    <select value={selectedCoin} onChange={setectCoin}>
                        <option value="">Select a Coin</option>
                        {coins.map((coin) => (
                            <option key={coin.id} value={coin.symbol}>
                                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        value={money}
                        onChange={handleDollarAmountChange}
                    />
                    {coinPrice > 0 && (
                        <p>
                            You can buy {money / coinPrice} {selectedCoin}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default CoinChange;
