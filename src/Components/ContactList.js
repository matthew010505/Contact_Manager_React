import React from "react";
import ContactCard from "./ContactCard.js";

const ContactList = (props) =>{
    console.log(props);

    const deleteContactHandler= (id)=>{
        props.getContactId(id);
    }

    const renderContactlist=props.contacts.map((contact) =>{
        return (
           <ContactCard contact={contact} clickHandler={deleteContactHandler}/>
        )
    }

    )

    return(
        <div className="ui celled list">
            {renderContactlist}
        </div>
    )
}

export default ContactList;