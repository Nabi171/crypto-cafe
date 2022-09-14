import React, { useState, useEffect } from 'react';
import ShowCard from './ShowCard';
// import SingeleCoinDetails from './SingeleCoinDetails';


const CoinSection = () => {

    // const seeDetails = (id) => {

    //     <SingeleCoinDetails id={id} />
    // }
    const [coins, setcoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false').then(res => res.json()).then(data => setcoins(data))
    }, []
    )
    return (
        <div>
            <h1>This is coin section</h1>

            <div className='row'>
                {
                    coins.map(coin => <ShowCard

                        coin={coin} key={coin.id}></ShowCard>)
                }
            </div>
        </div>
    );
};

export default CoinSection;