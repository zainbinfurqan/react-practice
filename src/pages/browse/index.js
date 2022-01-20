import React, { useState, useReducer } from 'react';
import Filter from './components/filter';
import SearchBar from './components/search';

const errorState = {
    error: {}
};

function reducer(state, action) {
    switch (action.type) {
        case "ON_SELECT_FILTER":
            return { ...state, filter: { ...action.payload } };
        case "ON_ERROR":
            return { ...state, error: { ...action.payload } };
        default:
            return state;
    }
}

function Browse(props) {

    const [error, dispatch_] = useReducer(reducer, errorState);
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [products, setProducts] = useState([])

    async function handleSearch(searchQuery) {
        const isValidated = Object.keys(error.error).length <= 0 && true
        if (isValidated) {
            try {
                const response = await fetch(
                    `http://streaming-app-server.herokuapp.com/search/product?q=${searchQuery}`,
                    {
                        method: 'GET',
                    }
                )
                const res = await response.json()
                if (response.status === 200) {
                    setProducts(res.data)
                } else {
                    setProducts([])
                }
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    }

    function handleCloseFilter(filter) {
        const isValidated = validation(filter)
        if (isValidated) {
            setIsFilterOpen(!isFilterOpen)
        }
    }

    function validation(filter) {
        const error = {};
        if (Number(filter.min) < 0) {
            error[0] = "Please enter valid Min price";
        }
        if (Number(filter.max) < 0) {
            error[1] = "Please enter valid Max price";
        }
        if (Number(filter.min) > Number(filter.max)) {
            error[2] = "Max price should be greater then min price";
        }
        dispatch_({ type: "ON_ERROR", payload: error });

        return !Object.keys(error).length;
    }

    return (
        <div className='d-flex  mx-auto text-center'>
            <div className='d-flex flex-row '>
                <div className='d-flex  p-2 '>
                    <div className='align-self-center'>
                        <i className='fas fa-filter' style={{ fontSize: '10px' }} onClick={() => setIsFilterOpen(!isFilterOpen)} />
                    </div>
                    {isFilterOpen &&
                        <Filter handleCloseFilter={handleCloseFilter} error={error} />
                    }
                </div>
                <SearchBar handleSearch={handleSearch} />
            </div>
        </div>
    );
}

export default Browse;