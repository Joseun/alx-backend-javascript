// modify the variables inside the function taskBlock so that the variables
// aren’t overwritten inside the conditional block.
export default function taskBlock(trueOrFalse) {
    task = false;
    task2 = true;
  
    if (trueOrFalse) {
      var task;
      var task2;
    }
  
    return [task, task2];
}
