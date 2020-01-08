document.addEventListener('DOMContentLoaded', () => {
  const examples = document.getElementsByClassName('js-example');

  if (!examples.length) {
    return;
  }

  for (let index = 0; index < examples.length; index++) {
    initializeExample(examples[index]);
  }
});

function initializeExample(node) {
  const checkbox = node.getElementsByClassName('js-example-checkbox')[0];
  const previewFieldset = node.getElementsByClassName('js-example-fieldset')[0];

  if (!checkbox || !previewFieldset) {
    return;
  }

  if (checkbox.checked) {
    previewFieldset.disabled = true;
  }

  checkbox.addEventListener('change', () => {
    previewFieldset.disabled = checkbox.checked;
  });
}
