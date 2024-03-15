import { formatDistance, formatDistanceToNow } from "date-fns";
import CommentActions from "./CommentActions";
import UserProfile from "./UserProfile";

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
      <div className="text-center h-full bg-gray-100 p-3 rounded-lg *:pb-1 last:*:pb-0 *:font-bold text-indigo-700">
        <button className="text-indigo-700/40">+</button>
        <p>{comment.votes}</p>
        <button className="text-indigo-700/40">-</button>
      </div>
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
