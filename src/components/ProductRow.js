import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        return (
            <tr key={this.props.product.id} style={{width: '500px', display:'flex', alignItems: 'center', textAlign: 'left'}}>
                  <p style={(!this.props.product.stocked)? {width: '250px', color: 'red' }: {width: '250px', color: 'black' }}>{this.props.product.name}</p>
                  <p style={{width: '250px'}}>{this.props.product.price}</p>
            </tr> 
        )
    }
}
