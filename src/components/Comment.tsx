import { formatDistanceToNow } from 'date-fns';
import CommentActions from './CommentActions';
import UserProfile from './UserProfile';
import CommentVotes from './CommentVotes';

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
        <div className="mb-6 flex rounded-lg bg-white p-4 last:mb-0 sm:p-6">
            <CommentVotes currentVotes={comment.votes} />
            <div className="pl-4 sm:pl-6">
                <div className="flex flex-col justify-between sm:flex-row">
                    <div className="flex flex-col *:mr-4 last:*:mr-0  sm:flex-row sm:items-center">
                        <UserProfile user={user} currentUser={currentUser} />
                        <p className="pl-12 text-sm font-normal text-gray-700/70 sm:pl-0 sm:text-base">
                            {`${formatDistanceToNow(new Date(comment.created_at))}`.replace(
                                'about ',
                                ''
                            )}{' '}
                            ago
                        </p>
                    </div>
                    <div className="hidden sm:block">
                        <CommentActions
                            currentUser={currentUser}
                            userId={user.id}
                        />
                    </div>
                </div>
                <p
                    className="pt-4 text-gray-700/70 [&>a]:font-bold"
                    dangerouslySetInnerHTML={{ __html: comment.body }}
                ></p>
                <div className="sm:hidden">
                    <CommentActions
                        currentUser={currentUser}
                        userId={user.id}
                    />
                </div>
            </div>
        </div>
    );
}

export default Comment;
