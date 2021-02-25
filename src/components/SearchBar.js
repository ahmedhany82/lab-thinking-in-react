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
            <div style={{width: '100%'}}>
                <h2>Search</h2>
                <form onSubmit={this.handleSubmit} style={{width:'100%', marginBottom: '50px'}}>
                    <div>
                        <label htmlFor="search"></label>
                        <input style={{width:'90%', height: '25px', marginBottom: '20px'}}
                        type="text"
                        name="search"
                        id="search"
                        value={this.props.query}
                        onChange={this.handleSearch}
                        />
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="inStock"
                            id="inStock"
                            checked={this.props.inStock}
                            onChange={this.handleCheckBox}
                        />
                        <label htmlFor="inStock" style={{marginTop: '20px'}}>Only show products on stock</label>
                    </div>
                </form>
            </div>
        )
    }
}
