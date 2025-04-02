import React from 'react';

interface UserCardProps {
  id: string;
  name: string;
  onSelectUser: (userId: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ id, name, onSelectUser }) => {
  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onSelectUser(id)}
    >
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">Click to view posts</p>
    </div>
  );
};

export default UserCard;