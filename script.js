let ratings = document.querySelector('.ratings');
let btn = document.querySelector('button');
let ratingsArr = document.querySelectorAll('.rating');
let span = document.querySelector('span');
let feedback = document.querySelector('.feedback');
let appreciation = document.querySelector('.appreciation');
let ratingScore = 0;



ratings.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'rating')
    {
        // e.target.classList.add('active');
        let i = 0;
        while (i < ratingsArr.length)
        {
            if (ratingsArr[i].classList[1] == 'active')
            {
                ratingsArr[i].classList.remove('active');
            }
            i++;
        }
        e.target.classList.add('active');
    }
    ratingScore= e.target.innerText;
});

btn.addEventListener('click', (e) => {
    if (!ratingScore)
        return ;

    feedback.style.display = 'none';
    span.innerText = ratingScore;
    appreciation.classList.add('active');
})