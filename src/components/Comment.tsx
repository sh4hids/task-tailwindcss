import { formatDistanceToNow } from "date-fns";
import CommentActions from "./CommentActions";
import UserProfile from "./UserProfile";
import CommentVotes from "./CommentVotes";

export interface Comment {
  id: number;
  created_by: number;
  body: string;
  created_at: string;
  updated_at: string;
  votes: number;
}

export interface CommentData extends Comment {
  replies?: Comment[];
}

export interface User {
  id: number;
  gender: string;
  name: { title: string; first: string; last: string };
  email: string;
  phone: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export type CommentProps = {
  comment: CommentData;
  user: User;
  currentUser?: User;
};

function Comment({ comment, user, currentUser }: CommentProps) {
  return (
    <div className="flex bg-white p-6 rounded-lg mb-6 last:mb-0">
      <CommentVotes currentVotes={comment.votes} />
      <div className="pl-6">
        <div className="flex justify-between">
          <div className="flex items-center  *:mr-4 last:*:mr-0">
            <UserProfile user={user} currentUser={currentUser} />
            <p className="text-gray-700/70 font-normal">
              {`${formatDistanceToNow(new Date(comment.created_at))}`.replace(
                "about ",
                "",
              )}{" "}
              ago
            </p>
          </div>
          <CommentActions currentUser={currentUser} userId={user.id} />
        </div>
        <p
          className="pt-4 text-gray-700/70 [&>a]:font-bold"
          dangerouslySetInnerHTML={{ __html: comment.body }}
        ></p>
      </div>
    </div>
  );
}

export default Comment;
