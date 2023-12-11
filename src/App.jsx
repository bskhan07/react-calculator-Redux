import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addDigits, addOperator, allClear, calculation, deleteDigit } from './Redux/Action'
const App = () => {
  const dispatch = useDispatch()
  const displayValue = useSelector((state) => state.displayValue)
  const calValue = useSelector((state) => state.calValue)
  const operator = useSelector((state) => state.operator)

  return (
    <div className='container'>
      <div className="calculator">
        <div className="screen">
          <div className="prevalue">
            <p> {calValue} {operator} </p>
          </div>
          <div className="calvalue">
            <p>{displayValue}</p>
          </div>
        </div>
        <div className="buttons">
          <div className="ac">
            <button onClick={() => dispatch(allClear())} >AC</button>
            <button onClick={() => dispatch(deleteDigit())}>DEL</button>
          </div>
          <div>
            <button    onClick={() => dispatch(addDigits("7"))}  >7</button>
            <button onClick={() => dispatch(addDigits("8"))} > 8</button>
            <button onClick={() => dispatch(addDigits("9"))}  >  9</button>
            <button onClick={() => dispatch(addOperator("÷"))}  >÷</button>
          </div>
          <div>
            <button onClick={() => dispatch(addDigits("4"))} >4</button>
            <button onClick={() => dispatch(addDigits("5"))} >5</button>
            <button onClick={() => dispatch(addDigits("6"))} >6</button>
            <button onClick={() => dispatch(addOperator("×"))}  >×</button>
          </div>
          <div>
            <button onClick={() => dispatch(addDigits("1"))} >1</button>
            <button onClick={() => dispatch(addDigits("2"))} >2</button>
            <button onClick={() => dispatch(addDigits("3"))} >3</button>
            <button onClick={() => dispatch(addOperator("-"))} >-</button>
          </div>
          <div>
            <button onClick={() => dispatch(addDigits("."))} >.</button>
            <button onClick={() => dispatch(addDigits("0"))} >0</button>
            <button onClick={() => dispatch(calculation())}  >=</button>
            <button onClick={() => dispatch(addOperator("+"))} >+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App