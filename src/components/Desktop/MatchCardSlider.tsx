import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import MatchCard from './MatchCard'
import { MatchCardProps } from './MatchCard'

// Add this interface extension
interface MatchWithId extends MatchCardProps {
  id: number | string;
}

interface MatchCardSliderProps {
  matches: MatchWithId[]
}

const MatchCardSlider: React.FC<MatchCardSliderProps> = ({ matches }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [matchesState, setMatchesState] = useState<MatchWithId[]>(matches)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4 >= matches.length ? 0 : prevIndex + 4))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 < 0 ? Math.max(matches.length - 4, 0) : prevIndex - 4))
  }

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const items = Array.from(matchesState)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setMatchesState(items)
  }

  return (
    <div className='relative w-full'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="matchCards" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className='flex items-center gap-x-2 overflow-hidden'
            >
              {matchesState.slice(currentIndex, currentIndex + 4).map((match, index) => (
                <Draggable key={match.id} draggableId={match.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <MatchCard {...match} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button
        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-2 py-1 rounded'
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-2 py-1 rounded'
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  )
}

export default MatchCardSlider
