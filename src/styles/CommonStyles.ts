import { theme } from '@/constants/theme'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #d9d9d9;
  color: #000;
  border-radius: 36px;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  gap: 5px;
  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    gap: 3px;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`

const CarouselWrapper = styled.div<{ $dotcolor?: string }>`
  width: 100%;
  margin-top: 2rem;
  padding: 0 24px;

  .slick-slider {
    margin: 0 -24px;
  }

  .slick-slide {
    padding: 0 10px;
    box-sizing: border-box;
    display: flex !important;
    justify-content: center;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .slick-current {
    opacity: 1;
    z-index: 1;
  }

  .slick-list {
    margin: 0 -10px;
    overflow: visible;
  }

  .slick-slide img {
    width: 260px;
    height: auto;
    margin: 0 auto;
    transition: transform 0.3s ease;
  }

  .slick-current img {
    transform: scale(1.05);
  }

  .slick-dots {
    bottom: -30px;

    li {
      margin: 0 2px;

      button:before {
        font-size: 8px;
        color: ${({ $dotcolor }) => $dotcolor || theme.colors.gray100};
      }

      &.slick-active button:before {
        font-size: 12px;
        color: ${theme.colors.gray};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    .slick-slide img {
      width: 100%;
      max-width: 260px;
    }
  }
`

const FloatingButton = styled.a<{ $color: string; $backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: ${(props) => props.$backgroundColor};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  gap: 0.2rem;
  /* box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.25); */

  // 링크 스타일 제거
  text-decoration: none;
  color: ${(props) => props.$color};
  font-weight: 700;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 0.5rem;
    gap: 0;

    img {
      width: 30px;
      height: 30px;
    }
  }
`

export { Container, Button, Title, CarouselWrapper, FloatingButton }
