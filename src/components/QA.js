import React from "react"
import useCollapse from "react-collapsed"

import css from "./QA.module.css"

function QA({ question, answer, onToggle }) {
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse()

  return (
    <div className={css.QA}>
      <strong
        {...getToggleProps({
          onClick: () => {
            onToggle(!isOpen)
          },
        })}
        className={css.question}
      >
        {question}
      </strong>
      <section
        {...getCollapseProps()}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  )
}

export default QA
