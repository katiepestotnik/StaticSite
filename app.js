const newEntry = () => {
    const entryDisplay = document.createElement('p');
    entryDisplay.innerHTML = document.getElementById('task').value;
    document.body.appendChild(entryDisplay);
}
document.querySelector('button').addEventListener('click', newEntry);