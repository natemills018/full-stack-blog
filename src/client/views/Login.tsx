import React, { useState } from 'react';
import { POST } from '../services/fetchData';
import { TOKEN_KEY } from '../services/fetchData';
import { apiService } from '../services/api-service';

interface LoginProps { }

const Login = (props: LoginProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    //Implicit Es6 return is being used in this example, ...pre is requesting the variable to maintain the same properties, then we are telling it to find the name of the text area, and the value of the text that is being entered.
    // const handleChanges = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    //     setData(pre => ({ ...pre, [e.target.name]: e.target.value }))
    // }

    const handleLoginSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        POST('/auth/login', {email, password})
            .then(token => console.log(token))
            .catch(() => console.log('oopps! Something is wrong with setting local storage'))
        }
    //     try {

    //         // const res = await POST('/api/Login', {data}) // code using fetch helper
    //         // const res = await fetch('http://localhost:3000/api/login', {
    //         //     method: 'POST',
    //         //     headers:  {
    //         //         'Content-Type': 'application/json'
    //         //     },
    //         //     body: JSON.stringify(data)
    //         // });
    //         // const msg = await res.json();
    //         // console.log(msg)
    //         // setData({
    //         //     from: '',
    //         //     subject: '',
    //         //     message: ''
    //         // })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <h1 className='text-center text-primary mb-4'>Welcome to the Login Page</h1>
                    <div className='card shadow'>
                        <div className='card-body bg-primary'>
                            <form>
                                <input className="form-control mt-1" name='from' value={email} onChange={e => setEmail(e.target.value)} />
                                <input className="form-control mt-1" name='subject'value={password} onChange={e => setPassword(e.target.value)} />
                                <button className='btn btn-outline btn-success mt-1' onClick={handleLoginSubmit}>Log Me In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login;