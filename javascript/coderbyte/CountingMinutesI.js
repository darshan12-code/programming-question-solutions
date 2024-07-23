/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Counting Minutes I                                                                  *
*  Using the JavaScript language, have the function CountingMinutesI(str) take the     *
*  str parameter being passed which will be two times (each properly formatted with    *
*  a colon and am or pm) separated by a hyphen and return the total number of minutes  *
*  between the two times. The time will be in a 12-hour clock format. For example:     *
*  if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am     *
*  the output should be 1320.                                                          *
*                                                                                      *
*  Examples                                                                            *
*  Input 1: "12:30pm-12:00am"                                                          *
*  Output 1: 690                                                                       *
*                                                                                      *
*  Input 2: "1:23am-1:08am"                                                            *
*  Output 2: 1425                                                                      *
*                                                                                      *
*  SOLUTION                                                                            *
*  To solve this problem, we need to convert the given times to minutes since midnight *
*  and then find the difference between them. If the second time is earlier in the day *
*  than the first, we add 24 hours worth of minutes to the second time to handle the   *
*  next-day calculation.                                                               *
*                                                                                      *
*  Steps for solution                                                                  *
*  1) Split the input string into two times using the hyphen as a separator.           *
*  2) Create a helper function to convert a time string into minutes since midnight.   *
*  3) Use the helper function to convert both times to minutes.                        *
*  4) Calculate the difference between the two times. If the result is negative, add   *
*     1440 (the number of minutes in a day) to the result to account for the day wrap. *
*  5) Return the absolute value of the difference.                                     *
*                                                                                      *
***************************************************************************************/

function CountingMinutesI(str) {
    const times = str.split('-');
    const time1 = times[0];
    const time2 = times[1];
  
    function timeToMinutes(time) {
      const [hourMin, period] = time.split(/(am|pm)/);
      const [hours, minutes] = hourMin.split(':').map(Number);
      let totalMinutes = hours % 12 * 60 + minutes;
      if (period === 'pm') totalMinutes += 720; // Add 12 hours worth of minutes for pm
      return totalMinutes;
    }
  
    const minutes1 = timeToMinutes(time1);
    const minutes2 = timeToMinutes(time2);
  
    let diff = minutes2 - minutes1;
    if (diff < 0) diff += 1440; // Add a day worth of minutes if time2 is earlier than time1
  
    return diff;
  }
  
  // Example usage:
  console.log(CountingMinutesI("12:30pm-12:00am")); // Output: 690
  console.log(CountingMinutesI("1:23am-1:08am")); // Output: 1425
  