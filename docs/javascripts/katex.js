document$.subscribe(() => {
  MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };

  document.querySelectorAll(".arithmatex").forEach(el => {
    katex.render(el.textContent, el, {
      throwOnError: false,
      displayMode: el.classList.contains("arithmatex-display")
    });
  });
});
