
const btn = () =>{
    const nombrePkm = document.getElementById("nombrePkm");
    let pkmInput = nombrePkm.value.toLowerCase();
    const url = "https://pokeapi.co/api/v2/pokemon/"+ pkmInput;
    let screen2 = document.getElementById("screen")
    fetch(url).then((res)=>{//fetch se usa para obtener datos del servidor
        //console.log(res);//Res lo que busca es una repsuesta del servidor, una respuesta precargada
        const statuss= res.ok
        if(statuss==true){
            screen2.style["z-index"] = "0"
            return res.json();
        }else{
            img("img/9E3T.gif")
            screen2.style["z-index"] = "1"
        }
    }).then((data)=>{//data arroja la informacion del servidor, en este caso de la poke api
/*-------------------IMAGEN POKEMON-----------------------------------------------------*/        
        let imgPkm = data.sprites.other["official-artwork"].front_default;
        img(imgPkm);
        let stat1 = data.stats[0].base_stat;
        let stat2 = data.stats[1].base_stat;
        let stat3 = data.stats[2].base_stat;
        let stat4 = data.stats[3].base_stat;
        let stat5 = data.stats[4].base_stat;
        let stat6 = data.stats[5].base_stat;
        stats(stat1,stat2,stat3,stat4,stat5,stat6);
        let statsBar1 =document.getElementById("stat1_bar")
        let statsBar2 =document.getElementById("stat2_bar")
        let statsBar3 =document.getElementById("stat3_bar")
        let statsBar4 =document.getElementById("stat4_bar")
        let statsBar5 =document.getElementById("stat5_bar")
        let statsBar6 =document.getElementById("stat6_bar") 
        statsBar1.style.height = stat1*.034 +"rem"
        statsBar2.style.height = stat2*.034 +"rem"
        statsBar3.style.height = stat3*.034 +"rem"
        statsBar4.style.height = stat4*.034 +"rem"
        statsBar5.style.height = stat5*.034 +"rem"
        statsBar6.style.height = stat6*.034 +"rem"
/*-------------------TIPOS DE POKEMON-----------------------------------------------------*/
        const typePokemonx = document.getElementById("type");
        const typePokemon1x = document.getElementById("type1");
        let types0 = data.types[0].type.name;
        if(data.types.length==2){
            let types1 = data.types[1].type.name;
            typeF(types0, types1)
            /*Colores de los tipos-----------------------------------------------------*/
            if(types0=="psychic"){
                typePokemonx.style.backgroundColor = "#FABAF2"
            }
            else if(types0=="flying"){
                typePokemonx.style.backgroundColor = "#B4CCF6"
            }
            else if(types0=="fighting"){
                typePokemonx.style.backgroundColor = "#D55729"
            }
            else if(types0=="electric"){
                typePokemonx.style.backgroundColor = "#FFDE00"
            }
            else if(types0=="water"){
                typePokemonx.style.backgroundColor = "#0089FF"
            }
            else if(types0=="ground"){
                typePokemonx.style.backgroundColor = "#725000"
            }
            else if(types0=="normal"){
                typePokemonx.style.backgroundColor = "#D09100"
            }
            else if(types0=="steel"){
                typePokemonx.style.backgroundColor = "#ABABAB"
            }
            else if(types0=="rock"){
                typePokemonx.style.backgroundColor = "#B29042"
            }
            else if(types0=="fire"){
                typePokemonx.style.backgroundColor = "#EB0000"
            }
            else if(types0=="grass"){
                typePokemonx.style.backgroundColor = "#009C0A"
            }
            else if(types0=="dark"){
                typePokemonx.style.backgroundColor = "#505A51"
            }
            else if(types0=="bug"){
                typePokemonx.style.backgroundColor = "#d7de89"
            }
            else if(types0=="poison"){
                typePokemonx.style.backgroundColor = "#B500E2"
            }
            else if(types0=="ghost"){
                typePokemonx.style.backgroundColor = "#763C84"
            }
            else if(types0=="fairy"){
                typePokemonx.style.backgroundColor = "#FC55F1"
            }
            else if(types0=="ice"){
                typePokemonx.style.backgroundColor = "#00E6FF"
            }
            else if(types0=="dragon"){
                typePokemonx.style.backgroundColor = "#A27BC3"
            }else{
                typePokemonx.style.backgroundColor = "#FFFFFF"
            }
            /*COLORES TIPO SECUN*/
            if(types1=="psychic"){
                typePokemon1x.style.backgroundColor = "#FABAF2"
            }
            else if(types1=="flying"){
                typePokemon1x.style.backgroundColor = "#B4CCF6"
            }
            else if(types1=="fighting"){
                typePokemon1x.style.backgroundColor = "#D55729"
            }
            else if(types1=="electric"){
                typePokemon1x.style.backgroundColor = "#FFDE00"
            }
            else if(types1=="water"){
                typePokemon1x.style.backgroundColor = "#0089FF"
            }
            else if(types1=="ground"){
                typePokemon1x.style.backgroundColor = "#725000"
            }
            else if(types1=="normal"){
                typePokemon1x.style.backgroundColor = "#D09100"
            }
            else if(types1=="steel"){
                typePokemon1x.style.backgroundColor = "#ABABAB"
            }
            else if(types1=="rock"){
                typePokemon1x.style.backgroundColor = "#B29042"
            }
            else if(types1=="fire"){
                typePokemon1x.style.backgroundColor = "#EB0000"
            }
            else if(types1=="grass"){
                typePokemon1x.style.backgroundColor = "#009C0A"
            }
            else if(types1=="dark"){
                typePokemon1x.style.backgroundColor = "#505A51"
            }
            else if(types1=="bug"){
                typePokemon1x.style.backgroundColor = "#d7de89"
            }
            else if(types1=="poison"){
                typePokemon1x.style.backgroundColor = "#B500E2"
            }
            else if(types1=="ghost"){
                typePokemon1x.style.backgroundColor = "#763C84"
            }
            else if(types1=="fairy"){
                typePokemon1x.style.backgroundColor = "#FC55F1"
            }
            else if(types1=="ice"){
                typePokemon1x.style.backgroundColor = "#00E6FF"
            }
            else if(types1=="dragon"){
                typePokemon1x.style.backgroundColor = "#A27BC3"
            }else{
                typePokemon1x.style.backgroundColor = "#FFFFFF"
            }
        }else{
            typeF(types0);
            if(types0=="psychic"){
                typePokemonx.style.backgroundColor = "#FABAF2"
            }
            else if(types0=="flying"){
                typePokemonx.style.backgroundColor = "#B4CCF6"
            }
            else if(types0=="fighting"){
                typePokemonx.style.backgroundColor = "#D55729"
            }
            else if(types0=="electric"){
                typePokemonx.style.backgroundColor = "#FFDE00"
            }
            else if(types0=="water"){
                typePokemonx.style.backgroundColor = "#0089FF"
            }
            else if(types0=="ground"){
                typePokemonx.style.backgroundColor = "#725000"
            }
            else if(types0=="normal"){
                typePokemonx.style.backgroundColor = "#D09100"
            }
            else if(types0=="steel"){
                typePokemonx.style.backgroundColor = "#ABABAB"
            }
            else if(types0=="rock"){
                typePokemonx.style.backgroundColor = "#B29042"
            }
            else if(types0=="fire"){
                typePokemonx.style.backgroundColor = "#EB0000"
            }
            else if(types0=="grass"){
                typePokemonx.style.backgroundColor = "#009C0A"
            }
            else if(types0=="dark"){
                typePokemonx.style.backgroundColor = "#505A51"
            }
            else if(types0=="bug"){
                typePokemonx.style.backgroundColor = "#d7de89"
            }
            else if(types0=="poison"){
                typePokemonx.style.backgroundColor = "#B500E2"
            }
            else if(types0=="ghost"){
                typePokemonx.style.backgroundColor = "#763C84"
            }
            else if(types0=="fairy"){
                typePokemonx.style.backgroundColor = "#FC55F1"
            }
            else if(types0=="ice"){
                typePokemonx.style.backgroundColor = "#00E6FF"
            }
            else if(types0=="dragon"){
                typePokemonx.style.backgroundColor = "#A27BC3"
            }else{
                typePokemonx.style.backgroundColor = "#FFFFFF"
            }
        }
        
        /*console.log(types1)*/
    })
}
btn();
/*Funcion imagen del pokemon*/
const img = (url) =>{
    const zoneimgPkm = document.getElementById("pokemonImg");
    pokemonImg.src = url;
}
/*Funcion Info tipo de pokemon----------------------------------------------------------------*/
const typeF = (types1,types2) =>{
    const typePokemon = document.getElementById("type");
    const typePokemon1 = document.getElementById("type1")
    if(types2==undefined){
        type.innerHTML=types1;
        type1.innerHTML=" ";
    }else{
        type.innerHTML=types1;
        type1.innerHTML=types2;
    }
    
}

const stats = (stat1,stat2,stat3,stat4,stat5,stat6) =>{
    const statNum = document.getElementById("stats1_num")
    const statNum1 = document.getElementById("stats2_num")
    const statNum2 = document.getElementById("stats3_num")
    const statNum3 = document.getElementById("stats4_num")
    const statNum4 = document.getElementById("stats5_num")
    const statNum5 = document.getElementById("stats6_num")
    stats1_num.innerHTML=stat1;
    stats2_num.innerHTML=stat2;
    stats3_num.innerHTML=stat3;
    stats4_num.innerHTML=stat4;
    stats5_num.innerHTML=stat5;
    stats6_num.innerHTML=stat6;
}


