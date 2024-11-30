


import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState, useRef, useEffect } from 'react';


function UserCalculator() {
    const [userInput, setUserInput] = useState('')
    const [calculatorResult, setCalculatorResult] = useState(null)
    const [calcOperator, setCalcOperator] = useState(null)
    const [previousNumber, setPreviousNumber] = useState('')
    const [openParenthesis, setOpenParenthesis] = useState(true)


    const CalculatorNumberPressed = (currentElement) => {
        setUserInput((data) => data + currentElement)
    }

    const CalculatorReset = () => {
        setUserInput('')
        setCalculatorResult(null)
        setCalcOperator(null)
        setPreviousNumber('')
    }


    const CalculatorToggleSign = () => {
       setUserInput((currentElement) => (parseFloat(currentElement * -1).toString()))
    }

    const CalculatorPercentageConverter = () => {
      setUserInput((currentElement) => (parseFloat(currentElement) / 100).toString())
    }

    const CalculatorParenthesisToggle = () => {
      setUserInput((currentElement) => currentElement + (openParenthesis ? '(' : ')'))
      setOpenParenthesis(!openParenthesis)
    }



    const CalculatorOperatorPressed = (operator) => {
        if(userInput === '')return;
        if(calculatorResult == null){
          setPreviousNumber(userInput)
        } else {
          CalculatorCalculate()
        }
        setCalcOperator(operator)
        setUserInput('')
    }


    const CalculatorCalculate  = () => {
      if(!calcOperator || userInput === '') return;
      const calculatorNumberOne = parseFloat(previousNumber)
      const calculatorNumberTwo = parseFloat(userInput)
      
      let UserInputResults;
      switch(calcOperator) {
        case '+':
          UserInputResults = calculatorNumberOne + calculatorNumberTwo;
          break;
          case "-":
            UserInputResults = calculatorNumberOne - calculatorNumberTwo;
            break;
            case "*":
              UserInputResults = calculatorNumberOne * calculatorNumberTwo;
              break;
              case "/":
                UserInputResults = (calculatorNumberTwo !== 0)? calculatorNumberOne / calculatorNumberTwo : 'Unable to divide by Zero'
                break;
                default:
                  UserInputResults = 'Error'
              }

              setCalculatorResult(UserInputResults);
              setUserInput('')
              setCalcOperator(null)
              setPreviousNumber(UserInputResults.toString())
      
    }


  return (
    <>

      <View style={styles.container}>

            <View style={styles.inputWrapper}>
              <Text style={styles.inputText}>{userInput || calculatorResult || '0'}</Text>
            </View>

            <View style={styles.buttonWrapper}>
                <View style={styles.buttonRowSection}>
                 <TouchableOpacity onPress={CalculatorReset} style={styles.buttonBackGround}>
                  <Text style={styles.resetButtonText}> C </Text>
                 </TouchableOpacity> 
                 <TouchableOpacity onPress={CalculatorParenthesisToggle} style={styles.buttonBackGround}>
                  <Text style={styles.symbolsButtonText}> () </Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={CalculatorPercentageConverter} style={styles.buttonBackGround}>
                  <Text style={styles.symbolsButtonText}> % </Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => CalculatorOperatorPressed('/')} style={styles.buttonBackGround}>
                  <Text style={styles.symbolsButtonText}> ÷ </Text>
                 </TouchableOpacity>
                </View>



                <View style={styles.buttonRowSection}>
                  { [7, 8, 9].map((elements) => (
                    <TouchableOpacity onPress={() => CalculatorNumberPressed(elements.toString())} key={elements} style={styles.buttonBackGround} >
                      <Text style={styles.buttonText}> {elements} </Text>
                    </TouchableOpacity>
                  ))}
                    <TouchableOpacity onPress={() => CalculatorOperatorPressed('*')} style={styles.buttonBackGround}>
                        <Text style={styles.symbolsButtonText}> x </Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.buttonRowSection}>
                  {[4, 5, 6].map((elements) => (
                    <TouchableOpacity onPress={() => CalculatorNumberPressed(elements.toString())} key={elements}  style={styles.buttonBackGround} >
                      <Text style={styles.buttonText}> {elements} </Text>
                    </TouchableOpacity>
                  ))}
                   <TouchableOpacity onPress={() => CalculatorOperatorPressed('-')} style={styles.buttonBackGround}>
                      <Text style={styles.symbolsButtonText}> - </Text>
                   </TouchableOpacity>

                </View>


                <View style={styles.buttonRowSection}>
                  {[1, 2, 3].map((elements) => (
                    <TouchableOpacity onPress={() => CalculatorNumberPressed(elements.toString())} key={elements} style={styles.buttonBackGround} >
                        <Text style={styles.buttonText}> {elements} </Text>
                    </TouchableOpacity>
                  ))}
                   <TouchableOpacity onPress={() => CalculatorOperatorPressed('+')} style={styles.buttonBackGround}>
                      <Text style={styles.symbolsButtonText}> + </Text>
                   </TouchableOpacity>
                  
                </View>




                <View style={styles.buttonRowSection}>
                  <TouchableOpacity onPress={CalculatorToggleSign} style={styles.buttonBackGround}>
                      <Text style={styles.buttonText}> +/- </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => CalculatorNumberPressed('0')} style={styles.buttonBackGround}>
                    <Text style={styles.buttonText}> 0 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => CalculatorNumberPressed('.')} style={styles.buttonBackGround}>
                    <Text style={styles.buttonText}> . </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={CalculatorCalculate} style={styles.buttonBackGround}>
                    <Text style={styles.symbolsButtonText}> = </Text>
                  </TouchableOpacity>




                </View>






            </View>









      </View>


    </>
    
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  },
  
  inputWrapper: {
    width: '100%',
    backgroundColor: 'white',
    padding:15,
    alignItems: 'flex-end',
    marginBottom: 10
  },

  inputText: {
    fontSize:25,
    fontWeight: 800,
    color: 'black',
    alignItems: 'flex-end',

  },
  buttonWrapper: {
    width:'100%'
  },
  buttonRowSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 8
  },

  buttonBackGround: {
    width:'21%',
    backgroundColor:'black',
    borderRadius:10,
    padding:20,
    alignItems: 'center'
  },
  buttonText: {
    fontSize:20,
    fontWeight:800,
    color:'white'
  },

   resetButtonText: {
    fontSize:20,
    fontWeight:800,
    color:'red'
  },

  symbolsButtonText: {
    fontSize:20,
    fontWeight:800,
    color:'lightgreen'
  }

  
})


export default UserCalculator;