let checkvalue = (value) => {
    if (isNaN(value)) { // isNan
      console.log(value)
      return "Sorry Not a number, Goodbye"
    } else if (value <= 0 || value >= 10) { // less than 0 bigger than 10
      console.log(value)
      return "Sorry it’s not a good number, Goodbye" 
    }
    return value
  }
  let test = (userNumber, computerNumber) => {
    if (userNumber === computerNumber) { // user number===pc number
      return "winner"
    }
    else if (userNumber > computerNumber) { //num bigger than the pc
      return "Your number is bigger then the computer’s"
    } else { // number is smaller than the pc
      return "Your number is smaller then the computer’s"
    }
  }
  let testLoop = (testResult, numbersOfTest, computerNumber) => {
    if (testResult === "winner") {
      alert("you Won")
      return
    } else {
      console.log(testResult, numbersOfTest)
      alert(testResult)
      if (numbersOfTest < 3) {
        numbersOfTest++
        userCheckAndGameLauncher(computerNumber, numbersOfTest)
      } else {
        alert(`out of Chance the number was ${computerNumber}`)
      }
    }
  }
  let userCheckAndGameLauncher = (computerNumber, numbersOfTest) => {
    //checkvalue and do smthing else
    let numberFromUser = Number(prompt("give me a number between 0 and 10"))
    let testResult = checkvalue(numberFromUser)
    if (typeof testResult === "string") {
      alert(testResult)
      userCheckAndGameLauncher(computerNumber, numbersOfTest)
      // return false
    } else {
      //continueTheGame
      console.log(testResult)
      let testR = test(numberFromUser, computerNumber)
      testLoop(testR, numbersOfTest, computerNumber)
      // return true
    }
  }
  let playTheGame = () => {
    let doesHeWantToPlay = confirm("do you wanna play")
    let numbersOfTest = 1
    if (doesHeWantToPlay) {
      let computerNumber = Math.round(Math.random() * (10 - 0) + 0);
      userCheckAndGameLauncher(computerNumber, numbersOfTest)
    } else {
      alert("goodBye")
    }
  }