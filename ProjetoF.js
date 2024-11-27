const heroi = "SrDavos"
let = xpTotal = 0
for (i = 0; i < 15; i++){
    let xpMonstro = Math.floor(Math.random() * 1000); 
    let nivelMonstro = Math.floor(Math.random() * 100);
    // calculo
    let xpAdquirido = (xpMonstro * nivelMonstro) / 2;
    xpTotal += xpAdquirido;
    //switch
    let rank;
    switch (true) {
        case xpTotal < 1000:
            rank = "Ferro";
            break;
        case xpTotal <= 2000:
            rank = "Bronze";
            break;
        case xpTotal <= 5000:
            rank = "Prata";
            break;
        case xpTotal <= 7000:
            rank = "Ouro";
            break;
        case xpTotal <= 8000:
            rank = "Platina";
            break;
        case xpTotal <= 9000:
            rank = "Ascendente";
            break;
        case xpTotal <= 10000:
            rank = "Imortal";
            break;
        default:
            rank = "Radiante";
            break;}
    }
