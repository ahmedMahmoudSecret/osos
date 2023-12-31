import styled from 'styled-components'
export const Wrapper = styled.div`
  padding: 1.25rem;
  margin: auto;
  .body {
    & > span {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.15rem;
      cursor: pointer;
      border-radius: ${(props) => (props.borderRound ? '50%' : '0!important')};

      &:hover {
        background-color: var(--primary-600);
        color: var(--themeWhite-white);
      }
    }
  }
  .days {
    & > span {
      width: 2rem;
      text-align: center;
    }
  }

  .special {
    position: relative;
    &:hover:after {
      background-color: var(--themeWhite-white);
    }
    &:after {
      content: '';
      position: absolute;
      width: 0.25rem;
      height: 0.25rem;
      bottom: 0.25rem;
      background-color: var(--primary-600);
      border-radius: ${(props) => (props.borderRound ? '50%' : '0!important')};
    }
  }

  .today {
    background-color: var(--themeGray-100);
  }

  .clicked {
    background-color: var(--primary-600);
    color: var(--themeWhite-white);
    &:after {
      background-color: var(--themeWhite-white);
    }
  }
`
