document.getElementById("executeBtn").addEventListener("click", function() {
  var code = document.getElementById("codeInput").value;
  try {
    var result = eval(code);
    document.getElementById("console").innerText = "Output: " + result;
  } catch (error) {
    document.getElementById("console").innerText = "Error: " + error.message;
  }
});
