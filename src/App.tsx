import React, { useState } from 'react';
import UserCard from './components/UserCard';
import PostCard from './components/PostCard';

const USERS = {
  "1": "John Doe",
  "2": "Jane Doe",
  "3": "Alice Smith",
  "4": "Bob Johnson",
  "5": "Charlie Brown",
  "6": "Diana White",
  "7": "Edward Davis",
  "8": "Fiona Miller",
  "9": "George Wilson",
  "10": "Helen Moore",
  "11": "Ivy Taylor",
  "12": "Jack Anderson",
  "13": "Kathy Thomas",
  "14": "Liam Jackson",
  "15": "Mona Harris",
  "16": "Nathan Clark",
  "17": "Olivia Lewis",
  "18": "Paul Walker",
  "19": "Quinn Scott",
  "20": "Rachel Young"
};

const POSTS = [
  {
    "id": 246,
    "userid": 1,
    "content": "Post about ant"
  },
  {
    "id": 161,
    "userid": 1,
    "content": "Post about elephant"
  },
  {
    "id": 150,
    "userid": 1,
    "content": "Post about ocean"
  },
  {
    "id": 370,
    "userid": 1,
    "content": "Post about monkey"
  },
  {
    "id": 344,
    "userid": 1,
    "content": "Post about ocean"
  },
  {
    "id": 952,
    "userid": 1,
    "content": "Post about zebra"
  },
  {
    "id": 647,
    "userid": 1,
    "content": "Post about igloo"
  },
  {
    "id": 421,
    "userid": 1,
    "content": "Post about house"
  },
  {
    "id": 890,
    "userid": 1,
    "content": "Post about bat"
  },
  {
    "id": 461,
    "userid": 1,
    "content": "Post about umbrella"
  }
];

function App() {
  const [selectedUserId, setSelectedUserId] = useState<string>('1');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <h1 className="text-2xl font-bold text-gray-800">Social Media Feed</h1>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <div className="space-y-4">
              {Object.entries(USERS).map(([id, name]) => (
                <UserCard
                  key={id}
                  id={id}
                  name={name}
                  onSelectUser={setSelectedUserId}
                />
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Posts by {USERS[selectedUserId]}</h2>
            <div className="space-y-4">
              {POSTS.filter(post => post.userid.toString() === selectedUserId).map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  content={post.content}
                  userName={USERS[post.userid.toString()]}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;