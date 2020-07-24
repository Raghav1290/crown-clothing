import React from 'react';
import './homepage.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <Directory />
        </div>
    </div>
)

export default HomePage 