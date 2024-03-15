import { Fragment } from 'react/jsx-runtime';
import Comment, { CommentData, User } from './Comment';

interface CommentListProps {
    comments: CommentData[];
    users: User[];
    currentUser?: User;
}

function CommentList({ comments, users, currentUser }: CommentListProps) {
    return (
        <>
            {comments.map((comment) => (
                <Fragment key={comment.id}>
                    <Comment
                        comment={comment}
                        user={
                            users.find(
                                (user) => user.id === comment.created_by
                            ) as User
                        }
                        currentUser={currentUser}
                    />
                    {comment.replies?.length ? (
                        <div className="ml-4 border-l-2 pl-6 sm:ml-11 sm:pl-11">
                            {comment.replies?.map((reply) => (
                                <Comment
                                    key={reply.id}
                                    comment={reply}
                                    user={
                                        users.find(
                                            (user) =>
                                                user.id === reply.created_by
                                        ) as User
                                    }
                                    currentUser={currentUser}
                                />
                            ))}
                        </div>
                    ) : (
                        ''
                    )}
                </Fragment>
            ))}
        </>
    );
}

export default CommentList;
