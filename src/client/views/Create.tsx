import React from 'react';
import { Link } from 'react-router-dom';
import type { IBlogsRow } from '../types';
import type { IAuthorsRow } from '../types';
import type { ITagsRow } from '../types';
import { PUT } from '../services/fetchData';

interface CreateProps {
    
}

const Create = (props: CreateProps) => {
    return(
        <div>You've found the create page</div>
    )
}

export default Create;