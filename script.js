document.getElementById('execute-btn').addEventListener('click', function() {
  console.log('Roblox on console Lua fixed work');
  console.log('Roblox on console print fixed work');
  console.log('WORK FIXED ALL');
  document.getElementById('console').innerHTML += '<p>Roblox on console Lua fixed work</p>';
  document.getElementById('console').innerHTML += '<p>Roblox on console print fixed work</p>';
  document.getElementById('console').innerHTML += '<p>WORK FIXED ALL</p>';
});

document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('console').innerHTML = '';
});
