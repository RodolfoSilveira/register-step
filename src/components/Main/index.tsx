import { useCallback } from 'react'
import * as S from './styles'
import { AiOutlineCheck } from 'react-icons/ai'

let current = 1

const Main = () => {
  const handleNextPage = useCallback((transition: string) => {
    const slidePage: any = document.querySelector('.slidepage')
    const progressText = document.querySelectorAll('.step p')
    const progressCheck = document.querySelectorAll('.step .check')
    const bullet = document.querySelectorAll('.step .bullet')
    slidePage.style.marginLeft = transition
    bullet[current - 1].classList.add('active')
    progressText[current - 1].classList.add('active')
    progressCheck[current - 1].classList.add('active')
    current += 1
  }, [])

  const handlePrevPage = useCallback((transition: string) => {
    const slidePage: any = document.querySelector('.slidepage')
    const progressText = document.querySelectorAll('.step p')
    const progressCheck = document.querySelectorAll('.step .check')
    const bullet = document.querySelectorAll('.step .bullet')
    slidePage.style.marginLeft = transition
    bullet[current - 2].classList.remove('active')
    progressText[current - 2].classList.remove('active')
    progressCheck[current - 2].classList.remove('active')
    current -= 1
  }, [])

  const handleSubmit = useCallback(() => {
    const progressText = document.querySelectorAll('.step p')
    const progressCheck = document.querySelectorAll('.step .check')
    const bullet = document.querySelectorAll('.step .bullet')
    bullet[current - 1].classList.add('active')
    progressText[current - 1].classList.add('active')
    progressCheck[current - 1].classList.add('active')
    current += 1
    setTimeout(function () {
      alert('Thanks')
      location.reload()
    }, 800)
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <header>Singin</header>
        <div className="progress-bar">
          <div className="step">
            <p>Name</p>
            <div className="bullet">
              <span>1</span>
            </div>
            <AiOutlineCheck className="check fas fa-check" />
          </div>
          <div className="step">
            <p>Contact</p>
            <div className="bullet">
              <span>2</span>
            </div>
            <AiOutlineCheck className="check fas fa-check" />
          </div>
          <div className="step">
            <p>Birth</p>
            <div className="bullet">
              <span>3</span>
            </div>
            <AiOutlineCheck className="check fas fa-check" />
          </div>
          <div className="step">
            <p>Submit</p>
            <div className="bullet">
              <span>4</span>
            </div>
            <AiOutlineCheck className="check fas fa-check" />
          </div>
        </div>
        <div className="form-outer">
          <form>
            <div className="page slidepage">
              <div className="title">Basic Info:</div>
              <div className="field">
                <div className="label">First Name</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Last Name</div>
                <input type="text" />
              </div>
              <div className="field nextBtn">
                <button type="button" onClick={() => handleNextPage('-25%')}>
                  Next
                </button>
              </div>
            </div>

            <div className="page">
              <div className="title">Contact Info:</div>
              <div className="field">
                <div className="label">Email Address</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Phone Number</div>
                <input type="text" />
              </div>
              <div className="field btns">
                <button
                  type="button"
                  onClick={() => handlePrevPage('0%')}
                  className="prev-1 prev"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => handleNextPage('-50%')}
                  className="next-1 next"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="page">
              <div className="title">Date of Birth:</div>
              <div className="field">
                <div className="label">Date</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Gender</div>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field btns">
                <button
                  type="button"
                  onClick={() => handlePrevPage('-25%')}
                  className="prev-2 prev"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => handleNextPage('-75%')}
                  className="next-2 next"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="page">
              <div className="title">Login Details:</div>
              <div className="field">
                <div className="label">Username</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Password</div>
                <input type="text" />
              </div>
              <div className="field btns">
                <button
                  type="button"
                  onClick={() => handlePrevPage('-50%')}
                  className="prev-3 prev"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  className="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export default Main
