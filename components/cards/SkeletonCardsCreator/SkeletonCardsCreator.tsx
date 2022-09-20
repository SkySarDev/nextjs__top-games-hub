import React, { FC, ElementType } from 'react'

interface ISkeletonCardsCreatorProps {
  length: number
  CardsComponent: ElementType
}

const SkeletonCardsCreator: FC<ISkeletonCardsCreatorProps> = ({
  length,
  CardsComponent,
}) => {
  return (
    <>
      {Array.from({ length }, (_, i) => (
        <CardsComponent key={i} />
      ))}
    </>
  )
}

export default SkeletonCardsCreator
