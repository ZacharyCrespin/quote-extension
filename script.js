fetch("https://quotes.zacharyc.site/api")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quoteQuote").innerText = `“${data.quote}”`;
    if (data.author != "") {
      document.getElementById("quoteAuthor").innerText = `― ${data.author}`;
    }
  });
