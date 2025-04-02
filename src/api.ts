const BASE_URL = 'http://20.244.56.144/evaluation-service';

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.log('Error fetching users:', error);
    return {};
  }
};

export const getPosts = async (userId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}/posts`);
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.log('Error fetching posts:', error);
    return [];
  }
};

export const getComments = async (postId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    const data = await response.json();
    return data.comments;
  } catch (error) {
    console.log('Error fetching comments:', error);
    return [];
  }
};