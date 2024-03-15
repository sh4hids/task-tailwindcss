import { useState } from "react";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import comments from "./data/comments.json";
import users from "./data/users.json";
import { User } from "./components/Comment";

function App() {
  const [currentUser, setCurrentUser] = useState<User>(users[1]);
  console.log(comments);
  console.log(users);

  return (
    <div className="max-w-3xl px-4 mx-auto my-16">
      <CommentList comments={comments} users={users} />
      <CommentBox user={currentUser} />
    </div>
  );
}

export default App;
