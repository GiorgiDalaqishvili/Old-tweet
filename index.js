let paragraphEl = document.getElementById("paragraph-el")
let heartbtn = document.getElementById("heart-btn")
let paragraphElTwo = document.getElementById("paragraph-el-two")
let heartBtnTwo = document.getElementById("heart-btn-two")
let vangog = document.getElementById("vangog")
let derux = document.getElementById("derux")
let commentsEl = document.getElementById("comments-el")








document.addEventListener("DOMContentLoaded", function() {
  const commentIcon = document.getElementById('comment-icon');
  const commentSection = document.querySelector('.comment-section');
  const commentInput = document.getElementById('comment-input');
  const submitButton = document.getElementById('submit-comment');
  const paragraphEl = document.getElementById('comments-el');

  const comments = []; // To store submitted comments

  commentIcon.addEventListener('click', function() {
    commentSection.style.display = 'block';
  });

  submitButton.addEventListener('click', function() {
    const comment = commentInput.value;
    // Process the comment, e.g., send it to a server or display it on the page.
    comments.push(comment); // Store the comment
    commentInput.value = ''; // Clear the input field
    commentSection.style.display = 'none'; // Hide the comment section
    updateComments(); // Update displayed comments
  });

  function updateComments() {
    paragraphEl.textContent = comments.join('\n'); // Display comments in the paragraph element
  }
});






commentsEl.addEventListener("click", function(){
   commentsEl = inputEl
})


let count = 0
heartbtn.addEventListener("click", function(){
    count += 1
    paragraphEl.textContent = count
    paragraphEl.innerHTML += ` likes`
})

heartBtnTwo.addEventListener("click", function(){
  count += 1
  paragraphElTwo.textContent = count
  paragraphElTwo.innerHTML += ` likes`
})


vangog.addEventListener("dblclick", function() {
    count +=1 
    paragraphEl.textContent = count
    paragraphEl.innerHTML += ` likes`
})

derux.addEventListener("dblclick", function(){
    count += 1
    paragraphElTwo.textContent = count
    paragraphElTwo.innerHTML += ` likes`
})