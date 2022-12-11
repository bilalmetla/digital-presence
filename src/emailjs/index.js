export default function SendEmail(formData){
    
    const data = {
        service_id: 'service_vucoj6r',
        template_id: 'template_21gogog',
        user_id: '7Fh2rl5MCW_WSUK8I',
        template_params: formData
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })

    .then((result) => {
        console.log(result.statusText);
    }, (error) => {
        console.log(error.statusText);
    });
}