import React, { Suspense, useEffect, useState } from 'react';
import { apis } from './fetch';

function Suspense_feature(props) {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        console.log(apis.fetchTodo())
    }, [])

    function Display() {
        return (
            <div>
                {/* {todos.map((_, i) => {
                    return <p>{_.title}</p>
                })} */}
            </div>
        )
    }

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <Display />
            </Suspense>
        </div>
    );
}

export default Suspense_feature;