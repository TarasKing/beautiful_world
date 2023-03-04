// 3d scrolling effect

let zIndexSpacing = -1000,
  lastPosition = zIndexSpacing / 5,
  $frames = document.getElementsByClassName("frame"),
  frames = Array.from($frames),
  zIndexValue = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastPosition - top;

  lastPosition = top;

  frames.forEach(function (element, index) {
    zIndexValue.push(index * zIndexSpacing + zIndexSpacing);
    zIndexValue[index] += delta * -5;

    let frame = frames[index],
      transform = `translateZ(${zIndexValue[index]}px)`;
    frame.setAttribute("style", `transform: ${transform}`);
  });
};
