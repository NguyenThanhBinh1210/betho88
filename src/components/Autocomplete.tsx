import { useState, useEffect, useRef } from 'react'
import SearchIcon from './icons/SearchIcon'
import CloseIcon from './icons/CloseIcon'

interface AutocompleteProps {
  suggestions: string[]
  placement?: 'left' | 'right'
}

const Autocomplete = ({ suggestions, placement = 'left' }: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    const filtered = value ? suggestions.filter((s) => s.toLowerCase().includes(value.toLowerCase())) : []
    setFilteredSuggestions(filtered)
    setIsOpen(filtered.length > 0)
  }

  const handleSelectSuggestion = (suggestion: string) => {
    setInputValue(suggestion)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const highlightText = (suggestion: string, inputValue: string) => {
    const regex = new RegExp(`(${inputValue})`, 'gi')
    return (
      <span className='py-1'>
        {suggestion.split(regex).map((part, index) =>
          part.toLowerCase() === inputValue.toLowerCase() ? (
            <span key={index} className='text-white bg-yellow-800'>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    )
  }

  return (
    <div className='relative' ref={inputRef}>
      <div className='flex gap-2 items-center rounded-sm text-xs border border-[#ffffff52] px-2 h-full relative'>
        <SearchIcon />
        <input
          type='text'
          className='w-full'
          placeholder='Tìm kiếm giải đấu'
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && (
          <button
            onClick={() => {
              setInputValue('')
              setIsOpen(false)
            }}
            className='absolute top-1/2 -translate-y-1/2 right-1.5 text-textOpacity-200'
          >
            <CloseIcon className='!size-5' />
          </button>
        )}
      </div>
      {isOpen && (
        <div
          className={`absolute text-foreground-300 text-xs min-w-full w-max top-full rounded-sm border border-[#ffffff29] translate-y-1 
          ${placement === 'right' ? 'right-0' : 'left-0'} bg-secondary`}
        >
          <ul>
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
                className='px-1.5 py-1.5 hover:bg-primary cursor-pointer'
              >
                {highlightText(suggestion, inputValue)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Autocomplete
