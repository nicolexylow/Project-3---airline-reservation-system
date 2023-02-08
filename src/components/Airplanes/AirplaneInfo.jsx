import React from 'react'
import { Table } from 'semantic-ui-react'

const AirplaneInfo = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>

            {props.rows < props.cols && (
                <Table.Row className="disabled-row">
                    {rows.map((item, index) => {
                    return (
                        <Table.Cell id="cta" textAlign="right" key={index}>
                        {item}
                        </Table.Cell>
                    );
                    })}
                </Table.Row>   
                )}
        </div>
    )
}

export default AirplaneInfo