import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { IBlogsRow } from '../types';


interface BlogProps {

}

const Blog = (props: BlogProps) => {
    const { id } = useParams();
    const [data, setData] = useState<IBlogsRow | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/blogs/${id}`)
            .then(res => res.json())
            .then(data => setData(data[0]))
            .catch(e => alert(e.message))
    }, [id])

   
    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='card shadow'>
                        <div className='card-body bg-warning'>
                            <h2 className='card-title d-flex justify-content-center align-items-center'> Blog Details #{id}</h2>
                            <p className='card-title  d-flex justify-content-center text-dark align-items-center'><span className='text-decoration-underline'>{data?.title}</span> </p>
                            <p className='card-text'>{data?.content}</p>
                            
                            <Link to='/blogs' className='btn btn-outline btn-primary'>Go Back to Blogs</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Blog;




















































// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import type { IBlogsRow } from '../types';
// import { GET } from '../services/fetchData';


// interface BlogProps {

// }

// const Blog = (props: BlogProps) => {
 
//     const [post, setPost] = useState<IBlogsRow | null>(null);
//     const { id } = useParams();

//     useEffect(() => {
//         // Function to fetch the blog post data
//     //     const fetchPost = async () => {
//     //       try {
//     //         const response = await fetch(`/api/posts/${id}`);
//     //         if (!response.ok) {
//     //           throw new Error(`HTTP error! status: ${response.status}`);
//     //         }
//     //         const data = await response.json();
//     //         setPost(data); // Set the blog post data in state
//     //       } catch (error) {
//     //         console.error("Could not fetch the post:");
//     //       }
//     //     };
        
//     //     fetchPost(); // Call the fetch function
//     //   }, [id]);

//             fetch(`http://localhost:3000/api/blogs/${id}`)
//             .then(res => res.json())
//             .then(data => setPost(data))
//             .catch(e => alert(e.message))
//     })

//     console.log(id)

//     return (
//         <main className='container mt-5'>
//             <section className='row justify-content-center'>
//                 <div className='col-12 col-md-6'>
//                     <div className='card shadow'>
//                         <div className='card-body bg-warning'>
//                             <h2 className='card-title d-flex justify-content-center align-items-center'> Blog Details Page {post?.title}</h2>
//                             {/* <p className='card-title  d-flex justify-content-center text-dark align-items-center'><span className='text-decoration-underline'>{data?.name}</span> </p> */}
//                             <p className='card-text'>{post?.content}
//                             </p>
                            
//                             <Link to='/blogs' className='btn btn-outline btn-primary'>Go Back to Blogs</Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     )
// }
 
// export default Blog;