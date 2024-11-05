import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// DateDisplay 컴포넌트를 별도로 분리
const DateDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  const formatDate = (date: Date) => {
    return formatter
      .format(date)
      .replace(/\./g, '. ')
      .replace('시 ', ':')
      .replace('분 ', ':')
      .replace('초', '')
  }

  return (
    <StyledDate dateTime={currentTime.toISOString()}>
      {formatDate(currentTime)}
    </StyledDate>
  )
}

const StyledDate = styled.time`
  color: rgba(0, 0, 0, 0.3);
  margin-left: 3%;
  font-size: clamp(14px, 1.5vw, 20px);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0.3rem auto;
  }
`

export default DateDisplay
