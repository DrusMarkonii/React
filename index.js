const btn = document.querySelector(".btn-hello");

document.forms.publish.onsubmit = function () {
  var message = this.message.value;
  alert(message);
  return false;
};

const hendler = function () {
  alert("hello");
};

btn.addEventListener("click", hendler);
