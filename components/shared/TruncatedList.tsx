import React, { useEffect, useRef, FC } from 'react'

import styles from './TruncatedList.module.css'

type RenderTruncator = ({
  hiddenItemsCount,
}: {
  hiddenItemsCount: number
}) => React.ReactNode

interface ITruncatedListProps {
  renderTruncator: RenderTruncator
  children?: React.ReactNode
  alwaysShowTruncator?: boolean
  className?: string
  style?: React.CSSProperties
}

const rectContainsRect = (parent: DOMRect, child: DOMRect) => {
  return (
    child.top >= parent.top &&
    child.bottom <= parent.bottom &&
    child.left >= parent.left &&
    child.right <= parent.right
  )
}

const TruncatedList: FC<ITruncatedListProps> = ({
  renderTruncator,
  alwaysShowTruncator,
  children,
  className,
  style,
}) => {
  const containerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const truncate = () => {
      if (!containerRef.current) {
        return
      }

      containerRef.current.style.overflow = 'hidden'
      const childNodes = Array.from(
        containerRef.current.children
      ) as HTMLElement[]

      for (let i = 0; i < childNodes.length; ++i) {
        childNodes[i].hidden = i % 2 === 0
      }

      if (childNodes.length === 1) {
        return
      }

      if (alwaysShowTruncator) {
        const truncatorEl = childNodes[childNodes.length - 1]
        truncatorEl.hidden = false

        if (
          rectContainsRect(
            containerRef.current.getBoundingClientRect(),
            truncatorEl.getBoundingClientRect()
          )
        ) {
          return
        }
        truncatorEl.hidden = true
      } else {
        const itemEl = childNodes[childNodes.length - 2]

        if (
          rectContainsRect(
            containerRef.current.getBoundingClientRect(),
            itemEl.getBoundingClientRect()
          )
        ) {
          return
        }
      }

      for (let i = childNodes.length - 2; i >= 1; i -= 2) {
        const itemEl = childNodes[i]
        const truncatorEl = childNodes[i - 1]
        itemEl.hidden = true
        truncatorEl.hidden = false

        if (
          rectContainsRect(
            containerRef.current.getBoundingClientRect(),
            truncatorEl.getBoundingClientRect()
          )
        ) {
          return
        }

        truncatorEl.hidden = true
      }
    }

    truncate()

    const resizeObserver = new ResizeObserver((entries) => {
      for (let _ of entries) {
        truncate()
      }
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current)
      }
    }
  }, [children, alwaysShowTruncator, className, style])

  const childArray = React.Children.toArray(children)

  const items = childArray.map((item, i) => (
    <React.Fragment key={i}>
      <li hidden>
        {renderTruncator({ hiddenItemsCount: childArray.length - i })}
      </li>
      <li>{item}</li>
    </React.Fragment>
  ))

  return (
    <ul
      ref={containerRef}
      className={`${styles.list} ${className || ''}`}
      style={style}
    >
      {items}

      <li hidden>{renderTruncator({ hiddenItemsCount: 0 })}</li>
    </ul>
  )
}

export default TruncatedList
