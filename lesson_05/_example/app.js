class Person {
  static changeName(name) {
    personName = name
  }

  static changeLastName() {}

  //
}

const changeNameWrapper = (className) => {
  const func = (data) => {
    className.changeName(data)
  }

  return func
}

let personName = ''

console.log('name = ', personName)

changeNameWrapper(Person)('Daniel')

console.log('name = ', personName)
