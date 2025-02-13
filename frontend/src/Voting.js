import React, { useEffect, useState } from "react";
import { getCandidates, submitVote } from "../api";

const Voting = ({ user }) => {
  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getCandidates().then((res) => setCandidates(res.data));
  }, []);

  const handleVote = async () => {
    if (!selected) return alert("Select a candidate first!");
    const { data } = await submitVote({ user_id: user.id, candidate_id: selected });
    alert(data.message);
  };

  return (
    <div>
      <h2>Vote for a Candidate</h2>
      <ul>
        {candidates.map((c) => (
          <li key={c.id}>
            <input type="radio" value={c.id} onChange={(e) => setSelected(e.target.value)} />
            {c.name}
          </li>
        ))}
      </ul>
      <button onClick={handleVote} disabled={!selected}>Vote</button>
    </div>
  );
};

export default Voting;
