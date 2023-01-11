import { requestGET, requestPATCH, requestPOST, requestDELETE } from '.';

const getPost = async (postId) => {
  const { data } = await requestGET(`/post/${postId}`);

  return data;
};

const getPostList = async () => {
  const { data } = await requestGET(`/posts`);

  return data;
};

const addPost = async (title, content, image) => {
  if (!title || !content || !image) {
    throw new Error('입력하지 않은 값이 있습니다. 모두 입력해주세요.');
  }

  try {
    const response = await requestPOST(`/post`, {
      title,
      content,
      image,
    });

    if (response.code === 201) {
      const { data } = response;
      return {
        code: 201,
        postId: data.postId,
      };
    }

    if (response.status === 400) {
      throw new Error('중복 게시글은 작성할 수 없습니다.');
    }
  } catch (error) {
    throw error;
  }
};

const modifyPost = async (postId, title, content, image) => {
  const body = { title, content, image };
  cleanObj(body);

  const data = await requestPATCH(`/post/${postId}`, body);

  return data;
};
const deletePost = async (postId) => {
  const res = await requestDELETE(`/post/${postId}`);
  console.log('res: ', res);

  return res;
};

const cleanObj = (obj) => {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
};

export { getPost, getPostList, addPost, modifyPost, deletePost };
