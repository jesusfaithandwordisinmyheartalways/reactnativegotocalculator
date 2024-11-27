


import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState, useRef, useEffect } from 'react';

function Calculator() {
  const [userInput, setUserInput]  = useState('');
  const [userInputTwo, setUserInputTwo] = useState('');
  const [result, setResult] = useState(null);
  const input = useRef();
  useEffect(() => {
    if(input.current) {
      input.current.focus()
    }
  }, [input])

  const UserCalculation = (data) => {
        const numberOne =   parseFloat(userInput)
       const numberTwo =  parseFloat(userInputTwo)

       if(isNaN(numberOne) || isNaN(numberTwo)) {
           setResult('User must enter a valid number')
           setUserInput('')
           setUserInputTwo('');
           input.current.focus()
           return
       }
       let userCalculation;
       switch(data) {
        case "+":
          userCalculation = numberOne + numberTwo;
          break;
          case "-":
            userCalculation = numberOne - numberTwo;
            break;
            case "*":
              userCalculation = numberOne * numberTwo;
              break;
              case "/":
                userCalculation = (numberOne !== 0) ? numberOne / numberTwo : 'Unable to divide by Zero'
                break;
                case "RESET":
                    setUserInput('')
                   setUserInputTwo('');
                   input.current.focus()
                  break;
                default: 
                userCalculation = 'invalid'

       }
        setResult(userCalculation)
  }

return (

 
    <View style={styles.container}>

      <Text style={styles.title}>User React Native Calculator</Text>
      <TextInput ref={input} style={styles.input} keyboardType='numeric' onChangeText={setUserInput} value={userInput} placeholder='Enter Number' placeholderTextColor="black"></TextInput>
        <TextInput style={styles.inputTwo} keyboardType='numeric' onChangeText={setUserInputTwo} value={userInputTwo} placeholder='Enter Second Number' placeholderTextColor="black"></TextInput>

        <View style={styles.buttonSection}>
            <TouchableOpacity  onPress={() => UserCalculation('+')} style={styles.userButton}>
              <Text style={styles.userButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => UserCalculation('-')} style={styles.userButton}>
                <Text style={styles.userButtonText}> -</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => UserCalculation('*')} style={styles.userButton}>
                <Text style={styles.userButtonText}> × </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => UserCalculation('/')} style={styles.userButton}>
              <Text style={styles.userButtonText}> ÷</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => UserCalculation('RESET')} style={styles.userButton}>
                <Text style={styles.userButtonText}>  ↻ </Text>
            </TouchableOpacity>
        </View>


        {result !== null && (
          <Text style={styles.userResults}> Calculation Results: {result} </Text>
        )}
      

    </View>


);
}
export default Calculator;

// Updated styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'orange',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 3,
    borderColor: 'purple',
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    textAlign: 'center',
    color: 'green',
  },
  inputTwo: {
    width: '90%',
    height: 50,
    borderWidth: 3,
    borderColor: 'blue',
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    textAlign: 'center',
    color: 'green',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 30,
    width: '80%',
  },
  userButton: {
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    minWidth: 50,
    borderRadius: 10,
  },
  userButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userResults: {
    color: 'black',
    fontSize: 23,
  },
})