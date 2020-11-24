import React, { useState,useEffect} from 'react';

function StockRow (props) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const url = `https://cloud.iexapis.com/stable/stock/${props.ticker}/intraday-prices?token=${process.env.REACT_APP_CLIENT_ID}`
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data[data.length - 1])
                console.log(data)
            })
    }, [])


    if (data) {
        return (
            <tr>
                <td>{props.ticker}</td>
                <td>{data.average}</td>
                <td>{data.date}</td>
                <td>{data.label}</td>
            </tr>
        );
    } else {
        return null
    }
};

export default StockRow;


