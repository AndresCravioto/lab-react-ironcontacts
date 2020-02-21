import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json';
import Contact from './Components/contact.js';
import AddContactButton from './Components/addContactButton.js';

class App extends Component {

  state = {
    listOfContacts: Contacts.slice(0,5),
    missingContacts: Contacts.slice(5, Contacts.length)
  }

  addContact = () => {
    let index = Math.floor(Math.random() * this.state.missingContacts.length);
    const missingClone = Array.from(this.state.missingContacts);
    let newContact = missingClone.splice(index, 1)
    console.log([...this.state.listOfContacts, newContact])
    this.setState({
      listOfContacts: [...this.state.listOfContacts, ...newContact],
      missingContacts: missingClone
    })
  }


  render() {
    return (
      <div>
        <div className="flex">
          <h1>IronContacts</h1>
        </div>
        <div className="flex">
          <p>
            Picture
          </p>
          <p>
            Name
          </p>
          <p>
            popularity
          </p>
        </div>
        <AddContactButton addFunction={this.addContact}/>
        {this.state.listOfContacts.map((contact, i) => {
          return <Contact key={contact + i} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}/>
        })}
        
      </div>
    );
  }
}

export default App;
