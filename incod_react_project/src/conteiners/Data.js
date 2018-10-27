import React, {Component} from 'react';
import {connect} from 'react-redux';

class  Data extends Component{

    render(){

        if (!this.props.client) {
            return(<p>Your choice</p>);
        }
        return(
            <div>
                <img src={this.props.client.general.avatar} alt="" className='imaging'/>
                <p className='name'>Name: {this.props.client.general.firstName}</p>
                <p className='lastname'>Last Name: {this.props.client.general.lastName}</p>
                <p className='company'>Company: {this.props.client.job.company}</p>
                <p className='title'>Title: {this.props.client.job.title}</p>
                <p className='mail'>Email: {this.props.client.contact.email}</p>
                <p className='phone'>Phone: {this.props.client.contact.phone}</p>
                <p className='street'>Street: {this.props.client.address.street}</p>
                <p className='city'>City: {this.props.client.address.city}</p>
                <p className='zip'>Zip Code: {this.props.client.address.zipCode}</p>
                <p className='country'>Country: {this.props.client.address.country}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        client: state.active
    };
}
export default connect(mapStateToProps)(Data);