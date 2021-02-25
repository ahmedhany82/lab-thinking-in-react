import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleFilter = event => {
        this.props.setFilter(event)
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <h2>Search</h2>
                <form onSubmit={this.handleSubmit} style={{width:'100%', marginBottom: '50px'}}>
                    <div>
                        <label htmlFor="query"></label>
                        <input style={{width:'90%', height: '25px', marginBottom: '20px'}}
                        type="text"
                        name="query"
                        id="query"
                        value={this.props.query}
                        onChange={this.handleFilter}
                        />
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="stocked"
                            id="stocked"
                            checked={this.props.inStock}
                            onChange={this.handleFilter}
                        />
                        <label htmlFor="stocked" style={{marginTop: '20px'}}>Only show products on stock</label>
                    </div>
                </form>
            </div>
        )
    }
}
