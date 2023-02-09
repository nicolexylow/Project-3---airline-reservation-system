import React from 'react'

const AirplaneInfo = (props) => {

    const rowLabels = Array.from({ length: props.rows }, (_, index) =>
    String.fromCharCode(65 + index)
    );
    const columnLabels = Array.from({ length: props.cols }, (_, index) =>
    (index + 1).toString()
    );

    return(
        <table>
            <thead>
                <tr>
                <th></th>
                {columnLabels.map((_, index) => (
                    <th key={index}></th>
                ))}
                </tr>
            </thead>
            <tbody>
                {rowLabels.map((label, rowIndex) => (
                <tr key={rowIndex}>
                    <th>{label}</th>
                    {Array.from({ length: props.cols }, (_, columnIndex) => (
                    <td key={columnIndex}></td>
                    ))}
                </tr>
                ))}
                <tr>
                <th></th>
                {columnLabels.map((label, index) => (
                    <th key={index}>{label}</th>
                ))}
                </tr>
            </tbody>
        </table>
    )
    
}



export default AirplaneInfo