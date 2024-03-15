import { useState } from 'react';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import comments from './data/comments.json';
import users from './data/users.json';
import { User } from './components/Comment';

function App() {
    const [currentUser, _setCurrentUser] = useState<User>(users[1]);

    return (
        <div className="max-w-3xl px-4 mx-auto my-16">
            <CommentList
                comments={comments}
                users={users}
                currentUser={currentUser}
            />
            <CommentBox user={currentUser} />
        </div>
    );
}

export default App;
