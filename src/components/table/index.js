import React from 'react';

function Table(props) {
    return (
        <div>
            <table>
                <tr>
                    {props.headers.length > 0 && props.headers.map((item, index) => {
                        return (
                            <td style={{
                                border: '1px solid',
                                padding: ' 2px 10px'
                            }}>
                                {item}
                            </td>
                        )
                    })}
                </tr>
                {props.tableData?.length > 0 && props.tableData.map((item, index) => {
                    return (
                        <tr style={{ backgroundColor: index % 2 ? 'red' : 'green', color: 'white' }}>
                            <td style={{
                                border: '1px solid',
                                padding: ' 2px 10px'
                            }}>{item.id}</td>
                            <td style={{
                                border: '1px solid',
                                padding: ' 2px 10px'
                            }}>{item.name}</td>
                            <td style={{
                                border: '1px solid',
                                padding: ' 2px 10px'
                            }}>{item.title}</td>
                            <td style={{
                                border: '1px solid',
                                padding: ' 2px 10px'
                            }}>{item.price}</td>
                        </tr>)
                })}
            </table>
        </div>
    );
}

export default Table;