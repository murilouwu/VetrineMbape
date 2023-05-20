function ocultar(obj, es){
	let div = document.querySelector(obj);
	if(es==1){
		div.style.display = 'flex';
	}else{
		div.style.display = 'none';
	};
};

function fade(id, fun) {
	if(fun==1){
		ocultar(id, fun);
	}else{
		let time = 700;
		let div = document.querySelector(id);
		div.style.animation = (time/1000)+'s fade-in linear';
		setTimeout(()=>{
			div.style.animation = (time/1000)+'s fade linear';
			div.style.display = 'none';	
		},time);
	}
};

function menuIcon(div, divMost, icon, fun, cor) {
    fade(divMost, fun);
    div.innerHTML = '<i class="' + icon[fun] + '"></i>';
    div.style.color = cor[fun];

    fun = fun == 0 ? 1 : 0;
    let onclick = 'menuIcon(this, \'' + divMost + '\', [\'' + icon[0] + '\', \'' + icon[1] + '\'], ' + fun + ', [\'' + cor[0] + '\', \'' + cor[1] + '\'])';
    div.setAttribute("onclick", onclick);
};

const ProductIntens = [];
ProductIntens[0] = ['Boneco.png','Boneco Mbappe','36.99'];
ProductIntens[1] = ['FunkoPop.png','FunkoPop Mbappe','134.99'];
ProductIntens[2] = ['Sapato.png','Sapato Mbappe','150.70'];
ProductIntens[3] = ['FilmeMbape.png','Filme Tartarugas ninjas','35.00'];
ProductIntens[4] = ['CamisaMbappe.png','Camisa do Mbappé','89.99'];
ProductIntens[5] = ['Chuteira.png','Chuteira Mbappé','199.99'];
ProductIntens[6] = ['PosterMbappe.png','Poster do Mbappé','15.99'];
ProductIntens[7] = ['LivroBiografiaMbappe.png','Livro: Biografia do Mbappé','29.99'];
ProductIntens[8] = ['BolaMbappe.png', 'Bola de Futebol do Mbappé', '39.99'];
ProductIntens[9] = ['BonéMbappe.png', 'Boné do Mbappé', '24.99'];
ProductIntens[10] = ['CanecaMbappe.png', 'Caneca com estampa do Mbappé', '12.99'];
ProductIntens[11] = ['CapaCelularMbappe.png', 'Capa de Celular do Mbappé', '19.99'];
