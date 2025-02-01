export default  function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''
    const heading = document.createElement('h1')
    heading.textContent = 'Menu X'
    content.appendChild(heading)
}