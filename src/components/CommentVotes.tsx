import { useState } from "react";

interface CommentVotesProps {
  currentVotes?: number;
}

function CommentVotes({ currentVotes = 0 }: CommentVotesProps) {
  const [voteCount, setVoteCount] = useState(currentVotes);
  return (
    <div className="text-center h-full bg-gray-100 py-1 px-3.5 rounded-lg *:pb-1 last:*:pb-0 *:font-bold text-indigo-700">
      <button
        className="text-indigo-700/40 mb-2 "
        onClick={() => setVoteCount(voteCount + 1)}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="w-2.5 h-2.5"
          fill="currentColor"
        >
          <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
        </svg>
      </button>
      <p>{voteCount}</p>
      <button
        className="text-indigo-700/40 "
        onClick={() => setVoteCount(voteCount - 1)}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="w-2.5 h-2.5"
          fill="currentColor"
        >
          <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
        </svg>
      </button>
    </div>
  );
}

export default CommentVotes;
