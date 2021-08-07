let cont = 0;
document.querySelectorAll('._8A5w5').forEach((item, index) => {
    setTimeout(() => {
        if(item.innerText == 'Seguindo') {
            item.click();
            document.querySelectorAll('.-Cab_').forEach(item => {
                if(item.innerText == 'Deixar de seguir') {
                    item.click();
                    cont++;
                    console.log(`Unfollow em ${cont} pessoa(s)!`)
                }
            })
        } 
    }, index * 10000);
});