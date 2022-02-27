const loadQuotes = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadQuotes()
const displayBuddies = data => {
    console.log(data);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy)
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first}
        ${buddy.picture.large}
        `;
        buddiesDiv.appendChild(p);
    }
}