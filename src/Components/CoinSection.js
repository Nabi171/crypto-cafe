import React, { useState, useEffect } from 'react';
import ShowCard from './ShowCard';


const CoinSection = () => {
    const [coins, setcoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false').then(res => res.json()).then(data => setcoins(data))
    }, []
    )
    return (
        <div>
            <h1>This is coin section</h1>
            {
                coins.map(coin => <ShowCard coin={coin}></ShowCard>)
            }
        </div>
    );
};

export default CoinSection;