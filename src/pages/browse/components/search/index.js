import React, { useState } from 'react';

function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div>
            <div className='d-flex  p-2'>
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <div className='border d-flex p-2 align-self-center'>
                    <i className='fas fa-search' style={{ fontSize: '10px' }}
                        onClick={() => props.handleSearch(searchQuery)} />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;