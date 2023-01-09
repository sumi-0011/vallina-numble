const ROUTE_CHANGE_EVENT = 'ROUTE_CHANGE';

export const init = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};
// 기본적으로 location.href 등을 이용해  URL 변경 처리를 하면, 브라우저는 해당 페이지로 이동하면서 페이지를 새로 불러온다.
//history.pushState를 이용하면, URL만 업데이트 하면서 웹 브라우저의 기본적인 페이지 이동을 방지할 수 있다.

//pushState를 통해서 URL이 변경되는 것을 감지하기 위해, 커스텀 이벤트를 이용
export const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};
