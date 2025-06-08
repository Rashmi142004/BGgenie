
let preview = document.getElementById('preview');
let fileInput = document.getElementById('upload');

fileInput.onchange = function () {
  const file = fileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    preview.src = e.target.result;
    preview.style.display = 'block';
  };
  reader.readAsDataURL(file);
};

function removeBackground() {
  alert("Background removal feature will be integrated soon with real API.");
}

function changeBackground(type) {
  if (type === 'white') {
    preview.style.background = '#ffffff';
  } else if (type === 'beach') {
    preview.style.backgroundImage = "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')";
    preview.style.backgroundSize = "cover";
  }
  document.getElementById("download-link").style.display = "inline";
  document.getElementById("download-link").href = preview.src;
}
