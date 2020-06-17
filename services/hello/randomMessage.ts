// tslint:disable: ter-prefer-arrow-callback
// tslint:disable: only-arrow-functions
// eslint-disable-next-line func-names
export const getRandomMessage = async (sleep = 3000) => {
  // TODO: メッセージをランダムで返すようにする
  const createMessage = resolve =>
    setTimeout(() => resolve({ message: 'hi!' }), sleep);

  return new Promise(resolve => createMessage(resolve));
};
