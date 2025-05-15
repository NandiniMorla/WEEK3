function addSnippet() {
  const code = document.getElementById('codeInput').value;
  const language = document.getElementById('language').value;
  const snippetsDiv = document.getElementById('snippets');

  if (!code.trim()) {
    alert("Please enter some code!");
    return;
  }

  const pre = document.createElement('pre');
  const codeEl = document.createElement('code');
  codeEl.className = `language-${language}`;
  codeEl.textContent = code;
  pre.appendChild(codeEl);
  snippetsDiv.prepend(pre);
  hljs.highlightElement(codeEl);

  // Clear input
  document.getElementById('codeInput').value = '';
}
