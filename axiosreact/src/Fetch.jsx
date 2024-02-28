import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function Fetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>Fetch data from API in react with axios</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(0, 10).map(post => (
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Fetch;
