import React, { useEffect, useState } from 'react';
import axios from "axios";

import './style.css';

function Table() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => setList(prev => [...prev, ...res.data]))
            .catch((e) => console.log(e))
    }, []);

    console.log(list)

    const output = list.length ? (
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Birth Year</th>
                <th scope="col">Height</th>
                <th scope="col">Mass</th>
                </tr>
            </thead>
            <tbody>
                {list.map(item => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.website}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    ) : 'Nothing found';

    return (
        <div>
            {output}
        </div>
    )
}

export default Table;
