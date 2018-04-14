/*!
 * @Date:2018-3-18
 * @Author:DIEW
 */

const initState = {
  type:'1313123',
  test:'sdfasdfasdf'
};
export default function category(state = initState, action) {
  switch (action.type) {
    case 'one':
      return Object.assign({}, state, {
        test: '12312312312312312312312'
      });
    case 'two':
      return Object.assign({}, state, {
        loading: false,
        test: '6666666666666666666666'
      });
    default:
      return state;
  }
}
