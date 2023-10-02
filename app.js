const shareButton = document.querySelectorAll('.tile-share-button');

async function copyText (e) {
  // Prevent button going to the site
  e.preventDefault()
  const link = this.getAttribute('link');
  console.log(link);

  try {
    await navigator.clipboard.writeText(link);
    alert("Copied the text: " + link);
  } catch (err) {
    console.error(err)
    
  }
}

shareButton.forEach(shareButton => shareButton.addEventListener('click', copyText));