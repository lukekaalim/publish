import React from 'react';
import { connect } from 'react-redux';
import DataTable from '../components/DataTable';
import MakeEditable from '../components/DataTable/MakeEditable';
import WithFabButton from '../layouts/WithFabButton';
import { addContact, editContact } from '../actions/game/contacts';

const mapStateToProps = (state) => ({
  contactData: state.game.contacts,
});

const mapDispatchToProps = {
 addContact,
 editContact,
};

const contactToRow = (contact) => {
  return [contact.name, contact.question, contact.answer];
};

const onEditCell = (editContact, contactData) => (event, rowIndex, cellIndex) => {
  const { name, question, answer } = contactData[rowIndex];
  const contactRowArguments = [name, question, answer];
  contactRowArguments[cellIndex] = event.target.value;
  editContact(rowIndex, ...contactRowArguments);
};

const contacts = ({ contactData, addContact, editContact }) => {
  const columns = ['Contact', 'Questions', 'Answers'];
  const rows = contactData.map(contactToRow);
  return (
    <WithFabButton
      content={
        <MakeEditable
          rows={rows}
          render={(editableRows) =>
            <DataTable
              columns={columns}
              rows={editableRows}
             />
          }
          onEdit={onEditCell(editContact, contactData)}
        />
      }
      buttonProps={{
        className: '.material-icons',
        children: ('add'),
        onClick: () => addContact('', '', ''),
      }}
     />
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(contacts);
