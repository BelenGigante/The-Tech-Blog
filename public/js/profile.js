const newFormHandler = async (event) => {
    event.preventDefault();
    const subject = document.querySelector('#post-subject').value.trim();
    const comment = document.querySelector('#post-comment').value.trim();

    if (subject && comment) {
        const response = await fetch(`api/posts`, {
            method: 'POST',
            body: JSON.stringify({ subject, comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Error creating post');
        }
    }

};
const delButtonHandler = async (event) => {
    if(event.target.hasAttribute('data-id')){
        const id = event.target.getAttribute('data-id');
        const response = await fectch(`/api/posts/${id}`, {
            method:'DELETE',
        });
        if (response.ok){
            document.location.replace('/profile');
        } else{
            alert('Post cant be deleted')
        }
    }
};

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
document.querySelector('.post-list').addEventListener('click', delButtonHandler);