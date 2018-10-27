import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../action/index';
import   "../conteiners/List";
class List extends Component {
    constructor(){
        super();
        this.state = {
            search: ''
        };
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0,20)});
    }

    render() {
        let selectClient = this.props.client.filter((client) =>{
            return client.general.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;});
        return (

            <div>
                <div>
                    <form>
                        <input type="text"
                               value={this.state.select} onChange={this.updateSearch.bind(this)}/>
                    </form>
                </div>
                <div>
                    {selectClient.map((client) => {
                        return (
                            <div onClick={() => this.props.select(client)} key={client.general.firstName}><img
                                src={client.general.avatar} alt="" width={'50px'} height={'50px'}/> {client.general.firstName}
                                {client.job.title} </div>
                        );
                    })}

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        client: state.client,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select},dispatch)
}
export default connect (mapStateToProps, matchDispatchToProps)(List);