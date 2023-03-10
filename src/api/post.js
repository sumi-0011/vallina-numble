import { requestGET, requestPATCH, requestPOST, requestDELETE } from '.';

const getPost = async (postId) => {
  try {
    const { data } = await requestGET(`/post/${postId}`);

    return data;
  } catch (error) {
    throw error;
  }
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
    const body = { title, content, image };
    cleanObj(body);

    const { data } = await requestPATCH(`/post/${postId}`, body);

    return data.post.postId;
  } catch (error) {
    alert(error);
    throw error;
  }
};

const deletePost = async (postId) => {
  try {
    const res = await requestDELETE(`/post/${postId}`);
    if (res.code == 200) {
      return true;
    } else {
      throw new Error('글 삭제에 실패하였습니다.');
    }
  } catch (error) {
    throw error;
  }
};

const cleanObj = (obj) => {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
};

export { getPost, getPostList, addPost, editPost, deletePost };
