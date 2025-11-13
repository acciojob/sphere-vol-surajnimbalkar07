function volume_sphere() {
  let r = document.getElementById("radius").value.trim(); // take input as text
  let volumeField = document.getElementById("volume");

  let radius = parseFloat(r);

  // Check if radius is not a valid number or negative
  if (isNaN(radius) || radius < 0) {
    volumeField.value = "NaN";
  } else {
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(4);
  }
}

document.getElementById("calcBtn").addEventListener("click", volume_sphere);
