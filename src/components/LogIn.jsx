import React from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/users.json';


const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <h1>User Login</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='username' />
                <input type="password" placeholder='password' required/>
                <button> login </button>
            </form>
        </div>
    )
}

export default Login

// export default function LogIn() {
//     const [post, setPost] = React.useState('');

//     React.useEffect(() => {
//         axios.get(SERVER_URL).then((response) => {
//             setPost(response.data)
//         });
//     }, []);

//     if (!post) return null;

//     return (
//         <div>
//             <h1>{post.name}</h1>
//             <p>{post.email}</p>
//         </div>
//     )
// }