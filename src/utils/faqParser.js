export const getQuesions = mdxASTChildren => {
  return mdxASTChildren.reduce((acc, elem) => {
    // is question
    if (elem.type === "paragraph" && elem.children[0].type === "strong") {
      if (elem.children.length === 2) {
        acc.push({
          question: elem.children[0].children[0].value,
          answer: elem.children[1].value,
        })
      } else if (elem.children.length === 3) {
        acc.push({
          question: elem.children[0].children[0].value,
          answer: elem.children[2].value,
        })
      } else if (elem.children.length > 3) {
        acc.push({
          question: elem.children[0].children[0].value,
          answer: elem.children.slice(2).reduce((acc, elem) => {
            if (elem.type === "text") {
              acc += elem.value
            } else if (elem.type === "link") {
              acc += elem.url
            } else if (elem.type === "break") {
              acc += "\n"
            }

            return acc
          }, ""),
        })
      } else {
        console.error(`Answer text not found: ${JSON.stringify(elem.children)}`)
      }
    }

    return acc
  }, [])
}
