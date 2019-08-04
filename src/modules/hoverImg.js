export default function attr() {
    const img = document.querySelectorAll('.command__photo');
    for (let i = 0; i < img.length; i++) {
        const src = img[i].getAttribute('src');
        img[i].addEventListener('mouseout', (event) => {

            event.target.src = src;

        })
        img[i].addEventListener('mouseover', (event) => {
            event.target.src = event.target.dataset.img;

        })


    }
}