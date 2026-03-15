const BORDER = "border-r-4 border-orange-400"

export function typewriteContent(elementId: string, contents: string[]) {
  let INTERVAL: NodeJS.Timeout
  let TIMEOUT: NodeJS.Timeout

  const element = document.getElementById(elementId);
  if (!element) return;

  element.innerHTML = ""

  // Add cursor
  element!.className += ` ${BORDER}`
  
  function type(index: number, nextIndex: number) {
    const elementContent = contents[index]
    if (!elementContent) {
      type(0, 1)
      element!.innerHTML = ""
      return
    };

    let currIndex = 0;

    function tick() {
      element!.innerHTML += elementContent[currIndex] === " " ? "&nbsp;" : elementContent[currIndex];
      if (currIndex < elementContent.length - 1) {
        currIndex++;
      } else {
        clearInterval(INTERVAL)

        TIMEOUT = setTimeout(() => {
          INTERVAL = setInterval(unTick, 65)

          return clearTimeout(TIMEOUT)
        }, 800)
      }
    }

    function unTick() {
      element!.innerHTML = elementContent.slice(0, currIndex);
      if (currIndex > 0) {
        currIndex--;
      } else {
        clearInterval(INTERVAL)

        if (nextIndex <= contents.length) {
          type(nextIndex, nextIndex + 1)
          if (nextIndex !== contents.length) {
            element!.innerHTML = ""
          }
        }
      }
    }

    INTERVAL = setInterval(tick, 100)
  }

  type(0, 1)
}