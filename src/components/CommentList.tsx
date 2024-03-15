import Comment, { CommentData, User } from "./Comment";

interface CommentListProps {
  comments: CommentData[];
  users: User[];
}

function CommentList({ comments, users }: CommentListProps) {
  return (
    <>
      {comments.map((comment) => (
        <>
          <Comment
            comment={comment}
            user={users.find((user) => user.id === comment.created_by) as User}
          />
          {comment.replies?.length ? (
            <div className="ml-11 pl-11 border-l-2 ">
              {comment.replies?.map((reply) => (
                <Comment
                  comment={reply}
                  user={
                    users.find((user) => user.id === reply.created_by) as User
                  }
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </>
      ))}
    </>
  );
}

export default CommentList;
