// const BORDER = "border-r-4 border-orange-400"
const BORDER = ""

export function typewriteText(elementIds: string[], setDone: (val: boolean) => void) {
  let INTERVAL: NodeJS.Timeout
  
  // Clear all elements content and store them
  const elementContents: string[] = []
  elementIds.forEach(el => {
    const elementId = el
    const element = document.getElementById(elementId);
    if (!element) return;
    const content = element.innerHTML
    if (!content) return;

    elementContents.push(content)

    // Remove current value to start animation
    element.innerHTML = ""
  })

  function type(index: number, nextIndex: number) {
    const elementId = elementIds[index]
    const element = document.getElementById(elementId);
    if (!element) return;
    const elementContent = elementContents[index]
    if (!elementContent) return;

    // Show element
    element.className = element.className.replace("hidden", "")
    // Add cursor
    element.className += ` ${BORDER}`

    let currIndex = 0;

    function tick() {
      element!.innerHTML += elementContent[currIndex] === " " ? "&nbsp;" : elementContent[currIndex];
      if (currIndex < elementContent.length - 1) {
        currIndex++;
      } else {
        // Remove cursor
        element!.className = element!.className.replace(BORDER, "")
        clearInterval(INTERVAL)

        if (nextIndex < elementIds.length) {
          type(nextIndex, nextIndex + 1)
        } else {
          setDone(true)
        }
      }
    }

    INTERVAL = setInterval(tick, 30)
  }

  type(0, 1)
}