
//Download document feature
let downloadBtn = document.querySelector('.download');
downloadBtn.addEventListener('click', startDownload);

function download(filename, text) {
  var element = document.createElement('a'); //Создаем ссылку
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename); //Добавляем атрибуты

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function startDownload() {
  download("JohnDoe CV.docx","This is my CV for the future employer");
}
