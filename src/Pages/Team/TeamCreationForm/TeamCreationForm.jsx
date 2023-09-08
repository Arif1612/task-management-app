import React, { useState } from "react";

function TeamCreationForm() {
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");

  const handleTeamCreation = (e) => {
    e.preventDefault();
    // Implement logic to create a new team, possibly making an API request.
    // You may want to associate the team with the user who creates it.
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Create a New Team</h2>
        <form onSubmit={handleTeamCreation}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="teamName">
              Team Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="teamDescription">
              Team Description
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              id="teamDescription"
              value={teamDescription}
              onChange={(e) => setTeamDescription(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Create Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TeamCreationForm;
