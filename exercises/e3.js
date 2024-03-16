/**
 * PROMISES ARE ALWAYS ASYNCHRONOUS
 * Please, make sure to read the "03-Always-asynchronous.md" file in exercises-info folder before you start!
 */

/**
 * @task
 * * Create function that follows the steps:
 * * Has a name 'getPromise'
 * * Takes an argument of any type
 * * If the argument is a whole number
 * * * Returns a promise constructor that resolves with a number value passed as the argument
 * * else returns 0;
 * * getPromise(num) function must be exported
 * Example: export const getPromise(num) => return <Your code of promise>
 */
export const getPromise = (arg) => {
// Your code goes here...
  return new Promise((resolve) => {
    if (typeof arg === 'number' && Number.isInteger(arg)) {
      resolve(arg);
    } else if (typeof arg === 'string' || !Number.isInteger(arg)) {
      resolve(0);
    } else {
      resolve(0);
    }
  });
};

/**
 * @task
 * Create a function that follows the steps:
 * * Has a name of 'updateSumValue'
 * * Takes no arguments
 * * Has a local variable with name of 'sum' and value of 2
 * * resolves the getPromise function with an argument of 120, then adds the promise value to the sum variable
 * * Synchronously adds 8 to the sum variable
 * * Returns the sum value
 * * if you have solved it successfully, the updateSumValue() function will return the value of 10;
 */


export const updateSumValue = async () => {
  // Your code goes here...
  let sum = 2;
  sum += await getPromise(120).then(value => value);
  sum += 8;
  return sum;
};

async () => {
    const result = await updateSumValue();
    expect(result).toBe(10);
  };


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
