# HomeWork #12

Here you will find a semaphore. You don't have to style it, but if you want to change something you are welcome.

## What you need to do?

When user clicks on semaphore, should happen 2 things:

1. Color will change to the next (red -> yellow, yellow -> green, green -> red);
2. Text under the semaphore should also change, based on color (`STOP!`, `Wait!`, `GO!`);

### Some Hints:

1. Create a function `changeSemaphore()` and assign it `onclick` for `#semaphore` element;
2. To change the color you should add `active` class to a specific color;
3. Use `document.getElementById('red')` to get the red circle from semaphore;
4. Use `document.getElementById('message').innerText` to update the message;
5. Use `if/else` statement as in example:

```
if(color === "red"){
  color = "yellow";
} else if(color === "yellow"){
  color = "green";
} ele if(color === "green"){
  color = "red";
}
```
