const parseChildren = children => {
  let result = ""
  for (let i = 0; i < children.length; i++) {
    const child = children[i]

    if (child.type === "text") {
      result += child.value
    } else if (
      (child.type === "jsx" && child.value.includes("<br")) ||
      child.type === "break"
    ) {
      result += "\n"
    } else if (child.type === "link") {
      result += child.url
    } else if (
      child.type === "list" ||
      child.type === "listItem" ||
      child.type === "paragraph"
    ) {
      result += parseChildren(child.children) + "\n"
    }
  }

  return result
}

export const getQuesions = mdxASTChildren => {
  // between <details>...</details> tag
  let inDetails = false

  let QA = {
    question: "",
    answer: "",
  }

  return mdxASTChildren.reduce((acc, elem) => {
    if (elem.type === "jsx" && elem.value.includes("<summary>")) {
      QA.question = elem.value.replace(/(<details>|<\/?summary>)/g, "").trim()
      inDetails = true
      return acc
    }

    if (elem.type === "jsx" && elem.value === "</details>") {
      inDetails = false
      acc.push(QA)
      QA = {
        question: "",
        answer: "",
      }
      return acc
    }

    if ((elem.type === "list" || elem.type === "paragraph") && inDetails) {
      if (QA.answer.length > 0) {
        QA.answer += "\n"
      }
      QA.answer += parseChildren(elem.children)
        .replace(/\n\s*\n/g, "\n")
        .trim()
      return acc
    }

    return acc
  }, [])
}
