import React, {Component} from 'react'

class Article extends Component{
    constructor (props){
        super(props);

        this.state = {
            isOpen: false
        }
        this.handleClick = handleClick.bind(this)
    }
    render(){
        const {article} = this.props;
        return(

            <div>
                <div>
                    <img src={article.general.avatar} />
                </div>
                <h1>{article.general.firstName}   {article.general.lastName}</h1>
                <button onClick={this.handleClick}> close</button>
                <div>
                    <h2>Contacts: </h2>
                    <p>Email:   {article.contact.email}</p>
                    <p>Phone:  {article.contact.phone}</p>
                </div>
                <div>
                    <h2>Address:</h2>
                    <p>Country: {article.address.country}</p>
                    <p>City: {article.address.city}</p>
                    <p>Street: {article.address.street}</p>
                    <p>ZipCode: {article.address.zipCode}</p>
                </div>
                <div>
                    <h2>Job: </h2>
                    <p>Company: {article.job.company}</p>
                    <p>Title: {article.job.title}</p>
                </div>
            </div>
        )
    }
}


function handleClick() {
    console.log('click');
    this.setState({
        isOpen: !this.state.isOpen
    })
}
export default Article;