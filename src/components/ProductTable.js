import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
            //filtering should be done here
        const list = this.props.products.filter(product => {
            return (this.props.query === '' ? true: (product.name.toLowerCase().includes(this.props.query.toLowerCase())))
        }).filter(product => {
            return (this.props.stocked? (product.stocked) : true)
        }).map(product => {
            return (
                <ProductRow product={product} />
              )  
        })

        // const stateLowerCase = this.state.search.toLowerCase();
        // const list = users.filter(element => {
        //       return (this.state.search === '' ? true: ( element.firstName.toLowerCase().includes(stateLowerCase)|| element.lastName.toLowerCase().includes(stateLowerCase)))
        //     }).filter(element => {
        //       return (this.state.isStudent === false ? true: element.role === "student")
        //     }).filter(element => {
        //       return (this.state.isTeacher === false ? true: element.role === "teacher")
        //     }).filter(element => {
        //       return (this.state.campus === 'All'? true: element.campus === this.state.campus)
        //     }).map((user,index) => {
        //       return (
        //         <tr key={user.id} style={{width: '1000px', display:'flex', alignItems: 'center'}}>
        //           <p style={{width: '200px'}}>{user.firstName}</p>
        //           <p style={{width: '200px'}}>{user.lastName}</p>
        //           <p style={{width: '200px'}}>{user.campus}</p>
        //           <p style={{width: '200px'}}>{user.role}</p>
        //           {user.linkedin && <a style={{width: '200px'}} href={user.linkedin}>linkedin</a>}
        //         </tr>
        //       )  
        // })        


        return (
            <div>
                <table style={{marginLeft: '100px'}}>
                <tr style={{tableLayout: 'fixed', display: 'flex', justifyContent: 'space-between', width: '500px', textAlign: 'left'}}>
                    <th style={{width: '250px'}}>Name</th>
                    <th style={{width: '250px'}}>Price</th>
                </tr>
                    {list}
                </table>
            </div>
        )
    }
}
