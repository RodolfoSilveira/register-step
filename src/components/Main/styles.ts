import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: -webkit-linear-gradient(bottom, #0250c5, #d43f8d);
`

export const Container = styled.div`
  width: 330px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  padding: 50px 35px 10px 35px;

  > header {
    font-size: 35px;
    font-weight: 600;
    margin: 0 0 30px 0;
  }

  > .progress-bar {
    display: flex;
    margin: 40px 0;

    .step {
      position: relative;
      text-align: center;
      width: 100%;

      p {
        font-size: 18px;
        font-weight: 500;
        color: #000;
        margin-bottom: 8px;
        transition: 0.2s;
      }

      p.active {
        color: #d43f8d;
      }

      .bullet {
        position: relative;
        height: 25px;
        width: 25px;
        border: 2px solid #000;
        display: inline-block;
        border-radius: 50%;
        transition: 0.2s;

        span {
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .bullet.active {
        border-color: #d43f8d;
        background: #d43f8d;
      }

      .bullet:before,
      .bullet:after {
        position: absolute;
        content: '';
        bottom: 11px;
        right: -39px;
        height: 3px;
        width: 32px;
        background: #262626;
      }

      .bullet.active:after {
        background: #d43f8d;
        transform: scaleX(0);
        transform-origin: left;
        animation: animate 0.3s linear forwards;
      }

      @keyframes animate {
        100% {
          transform: scaleX(1);
        }
      }

      .bullet.active span {
        display: none;
      }

      .check {
        position: absolute;
        left: 50%;
        top: 72%;
        font-size: 15px;
        transform: translate(-50%, -50%);
        display: none;
      }

      .check.active {
        display: block;
        color: #fff;
      }
    }

    .step:last-child .bullet:before,
    .step:last-child .bullet:after {
      display: none;
    }
  }

  > .form-outer {
    width: 100%;
    overflow: hidden;

    > form {
      display: flex;
      width: 400%;

      .page {
        width: 25%;
        transition: margin-left 0.3s ease-in-out;

        .title {
          text-align: left;
          font-size: 25px;
          font-weight: 500;
        }

        .field {
          height: 45px;
          width: 260px;
          margin: 45px 0;
          display: flex;
          position: relative;

          .label {
            position: absolute;
            top: -30px;
            font-weight: 500;
          }

          input {
            height: 100%;
            width: 100%;
            border: 1px solid lightgrey;
            border-radius: 5px;
            font-size: 18px;
            padding-left: 15px;
          }

          select {
            width: 100%;
            padding-left: 10px;
            font-size: 17px;
            font-weight: 500;
          }

          button {
            width: 100%;
            height: calc(100% + 5px);
            margin-top: -20px;
            border: none;
            background: #d43f8d;
            border-radius: 5px;
            color: #fff;
            font-size: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 500;
            cursor: pointer;
            transition: 0.3s ease;
          }

          button:hover {
            background: #000;
          }
        }

        .btns {
          button {
            margin-top: -20px !important;
          }

          button.prev {
            margin-right: 3px;
            font-size: 17px;
          }

          button.next {
            margin-left: 3px;
          }
        }
      }
    }
  }
`
