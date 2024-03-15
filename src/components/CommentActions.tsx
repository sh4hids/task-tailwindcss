import { User } from './Comment';

interface CommentActionProps {
    currentUser?: User;
    userId: number;
}

function CommentActions({ currentUser, userId }: CommentActionProps) {
    return (
        <div className="flex items-center pt-4 *:mr-4 last:*:mr-0 sm:pl-0 sm:pt-0">
            {currentUser?.id !== userId ? (
                <button className="flex items-center font-bold text-indigo-700">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="mr-2 size-4"
                        fill="currentColor"
                    >
                        <path d="M23.808 32c3.554-6.439 4.153-16.26-9.808-15.932v7.932l-12-12 12-12v7.762c16.718-0.436 18.58 14.757 9.808 24.238z"></path>
                    </svg>
                    <span>Reply</span>
                </button>
            ) : (
                <>
                    {' '}
                    <button className="flex items-center font-bold text-red-700">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            className="mr-2 size-4"
                            fill="currentColor"
                        >
                            <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"></path>
                        </svg>
                        <span>Delete</span>
                    </button>
                    <button className="flex items-center font-bold text-indigo-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="mr-2 size-4"
                        >
                            <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                        </svg>

                        <span>Edit</span>
                    </button>
                </>
            )}
        </div>
    );
}

export default CommentActions;
