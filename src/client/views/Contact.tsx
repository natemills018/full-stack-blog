import React, { useState } from 'react';
import { POST } from '../services/fetchData';

interface ContactProps { }

const Contact = (props: ContactProps) => {
    const [data, setData] = useState({
        from: '',
        subject: '',
        message: ''
    })

    //Implicit Es6 return is being used in this example, ...pre is requesting the variable to maintain the same properties, then we are telling it to find the name of the text area, and the value of the text that is being entered.
    const handleChanges = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        setData(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }

    const handleContactSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {

            // const res = await POST('/api/contact', {data}) // code using fetch helper
            const res = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers:  {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const msg = await res.json();
            console.log(msg)
            setData({
                from: '',
                subject: '',
                message: ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='card shadow'>
                        <div className='card-body bg-primary'>
                            <form>
                                <input className="form-control mt-1" name='from' value={data.from} onChange={handleChanges} />
                                <input className="form-control mt-1" name='subject'value={data.subject} onChange={handleChanges} />
                                <textarea name="message" rows={5} className="form-control mt-1" value={data.message} onChange={handleChanges}></textarea>                                
                                <button className='btn btn-outline btn-success mt-1' onClick={handleContactSubmit}>Contact Me</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact;
// Creating a React change event on two types, the input element and the submit element

