const imgCa  = document.getElementById("catImage");

imgCa.addEventListener("click", getDate);

 async function getDate(){
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  console.log(data);
}