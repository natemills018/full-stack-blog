import React from 'react';
import { Link } from 'react-router-dom';
import type { IBlogsRow } from '../types';
import type { IAuthorsRow } from '../types';
import type { ITagsRow } from '../types';
import { PUT } from '../services/fetchData';
import  EditBlog from '../components/editBlog';


interface UpdateProps {
    
}

const Update = (props: UpdateProps) => {
    return(
        <div>You've found the Update page
            
        </div>
    )
}

export default Update;


// Here I'm planning to build a component for creation