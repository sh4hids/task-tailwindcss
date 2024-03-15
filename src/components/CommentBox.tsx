import { User } from './Comment';

interface CommentBoxProps {
    user: User;
}

function CommentBox({ user }: CommentBoxProps) {
    return (
        <div className="mt-6 flex w-full flex-col rounded-md bg-white p-4 sm:flex-row sm:p-6 sm:*:mr-4 sm:last:*:mr-0">
            <div className="flex w-full *:mr-4 last:*:mr-0">
                <div className="size-14">
                    <img
                        src={user.picture.thumbnail}
                        alt="johndoe"
                        className="h-auto w-full rounded-full"
                    />
                </div>
                <textarea
                    className="w-full resize-none rounded-md border px-6 py-2 placeholder:text-gray-700/80"
                    placeholder="Add a comment..."
                    rows={3}
                />
            </div>
            <button className="mt-4 h-full rounded-md bg-indigo-700 py-2 uppercase text-white sm:mt-0 sm:px-8 sm:py-3 ">
                Send
            </button>
        </div>
    );
}

export default CommentBox;
