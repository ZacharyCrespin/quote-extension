fetch("https://random-quote-ta5ihvbchq-uc.a.run.app")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quoteQuote").innerText = `“${data.quote}”`;
    if (data.author != "") {
      document.getElementById("quoteAuthor").innerText = `― ${data.author}`;
    }
  });
