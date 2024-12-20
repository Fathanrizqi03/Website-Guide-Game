function toggleNav() {
    const nav = document.getElementById('nav-tbody');
    const icon = document.getElementById('toggle-icon');
    if (nav.style.display === 'none') {
        nav.style.display = 'table-row-group';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        nav.style.display = 'none';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

function toggleCollapse() {
    const nav = document.getElementById('nav');
    const main = document.getElementById('main');
    const collapseIcon = document.getElementById('collapse-icon');
    if (nav.classList.contains('collapsed-nav')) {
        nav.classList.remove('collapsed-nav');
        main.classList.remove('w-full');
        collapseIcon.classList.remove('fa-expand');
        collapseIcon.classList.add('fa-compress');
    } else {
        nav.classList.add('collapsed-nav');
        main.classList.add('w-full');
        collapseIcon.classList.remove('fa-compress');
        collapseIcon.classList.add('fa-expand');
    }
}

window.onscroll = function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function submitComment(event) {
    event.preventDefault();
    const comment = document.getElementById('comment').value;
    const commentList = document.getElementById('comment-list');
    const newComment = document.createElement('div');
    newComment.className = 'bg-gray-200 p-4 rounded mb-4';
    newComment.textContent = comment;
    commentList.appendChild(newComment);
    document.getElementById('comment-form').reset();
}