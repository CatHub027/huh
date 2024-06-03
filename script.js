document.getElementById('run-button').addEventListener('click', function() {
  var code = document.getElementById('code-editor').value;
  try {
    var result = lua.eval(code);
    document.getElementById('output').innerHTML = '<pre>' + result + '</pre>';
  } catch (error) {
    document.getElementById('output').innerHTML = '<pre style="color: red;">' + error.message + '</pre>';
  }
});

document.getElementById('clear-button').addEventListener('click', function() {
  document.getElementById('code-editor').value = '';
  document.getElementById('output').innerHTML = '';
});
