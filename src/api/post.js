import { requestGET } from '.';

const getPost = async (postId) => {
  const { data } = await requestGET(`/post/${postId}`);

  return data;
};

export { getPost };
