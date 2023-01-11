import { requestDELETE, requestPOST } from '.';

const addComment = async (postId, content) => {
  try {
    const data = await requestPOST(`/comment/${postId}`, { content });
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteComment = async (commentId) => {
  try {
    const res = await requestDELETE(`/comment/${commentId}`);
  } catch (error) {
    throw error;
  }
};

export { addComment, deleteComment };
