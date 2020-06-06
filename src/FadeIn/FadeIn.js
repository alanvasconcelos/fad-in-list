import React, { useEffect, useState } from 'react'

const DELAY = 50
const DURATION = 400

function FadeIn(props) {
  const [maxFilhosVisiveis, setMaxFilhosVisiveis] = useState(0)

  useEffect(() => {
    const qtdFilhos = React.Children.count(props.children)
    let qtdFilhosVisiveis = 0

    const idInterval = setInterval(() => {
      qtdFilhosVisiveis++

      if (qtdFilhosVisiveis > qtdFilhos) clearInterval(idInterval)

      setMaxFilhosVisiveis(qtdFilhosVisiveis)
    }, DELAY)

    return () => {
      clearInterval(idInterval)
    }
  }, [props.children])

  return (
    <div className={props.className}>
      {
        React.Children.map(props.children, (child, i) => {
          return (
            <div
              key={i}
              className={child.props.className}
              style={{
                transition: `opacity ${DURATION}ms, transform ${DURATION}ms`,
                transform: `translateY(${maxFilhosVisiveis > i ? 0 : 20}px)`,
                opacity: maxFilhosVisiveis > i ? 1 : 0,
              }}>
              {child}
            </div>
          )
        })
      }
    </div>
  )
}

export default FadeIn