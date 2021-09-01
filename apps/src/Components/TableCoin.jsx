import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Style.scss'


const TableCoins = () => {
    const [coins, setCoin] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        ).then(res => setCoin(res.data)).catch(err => console.log(err));
    }, [])
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const filterCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="home-coin">
            <div className="container mt-2" dir="rtl">
                <div className="coin-search mb-5 text-center">
                    <h1 className="text-white">جست و جوی ارز دیجیتال</h1>
                    <form>
                        <input type="text" className="coin-search__input my-2" name="" onChange={handleChange} id="" />
                    </form>
                </div>
                <table className="table text-center table-dark text-white">
                    <thead>
                        <tr >
                            <th scope="col">لوگو</th>
                            <th scope="col">نام ارز</th>
                            {/* <th scope="col">نماد</th> */}
                            <th scope="col">قیمت به تومان</th>
                            <th scope="col">قیمت به دلار</th>
                            <th scope="col">تغییرات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterCoins.map(filter => (
                                <tr key={filter.id}>
                                    <td>
                                        <img className="logo-img" src={filter.image} alt="" />
                                    </td>
                                    <td>{filter.name}</td>
                                    {/* <td>{filter.symbol}</td> */}
                                    <td>{(filter.current_price * 27000).toFixed(0)} تومان</td>
                                    <td>$ {filter.current_price}</td>
                                    {
                                        filter.price_change_percentage_24h < 0 ?
                                            (
                                                <td className="coin-percent red">{filter.price_change_percentage_24h.toFixed(2)}%</td>
                                            )
                                            :
                                            (
                                                <td className="coin-percent green">{filter.price_change_percentage_24h.toFixed(2)}%</td>
                                            )
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default TableCoins;