import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        return (
            <tr style={{width: '500px', display:'flex', alignItems: 'center', textAlign: 'center', borderBottom: "1px solid lightgrey"}}>
                <td>
                    <p style={(!this.props.product.stocked)? {width: '250px', color: 'red' }: {width: '250px', color: 'black' }}>{this.props.product.name}</p>
                </td>
                <td>
                    <p style={{width: '250px'}}>{this.props.product.price}</p>
                </td>
            </tr> 
        )
    }
}
