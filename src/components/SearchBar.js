import React, { Component } from 'react'

export default class SearchBar extends Component {


    handleSearch = event => {
        this.props.setQuery(event.target.value)
    }

    handleCheckBox = event => {
        this.props.setStocked(event.target.checked)
    }

    render() {
        return (
            <div>
                <h1>Search</h1>
                <form onSubmit={this.handleSubmit} style={{width:'100%', marginBottom: '50px'}}>
                    <div>
                        <label htmlFor="search"></label>
                        <input style={{width:'90%', height: '25px', marginLeft: '20px'}}
                        type="text"
                        name="search"
                        id="search"
                        value={this.props.query}
                        onChange={this.handleSearch}
                        />
                    </div>
                    <div>
                        <label htmlFor="inStock" style={{marginLeft: '20px', marginRight: '5px'}}>Only show products on stock</label>
                        <input
                            type="checkbox"
                            name="inStock"
                            id="inStock"
                            checked={this.props.inStock}
                            onChange={this.handleCheckBox}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
