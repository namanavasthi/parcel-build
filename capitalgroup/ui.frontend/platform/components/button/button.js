console.log("hi from platform button js");

document.querySelector("button").addEventListener("click", () => {
  import("./feature").then((feature) => {
    feature.callme();
  });
});
