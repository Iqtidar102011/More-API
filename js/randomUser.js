const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=7')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}

const displayUser = users => {

    const userContainer = document.getElementById("random_user");
    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
        
        <h3> user name:${user.name.first} ${user.name.last}</h3>
        <p>location :${user.location.country}</p>
        <p>email :${user.email}</p>
        <p>phone :${user.phone}</p>
        <p>picture :${user.picture.medium}</p>
        
        
        
        
        
        `
        userContainer.appendChild(div)
    }

}
loadUsers();
