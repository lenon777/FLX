window.onload = request('GET', 'https://jsonplaceholder.typicode.com/users');
window.onload = preloader();
function request(method, url) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send();
    xhr.onreadystatechange = function () { // (3)
        if (xhr.readyState != 4) {
            return;
        } else {
            showUsers(JSON.parse(xhr.responseText));
        }
    }
}
function showUsers(responce) {
    responce.forEach(e => createCard(e));
}
function getPhoto(photo) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search', true);
    xhr.send();
    xhr.onreadystatechange = function () { // (3)
        if (xhr.readyState != 4) {
            return;
        } else {
            photo.setAttribute('src', JSON.parse(xhr.responseText)[0].url);
        }
    }
}
function createCard(e) {
    let mainWrapper = document.createElement('div');
    mainWrapper.setAttribute('id', `${e.id}`);
    mainWrapper.setAttribute('class', 'main-wrapper');
    let wrapper = document.getElementById('wrapper');
    wrapper.appendChild(mainWrapper);
    let leftSide = document.createElement('div');
    leftSide.setAttribute('class', 'left-side');
    mainWrapper.appendChild(leftSide);
    let photo = document.createElement('div');
    photo.setAttribute('class', 'photo-wrapper');
    leftSide.appendChild(photo);
    let img = document.createElement('img');
    getPhoto(img);
    photo.appendChild(img);
    let name = document.createElement('h3');
    leftSide.appendChild(name);
    name.innerText = e.name;
    let center = document.createElement('div');
    center.setAttribute('class', 'center');
    mainWrapper.appendChild(center);
    let addressBlock = document.createElement('div');
    addressBlock.setAttribute('class', 'address-block');
    center.appendChild(addressBlock);
    let titleAddress = document.createElement('h3');
    titleAddress.innerText = 'Address: ';
    let address = document.createElement('ul');
    addressBlock.appendChild(titleAddress);
    addressBlock.appendChild(address);
    let addressCity = document.createElement('li');
    let addressStreet = document.createElement('li');
    let addressZip = document.createElement('li');
    address.appendChild(addressCity);
    address.appendChild(addressStreet);
    address.appendChild(addressZip);
    addressCity.innerText = `${e.address.city}`;
    addressStreet.innerText = `${e.address.street}`;
    addressZip.innerText = `${e.address.zipcode}`;
    let titleCompany = document.createElement('h3');
    titleCompany.innerText = 'Company: ';
    center.appendChild(titleCompany);
    let company = document.createElement('h4');
    center.appendChild(company);
    company.innerText = e.company.name;
    let rightSide = document.createElement('div');
    rightSide.setAttribute('class', 'right-side');
    mainWrapper.appendChild(rightSide);
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    let editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    rightSide.appendChild(editButton);
    editButton.addEventListener('click', () => {
        edit(e.id);
        let card = document.getElementById(e.id);
        let button = card.getElementsByTagName('button')[0];
        button.setAttribute('style', 'display: none');
    });
    deleteButton.addEventListener('click', () => {
        let request = new XMLHttpRequest();
        preloader();
        request.open('DELETE', `https://jsonplaceholder.typicode.com/users/${e.id}`, true);
        mainWrapper.remove();
    });
    rightSide.appendChild(deleteButton);
    name.addEventListener('click', () => {
        preloader();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${e.id}`, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            } else {
                let modalTitle = document.getElementById('modal-title');
                let modalBody = document.getElementById('modal-body');
                modalTitle.innerText = JSON.parse(xhr.responseText).title;
                modalBody.innerText = JSON.parse(xhr.responseText).body;
            }
        };
        let modal = document.getElementById('myModal');
        let span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function () {
            modal.style.display = "none";
        };
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })
}
function edit(id) {
    let card = document.getElementById(id);
    let nameInput = document.createElement('input');
    let name = card.getElementsByTagName('h3')[0];
    name.setAttribute('style', 'display: none');
    let leftSide = card.getElementsByClassName('left-side')[0];
    nameInput.setAttribute('value', `${name.innerHTML}`);
    leftSide.appendChild(nameInput);
    let center = card.getElementsByClassName('center')[0];
    let addressBlock = card.getElementsByClassName('address-block')[0];
    let ul = addressBlock.getElementsByTagName('ul');
    let address = card.getElementsByTagName('li');
    let cityAddress = address[0];
    let streetAddress = address[1];
    let zipAddress = address[2];
    let form = document.createElement('form');
    addressBlock.appendChild(form);
    let cityInput = document.createElement('input');
    let streetInput = document.createElement('input');
    let zipInput = document.createElement('input');
    cityInput.setAttribute('value', `${cityAddress.innerHTML}`);
    streetInput.setAttribute('value', `${streetAddress.innerHTML}`);
    zipInput.setAttribute('value', `${zipAddress.innerHTML}`);
    for (const li of address) {
        li.setAttribute('style', 'display: none');
    }
    form.appendChild(cityInput);
    form.appendChild(streetInput);
    form.appendChild(zipInput);
    let company = card.getElementsByTagName('h4')[0];
    let companyInput = document.createElement('input');
    company.setAttribute('style', 'display: none');
    companyInput.setAttribute('value', `${company.innerHTML}`);
    companyInput.setAttribute('class', 'company-input');
    center.appendChild(companyInput);
    let rightSide = card.getElementsByClassName('right-side')[0];
    let saveButton = document.createElement('button');
    saveButton.setAttribute('class', 'save-button');
    saveButton.innerText = 'Save';
    rightSide.appendChild(saveButton);
    saveButton.addEventListener('click', (e) => {
        save(id);
    })
}
function save(id) {
    let card = document.getElementById(id);
    let leftSide = card.getElementsByClassName('left-side')[0];
    let h3 = leftSide.getElementsByTagName('h3')[0];
    h3.setAttribute('style', '');
    let nameInput = leftSide.getElementsByTagName('input')[0];
    h3.innerHTML = nameInput.value;
    leftSide.removeChild(nameInput);
    let center = card.getElementsByClassName('center')[0];
    let address = center.getElementsByTagName('li');
    let companyInput = center.getElementsByClassName('company-input')[0];
    for (const li of address) {
        li.setAttribute('style', '');
    }
    let companyName = center.getElementsByTagName('h4')[0];
    companyName.setAttribute('style', '');
    let addressInput = center.getElementsByTagName('input');
    let cityAddress = address[0];
    let streetAddress = address[1];
    let zipAddress = address[2];
    cityAddress.innerHTML = addressInput[0].value;
    streetAddress.innerHTML = addressInput[1].value;
    zipAddress.innerHTML = addressInput[2].value;
    companyName.innerHTML = addressInput[3].value;
    let addressBlock = center.getElementsByClassName('address-block')[0];
    let form = addressBlock.getElementsByTagName('form')[0];
    center.removeChild(companyInput);
    addressBlock.removeChild(form);
    let editButton = card.getElementsByTagName('button')[0];
    editButton.setAttribute('style', '');
    let rightSide = card.getElementsByClassName('right-side')[0];
    let saveButton = rightSide.getElementsByClassName('save-button')[0];
    rightSide.removeChild(saveButton);
    let userData = {
        'username': h3.innerHTML,
        'address': {
            'street': address[0].innerHTML,
            'suite': address[1].innerHTML,
            'city': address[2].innerHTML,
        },
        'company': {
            'name': companyName.innerHTML,
        }
    };
    let newData = JSON.stringify(userData);
    let putRequest = new XMLHttpRequest();
    preloader();
    putRequest.open('PUT', `https://jsonplaceholder.typicode.com/users/${id}`, true);
    putRequest.addEventListener('readystatechange', function () {
        if ((putRequest.readyState == 4) && (putRequest.status == 200)) {
            let jsonUser = JSON.parse(putRequest.responseText);
        }
    });
    putRequest.send(newData);
}
function preloader() {
    let preloaderDiv = document.createElement('div');
    preloaderDiv.innerHTML = `
		        <div id="preloader"><div id="preloader_preload"></div></div>`;
    document.body.insertBefore(preloaderDiv, document.body.firstChild);
    let preloaderStart = document.getElementById("preloader_preload");
    document.body.classList.add('preloader');
    function fadeOutFunction(el) {
        el.style.opacity = 1;
        let preloaderEngine = setInterval(function () {
            document.body.classList.remove('preloader');
            el.style.opacity = el.style.opacity - 0.05;
            if (el.style.opacity <= 0.05) {
                clearInterval(preloaderEngine);
                preloaderStart.style.display = "none";
            }
        }, 20);
    }
    (function () {
        setTimeout(function () {
            fadeOutFunction(preloaderStart);
        }, 1000);
    })();
}

