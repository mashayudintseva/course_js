export default function clubSelect() {
    const clubSelect = document.querySelector('.clubs-list'),
        clubList = clubSelect.querySelector('.club-list'),
        clubBlock = document.querySelector('.club-select'),
        clubP = clubSelect.querySelector('.club-select-p');
    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.clubs-list') && !clubList.classList.contains('active-list')) {
            clubList.classList.add('active-list');
            clubP.classList.add('active-menu');
        } else if (!(target.closest('.active-list') && !(target.classList.contains('active-list') || target.closest('.active-menu'))) && clubList.classList.contains('active-list')) {
            clubList.classList.remove('active-list');
            clubP.classList.remove('active-menu');
        }
        //if(target.closest(''))
    })
}