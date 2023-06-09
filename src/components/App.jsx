import { useState, useEffect } from 'react';
// import shortid from 'shortid';
import Form from './Phonebook/Form';
import ContactsList from './ContactsList/ContactsList';
import css from './App.module.css';
import Filter from './Filter/FilterContact';

export default function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

 const formSubmithandler = data => {
   if (
     !contacts.find(
       contact => data.name.toLocaleLowerCase() === contact.name.toLowerCase()
     )
   ) {
     setContacts(prevState => (prevState ? [...prevState, data] : [data]));
   } else {
     alert(`${data.name} is already in contacts.`);
   }
 };

    // const deleteContact = contactId => {
    //   setContacts(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    //   }));
    // };
 
  const deleteContact = contactId => {
   setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
 };

  // const formSubmithandler = data => {
  //   if (
  //     !contacts.find(
  //       contact => data.name.toLocaleLowerCase() === contact.name.toLowerCase()
  //     )
  //   ) {
  //     setContacts(prevState => (prevState ? [...prevState, data] : [data]));
  //   } else {
  //     alert(`${data.name} is already in contacts.`);
  //   }
  // };

  const filterContact = evt => {
    setFilter( evt.currentTarget.value );
  };


  const normalizeFilter = filter.toLowerCase();
  const visibleFilter = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(normalizeFilter)
  );

  // const { filter } = state;

  return (
    <div className={css.style}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmithandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterContact} />
      <ContactsList
        contactList={visibleFilter}
        ondeleteContact={deleteContact}
      />
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

//   formSubmithandler = data => {
//     const contact = {
//       ...data,
//       id: shortid(),
//     };
//     console.log(contact);
//     if (
//       this.state.contacts.some(
//         item => item.name.toLowerCase() === contact.name.toLowerCase()
//       )
//     ) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   filterContact = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   render() {
//     const normalizeFilter = this.state.filter.toLowerCase();
//     const visibleFilter = this.state.contacts.filter(contacts =>
//       contacts.name.toLowerCase().includes(normalizeFilter)
//     );

//     const { filter } = this.state;

//     return (
//       <div className={css.style}>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.formSubmithandler} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.filterContact} />
//         <ContactsList
//           contactList={visibleFilter}
//           ondeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
