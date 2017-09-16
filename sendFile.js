function enviar() {
  var formData = new FormData();
  formData.append("file", document.getElementById("arquivoInput").files[0]);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var span = document.getElementById("messagem");
      var resposta = xhr.responseText;
      responseObject = JSON.parse(resposta)
      document.getElementById("img").src = responseObject.file
      span.innerHTML += resposta;
    }
  }
  xhr.open("POST", "http://localhost:8080/api/upload");
  xhr.send(formData);
}
