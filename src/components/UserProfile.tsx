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
            <a href="#" className="flex items-center cursor-pointer">
                <div className="w-8 h-8 mr-4">
                    <img
                        src={user.picture.thumbnail}
                        alt={`${user.name.first}${user.name.last}`.toLowerCase()}
                        className="w-full h-auto rounded-full"
                    />
                </div>
                {showUsername ? (
                    <p className="font-bold text-zinc-700">
                        {`${user.name.first}${user.name.last}`.toLowerCase()}
                    </p>
                ) : (
                    ''
                )}
            </a>
            {currentUser && currentUser.id === user.id ? (
                <p className="-ml-2 bg-indigo-700 text-xs font-bold lowercase text-white px-1.5 py-0.5 rounded-sm">
                    You
                </p>
            ) : (
                ''
            )}
        </>
    );
}

export default UserProfile;
