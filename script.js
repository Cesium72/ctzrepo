{
  var navs = document.getElementsByTagName('nav');
  var footers = document.getElementsByTagName('footer');
  if (footers.length === 1 && navs.length === 1) {
    footers[0].innerHTML = `<a href="https://countdowntozero.stackblitz.io">Home</a> &#x2022; <a href="https://countdowntozero.stackblitz.io/cur-article.html">This Month's Article</a> &#x2022; <a href="https://countdowntozero.stackblitz.io/prev-articles.html">Previous Articles</a> &#x2022; <a href="https://docs.google.com/forms/d/e/1FAIpQLSckSEOy_SzGE_tfbaHVWaxVhi1Rv893zl5l9JltrqyMxiXPTA/viewform?usp=sf_link">Contact us</a>`;
    navs[0].innerHTML = `<a href="https://countdowntozero.stackblitz.io/index.html">Home</a>
    <a href="https://countdowntozero.stackblitz.io/cur-article.html">This Month's Article</a>
    <a href="https://countdowntozero.stackblitz.io/prev-articles.html">Previous Articles</a>`;
  } else {
    console.warn('Page missing/contains multiple footer and/or nav elements!');
  }
} //Establishes the footer & menu bar

{
  function loadArticle(date) {
    document.getElementById('thetable').innerHTML =
      "<iframe src = '" + date + '.html' + "'></iframe>";
  }
} //Enables previous article viewing functionality

{
  function correct() {
    alert("That's Correct!");
  }
  function incorrect() {
    alert("Oops... That's Incorrect. \n Try Again.");
  }
} //Enables quiz answer checking functionality
