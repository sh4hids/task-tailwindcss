import { User } from './Comment';

interface UserProfileProps {
    user: User;
    showUsername?: boolean;
    currentUser?: User;
}

function UserProfile({
    user,
    showUsername = true,
    currentUser,
}: UserProfileProps) {
    return (
        <>
            <a href="#" className="flex cursor-pointer items-center">
                <div className="mr-4 size-8">
                    <img
                        src={user.picture.thumbnail}
                        alt={`${user.name.first}${user.name.last}`.toLowerCase()}
                        className="h-auto w-full rounded-full"
                    />
                </div>
                {showUsername ? (
                    <p className="font-bold text-zinc-700">
                        <>
                            {`${user.name.first}${user.name.last}`.toLowerCase()}{' '}
                        </>
                        {currentUser && currentUser.id === user.id ? (
                            <span className="ml-1 rounded-sm bg-indigo-700 px-1.5 py-0.5 text-xs font-bold lowercase text-white">
                                You
                            </span>
                        ) : (
                            ''
                        )}
                    </p>
                ) : (
                    ''
                )}
            </a>
        </>
    );
}

export default UserProfile;
