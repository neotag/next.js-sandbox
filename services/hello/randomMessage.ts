// tslint:disable: ter-prefer-arrow-callback
// tslint:disable: only-arrow-functions
// eslint-disable-next-line func-names

export const messages: string[] = ['hi!', 'こんにちわ', '您好'];

export const getRandomMessage = async (sleep = 3000): Promise<string> => {
  // tslint:disable-next-line: insecure-random
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log('hoge', typeof message);
  const createMessage = resolve => setTimeout(() => resolve(message), sleep);

  return new Promise(resolve => createMessage(resolve));
};
