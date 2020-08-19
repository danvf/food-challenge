import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 100vh;
  width: 100%;

  header {
    background: #ffb84d;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    img {
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px;

    h1 {
      color: #3d3d4d;
      margin: 20px 0px;
      font-size: 40px;
    }

    .h-divider {
      height: 2px;
      width: 360px;
      margin: 10px 0;
      background: #3d3d4d;
    }

    .food-info {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 20px 0;

      div {
        margin: 10px 20px;
        width: 100px;

        svg,
        h5,
        h6 {
          color: #3d3d4d;
        }

        h6 {
          margin-top: 6px;
        }
      }
    }
  }
  button {
    margin-top: 60px;
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #41c900;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }
`;
