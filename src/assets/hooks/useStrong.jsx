const regexp = /(<strong>)(.*)(<\/strong>)/g;
const regexp2 = /(?<=<strong>)(.*)(?=<\/strong>?)/g;

function cutText(regexp, text) {
  const notMatches = text.match(regexp);
  const textMatches = user.hero.description.match(regexp);
  // const test = textMatches.forEach(createElement('html', textMatches));
  // console.log(test);
  console.log(notMatches);
}
cutText(regexp2, user.hero.description);
function useStrong() {}
