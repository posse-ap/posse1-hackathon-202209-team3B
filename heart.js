const button = document.getElementById('comment_btn');
const replyBox = document.getElementById('comment_reply');
const commentBox = document.getElementById('comment_box')

button.addEventListener('click', () => {
    replyBox.classList.add('is-clicked');
    commentBox.classList.add('is-clicked');
})