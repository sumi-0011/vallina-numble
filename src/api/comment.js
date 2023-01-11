import { requestDELETE, requestPOST } from '.';

const addComment = async (postId, content) => {
  console.log('postId, content: ', postId, content);
  try {
    const data = await requestPOST(`/comment/${postId}`, { content });
    console.log('data: ', data);

    return data;
  } catch (error) {
    throw error;
  }
};

const deleteComment = async (commentId) => {
  const res = await requestDELETE(`/comment/${commentId}`);
  console.log('res: ', res);
};

export { addComment, deleteComment };
