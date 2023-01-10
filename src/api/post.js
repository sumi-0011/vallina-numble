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
  image = `https://img.freepik.com/premium-photo/small-tricolor-kitten-meows-floorroom_
  457211-10960.jpg?w=1060`;
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
      return {
        code: 400,
        message: '중복 게시글은 작성할 수 없습니다.',
      };
    }
  } catch (error) {
    console.log('error: ', error);
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
