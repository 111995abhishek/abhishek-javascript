import { Component } from "react";

class ContactListComponent extends Component {
    constructor(){
        super();
        this.state={
            contacts:[{name:"abhishek",mobile:9739921787},
                       {name:"asif",mobile:8797166198},
                        {name:'akshata',mobile:78945662},
                        {name:"shubham",mobile:13456} ]};
    }
    render(){
        return(
            <div>
                <h1>my  contact list</h1>
                {this.state.contacts.map(contact=>(<p><b>{contact.name}</b>{contact.mobile}</p>))}
            </div>
        )
    }
    }

    export default ContactListComponent;