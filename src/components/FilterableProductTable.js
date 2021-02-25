import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {

    state = {
        query: '',
        stocked: false
    };
    
    setQuery = query => {
        this.setState({
          query: query
        })
    }

    setStocked = status => {
        this.setState({
            stocked: status
        })
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar query={this.state.query} stocked={this.state.stocked} setQuery={this.setQuery} setStocked={this.setStocked}/>
                <ProductTable products={this.props.products} query={this.state.query} stocked={this.state.stocked}/>
            </div>
        )
    }
}
