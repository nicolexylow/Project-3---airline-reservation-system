import React, { Component } from 'react';
import axios from 'axios';

const USERS_URL = 'http://localhost:3000/users.json';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
        this.saveUser = this.saveUser.bind(this);
    }

    componentDidMount() {
        const fetchUsers = () => {
            axios.get(USERS_URL).then((response) => {
                this.setState({users: response.data});
                setTimeout(fetchUsers, 4000);
            });
        }
        fetchUsers();
    }

    saveUser(content) {
        axios.post(USERS_URL, { content: content}).then((response) => {
            this.setState({ users: [response.data, ...this.state.users]});
        })
    }
    
    render() {
        return (
            <div>
                <UserList users={this.state.users} />
            </div>
        )
    }
}

const UserList = (props) => {
    console.log(props.users)
    return (
        <div>
            <p>{ props.users.length} users</p>
            { props.users.map((u) => <p key={u.id}>Name: { u.name }</p>)}
            { props.users.map((u) => <p key={u.id}>Email: { u.email }</p>)}
        </div>
    )
}

// const useFetch2 = (url) => {

//     const [data, setData] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             const response = await fetch(url);
//             const json = await response.json();
//             setData(json);
//         }
//         fetchData();   
//     }, [url]);

//     return data;
// }

// const Login = () => {
//     const URL = 'http://localhost:3000/users.json';
//     const result = useFetch2(URL);

//     return (
//         <div>
//             {JSON.stringify(result)}
//         </div>
//     )
// }


// const SERVER_URL = 'http://localhost:3000/users.json';


// const Login = () => {

//     const handleSubmit = (event) => {
//         event.preventDefault()
//     }
//     return (
//         <div>
//             <h1>User Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type='text' placeholder='username' />
//                 <input type="password" placeholder='password' required/>
//                 <button> login </button>
//             </form>
//         </div>
//     )
// }

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