// tslint:disable: ter-prefer-arrow-callback
// tslint:disable: only-arrow-functions
// eslint-disable-next-line func-names

export const messages: string[] = ['hi!', 'こんにちわ', '您好'];
// tslint:disable-next-line: insecure-random
export const createIndex = (sleep: number): number => sleep % messages.length;

export const getRandomMessage = async (sleep = 3000): Promise<string> => {
  const message = messages[createIndex(sleep)];
  const createMessage = resolve => setTimeout(() => resolve(message), sleep);

  return new Promise(resolve => createMessage(resolve));
};
