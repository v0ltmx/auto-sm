let cont = 0;
document.querySelectorAll('.sqdOP.L3NKy.y3zKF').forEach((item, index) => {
  setTimeout(() => {
		if(!item.classList.contains('._8A5w5')){
        	item.click();
        	cont++;
			console.log(`Seguimos ${cont} pessoa(s)!`);
		} else { 
			console.log('Já segue!!');
    }
  }, index * 20000);
});