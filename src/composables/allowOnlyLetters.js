export default function allowOnlyLetters(e) {
  const isLetter = /[a-zA-Z]/i.test(e.key);

  if (!isLetter) {
    e.preventDefault();
  }
}
