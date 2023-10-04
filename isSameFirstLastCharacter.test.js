const isSameFirstLastCharacter = require('./isSameFirstLastCharacter')

// Base Cases

/* A test case for a string that does have the same first and last 
   character and is 4+ characters long
*/
test('it should return true when the first and last character are the same', () => {
  expect(isSameFirstLastCharacter('abbbbba')).toBe(true)
})

/* A test case for a string that does NOT have the same first and last 
   character and is 4+ characters long
*/
test('It should return false if the string does not have the same first and last character and is 4+ characters wrong', () => {
  expect(isSameFirstLastCharacter('abbbc')).toBe(false)
})

// Edge Cases

// A test case for a string with only 2 characters that are different
test('A test case for a string with only 2 characters that are different', () => {
   expect(isSameFirstLastCharacter('ac')).toBe(false)
 })

// A test case for a string with only 2 characters that are the same
test('it should return true if two characters are the same', () => {
   expect(isSameFirstLastCharacter('aa')).toBe(true)
})

// A test case for a string with only 1 character
test('it should return true if there is only one character', () => {
   expect(isSameFirstLastCharacter('a')).toBe(true)
})

// A test case for an empty string
test('it should return true if there is an empty string', () => {
   expect(isSameFirstLastCharacter('')).toBe(true)
})
