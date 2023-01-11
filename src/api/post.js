import { requestGET, requestPATCH, requestPOST, requestDELETE } from '.';

const getPost = async (postId) => {
  const { data } = await requestGET(`/post/${postId}`);

  return data;
};

function comparePostID(a, b) {
  return parseInt(b.postId) - parseInt(a.postId);
}

const getPostList = async () => {
  try {
    const { data } = await requestGET(`/posts`);

    const posts = data.posts;
    posts.sort(comparePostID);

    return { ...data, posts };
  } catch (error) {
    throw error;
  }
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

const editPost = async (postId, title, content, image) => {
  try {
    // TODO : 변경하려는 필드만 으로 바꾸기
    const body = { title, content, image };
    cleanObj(body);

    const data = await requestPATCH(`/post/${postId}`, body);

    return data.post.postId;
  } catch (error) {
    console.log('error: ', error);
  }
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

export { getPost, getPostList, addPost, editPost, deletePost };
