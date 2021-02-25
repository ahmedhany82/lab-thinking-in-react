import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {

        const list = this.props.products.filter(product => {
            return (this.props.query === '' ? true: (product.name.toLowerCase().includes(this.props.query.toLowerCase())))
        }).filter(product => {
            return (this.props.stocked? (product.stocked) : true)
        }).map(product => {
            return (
                <ProductRow product={product} />
              )  
        })
    
        return (
            <div>
                <table>
                <tr style={{tableLayout: 'fixed', display: 'flex', justifyContent: 'space-between', width: '500px', textAlign: 'left'}}>
                    <th style={{backgroundColor: 'lightblue', textAlign: 'center',  width: '250px'}}>Name</th>
                    <th style={{backgroundColor: 'lightblue', textAlign: 'center',  width: '250px'}}>Price</th>
                </tr>
                    {list}
                </table>
            </div>
        )
    }
}
