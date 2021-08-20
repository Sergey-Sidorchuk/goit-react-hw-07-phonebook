import Container from './Components/Container';
import Form from './Components/ContactsForm';
import Filter from './Components/Filter';
import Contacts from './Components/Contacts';

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts</h2>

      <Filter />

      <Contacts />
        
    </Container>
  )
};