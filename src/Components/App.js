import React,{useState,useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import AddContact from  "./AddContact.js";
import ContactList from "./ContactList.js";
import ContactCard from "./ContactCard.js";
import Header from "./Header.js";



function App() {
  const LOCAL_STORAGE_KEY="contacts";
    const  [contacts, setContacts] = useState([]) ;

    const addContactHandler=(contact)=>{
      console.log(contact);
      setContacts([...contacts,{id: uuid(), ...contact}]);
    };
    const removeContactHandler= (id) =>{
      const newContactlist=contacts.filter((contact) => {
        return contact.id!==id;
      });

      setContacts(newContactlist);
    }
    
    
    useEffect(() => {
      const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (retrieveContacts) {
        setContacts((prevContacts) => [...prevContacts, ...retrieveContacts]);
      }
    }, []);

    useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    },[contacts]);

  return (
    <div  className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList  contacts={contacts} getContactId={removeContactHandler} />
      
    </div>
  );
}

export default App;
