export const getQuesions = mdxASTChildren => {
  // not_qa | question | answer
  let state = "not_qa"

  return mdxASTChildren.reduce((acc, elem) => {
    // is question
    if (elem.type === "paragraph" && elem.children[0].type === "strong") {
      acc.push({
        question: elem.children[0].children[0].value,
        answer: elem.children[2].value,
      })
    }

    return acc;
  }, [])
}
