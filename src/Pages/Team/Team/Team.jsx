import React, { useState } from 'react';

function Team() {
  const [teams, setTeams] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [newTeam, setNewTeam] = useState({ name: '', description: '' });
  const [invitationEmail, setInvitationEmail] = useState('');

  const createTeam = () => {
    const team = { id: Date.now(), ...newTeam, members: [] };
    setTeams([...teams, team]);
    setNewTeam({ name: '', description: '' });
  };

  const sendInvitation = (teamId) => {
    const invitation = {
      id: Date.now(),
      teamId,
      email: invitationEmail,
      status: 'pending',
    };
    setInvitations([...invitations, invitation]);
    setInvitationEmail('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold mb-4">Collaborative Task Management App</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Create a Team</h2>
          <input
            type="text"
            placeholder="Team Name"
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            placeholder="Team Description"
            value={newTeam.description}
            onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <button onClick={createTeam} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create Team
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Invite User to Team</h2>
          <input
            type="email"
            placeholder="User's Email"
            value={invitationEmail}
            onChange={(e) => setInvitationEmail(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <select className="w-full p-2 mb-2 border rounded">
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
          <button onClick={() => sendInvitation(1)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send Invitation
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Teams</h2>
        <ul>
          {teams.map((team) => (
            <li key={team.id} className="mb-2">
              <strong>{team.name}</strong>: {team.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Pending Invitations</h2>
        <ul>
          {invitations.map((invitation) => (
            <li key={invitation.id} className="mb-2">
              {invitation.email} (Status: {invitation.status})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Team;
