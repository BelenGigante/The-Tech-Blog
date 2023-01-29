const newFormHandler = async (event) => {
    event.preventDefault();
    const subject = document.querySelector('#post-subject').value.trim();
    const comment = document.querySelector('#post-comment').value.trim();

    if (subject && comment) {
        const response = await fetch('api/post', {
            method: 'POST',
            body: JSON.stringify({ subject, comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('profile');
        } else {
            alert('Error creating project');
        }
    }

};