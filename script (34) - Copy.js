const button = document.querySelector('.btn')
const password = document.querySelector('.password')
const body = document.querySelector('body')
button.addEventListener('click', (e) => {
  e.preventDefault()
  if(password.value === "s9Xji10NxjUIIsxfoOp") {
    body.innerHTML = `
    <div class="block">
      <h1>Ключи доступа: </h1>
      <p>Facebook: 312#9(#&()%^$^*())HJCKASO^$E(I@VK!LIZ&S(TCt0897rt(653c2546xz8ek7i12)))</p>
      <p>Google: i8sya0-PI@!N097txk.lIGHSA8745912o91hpdnISONA*CtPUICS:LHA)C(;P{}@</p>
      <p>VK: IU986asd570hoL:ASCP(*AS)CAjaGAS%$A&#$%(980oyp9chu[2c.32</p>
    </div>
    `
  } else {
    alert("Сбой! Неверный пароль!")
  }

})

function showPath() {
  console.log('с://desktop/a/test')
}

function keygen() {
  setTimeout(() => {
    console.log('Взлом системы активирован! Началась подборка пароля:')
  }, 100);

  setTimeout(() => {
    console.log('Успех: 10% | Пароль: s9Xj...')
  }, 3000);
  setTimeout(() => {
    console.log('Успех: 20% | Пароль: s9Xji1...')
  }, 3500);
  setTimeout(() => {
    console.log('Успех: 45% | Пароль: s9Xji10Nx...')
  }, 6000);
  setTimeout(() => {
    console.log('Успех: 50% | Пароль: s9Xji10Nxj...')
  }, 7800);
  setTimeout(() => {
    console.log('Успех: 55% | Пароль: s9Xji10NxjU...')
  }, 9000);
  setTimeout(() => {
    console.log('Успех: 60% | Пароль: s9Xji10NxjUI...')
  }, 14500)
  setTimeout(() => {
    console.log('Успех: 65% | Пароль: s9Xji10NxjUII...')
  }, 15000)
  setTimeout(() => {
    console.log('Успех: 70% | Пароль: s9Xji10NxjUIIsxf...')
  }, 26000)
  setTimeout(() => {
    console.log('Успех: 100% | Пароль: s9Xji10NxjUIIsxfoOp')
    console.log('Система взломана!')
  }, 33000)
}