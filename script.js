
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
  alert("This feature will soon connect to a real AI background removal API like Remove.bg or Replicate.");
}

function changeBackground(type) {
  preview.style.background = "none";
  preview.style.backgroundImage = "none";
  if (type === 'white') {
    preview.style.background = '#ffffff';
  } else if (type === 'beach') {
    preview.style.backgroundImage = "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')";
    preview.style.backgroundSize = "cover";
  } else if (type === 'gradient') {
    preview.style.background = "linear-gradient(to right, #8360c3, #2ebf91)";
  } else if (type === 'transparent') {
    preview.style.background = 'transparent';
  }
  document.getElementById("download-link").style.display = "inline";
  document.getElementById("download-link").href = preview.src;
}
