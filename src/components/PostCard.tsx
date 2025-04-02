import React, { useState } from 'react';

interface PostCardProps {
  id: number;
  content: string;
  userName: string;
}

const COMMENTS = [
  {
    "id": 3893,
    "postid": 150,
    "content": "Old comment"
  },
  {
    "id": 4791,
    "postid": 150,
    "content": "Boring comment"
  }
];

const PostCard: React.FC<PostCardProps> = ({ id, content, userName }) => {
  const postComments = COMMENTS.filter(comment => comment.postid === id);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="mb-2 text-sm text-gray-600">Posted by: {userName}</div>
      <p className="text-gray-800">{content}</p>
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Comments:</h4>
        {postComments.map((comment) => (
          <div key={comment.id} className="ml-4 mt-2 text-sm text-gray-600">
            {comment.content}
          </div>
        ))}
        {postComments.length === 0 && (
          <div className="ml-4 mt-2 text-sm text-gray-500 italic">
            No comments yet
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;