import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {

    state = {
        query: '',
        stocked: false
    };
    
    setFilter = event => {
        const name = event.target.name;
        let value = (event.target.type === 'checkbox')? event.target.checked: event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div style={{    
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'}}
                >
                <h1>IronStore</h1>
                <SearchBar query={this.state.query} stocked={this.state.stocked} setFilter={this.setFilter}/>
                <ProductTable products={this.props.products} query={this.state.query} stocked={this.state.stocked}/>
            </div>
        )
    }
}
