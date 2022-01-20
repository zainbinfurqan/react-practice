import React, { useState, useReducer } from 'react';

function Filter(props) {


    const [filter, setFilter] = useState({
        min: 0,
        max: 0,
        searchBy: 'title',
        // searchQuery: ''
    })

    function handlePriceSelect(value, label) {
        if (label === 'max') {
            filter[label] = value
        }
        if (label === 'min') {
            filter[label] = value
        }
        setFilter({ ...filter })
    }

    function handleSelectSearchBy(value) {
        filter.searchBy = value
        setFilter({ ...filter })
    }


    return (
        <div>
            <div className='w-60 border rounded bg-white  p-2 position-absolute mt-3'>
                <div className=''>
                    <p>Narrow your Search</p>
                    <div className='d-flex  w-75 mx-auto m-2'>
                        <div className='d-flex   mx-auto'>
                            <p className='align-self-center m-0 mx-2'>Min</p>
                            <input value={filter.min}
                                onChange={(e) => handlePriceSelect(e.target.value, 'min')}
                                className='w-50' type="number" />
                        </div>
                        <div className='d-flex mx-auto'>
                            <p className='align-self-center m-0 mx-2'>Max</p>
                            <input
                                onChange={(e) => handlePriceSelect(e.target.value, 'max')}
                                value={filter.max} className='w-50' type="number" />
                        </div>
                    </div>

                    <div className='text-left'>
                        <p
                            onClick={() => handleSelectSearchBy('title')}
                            className={`border m-2 p-2 ${filter.searchBy === 'title' && 'bg-success text-white'}`}>Title</p>
                        <p
                            onClick={() => handleSelectSearchBy('job')}
                            className={`border m-2 p-2 ${filter.searchBy === 'job' && 'bg-success text-white'}`}>Job</p>
                        <p
                            onClick={() => handleSelectSearchBy('company')}
                            className={`border m-2 p-2 ${filter.searchBy === 'company' && 'bg-success text-white'}`}>Company</p>
                    </div>
                </div>
                <div className='text-right m-2'>
                    <button className='w-50 border bg-info text-light' onClick={() => props.handleCloseFilter(filter)}>Done</button>
                </div>
                {Object.keys(props.error.error).map((item, index) => {
                    return (
                        <p className='p-2 border text-danger'>{props.error.error[item]}</p>
                    )
                })}
            </div>
        </div>
    );
}

export default Filter;