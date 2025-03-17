Just a quick flash card game I put together to learn certain topics, just modify the data.json file for proper questions you wish to learn.

You need to modify script.js when adding new datasets, as trying to keep this JS/HTML only, no server-side, may adjust later.

If running this locally without a server, you likely won't be able to use data.json loading for security reasons, so replace the flashCards variable loading code with:

```
const flashCards = [
  { question: 'What is 2 + 2', answer: '4' },
  { question: 'Another questions.', answer: 'Yes' },
];
```
