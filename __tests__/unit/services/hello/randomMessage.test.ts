import {
  getRandomMessage,
  messages,
} from '../../../../services/hello/randomMessage';

test('指定秒後にランダムにメッセージを返す', async () => {
  const message: string = await getRandomMessage(1);
  console.log(
    message,
    messages,
    messages[0] === 'hi!',
    typeof message,
    typeof 'hi!',
    message.toString() === 'hi!',

    messages.includes(message),
    messages.includes(messages[0]),
  );
  expect(messages.includes(message)).toBeTruthy();
});
