import React from 'react';
import { connect } from 'react-redux';

import { Fab } from 'rmwc/Fab'

import { Table } from '../components/Table';
import Toolbar from '../components/Toolbar';
import { editSession, removeSession, addSession } from '../actions/game/sessions';

const mapStateToProps = (state) => ({
  sessions: state.game.sessions,
});

const mapDispatchToProps = {
  editSession,
  removeSession,
  addSession,
};

const sessionToRow = (editSession, removeSession) => (session, index) => (
  [
    <input
      type="text"
      value={session.title || ''}
      onChange={event => editSession(index, { ...session, title: event.target.value })}
    />,
    <input
      type="date"
      value={session.date || ''}
      onChange={event => editSession(index, { ...session, date: event.target.value })}
    />,
    <textarea
      value={session.shortDesc || ''}
      onChange={event => editSession(index, { ...session, shortDesc: event.target.value })}
    />,
    <textarea
      value={session.longDesc || ''}
      onChange={event => editSession(index, { ...session, longDesc: event.target.value })}
    />,
    <input
      type="color"
      value={session.color || ''}
      onChange={event => editSession(index, { ...session, color: event.target.value })}
    />,
    <button onClick={() => removeSession(index)}>delete</button>,
  ]
);

const Sessions = ({ sessions, editSession, removeSession, addSession }) => (
  <div>
    <Table
      className="table--root"
      columns={[
        'Title',
        'Date',
        'Short Description',
        'Long Description',
        'Color',
      ].map(columnName =>
        <div key={columnName} className="table--column__resizable">{columnName}</div>
      )}
      rows={sessions.map(sessionToRow(editSession, removeSession))}
    />
    <Toolbar tools={[
      <Fab onClick={() => addSession({})}>add</Fab>,
    ]} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
