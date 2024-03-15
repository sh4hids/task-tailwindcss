import { User } from "./Comment";

interface CommentBoxProps {
  user: User;
}

function CommentBox({ user }: CommentBoxProps) {
  return (
    <div className="w-full mt-6 flex *:mr-4 last:*:mr-0 bg-white p-6 rounded-md">
      <div className="w-14 h-14">
        <img
          src={user.picture.thumbnail}
          alt="johndoe"
          className="w-full h-auto rounded-full"
        />
      </div>
      <textarea
        className="w-full border py-2 px-6 rounded-md resize-none"
        placeholder="Add a comment..."
        rows={3}
      />
      <button className="text-white uppercase bg-indigo-700 py-3 h-full px-8 rounded-md ">
        Send
      </button>
    </div>
  );
}

export default CommentBox;
