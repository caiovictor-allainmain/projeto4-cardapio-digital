let nome = prompt("verifique seu nome")
let estudante = prompt("Você é estudante? S/N").toLowerCase()
let prato =  parseFloat(prompt(`
Escolha o primeiro prato com os números entre 1 e 4: 
  1: { nome: "Hambúrguer" preco: 20 }
  2: { nome: "Pizza" preco: 35 }
  3: { nome: "Refrigerante" preco: 5 }
  4: { nome: "Batata Frita" preco: 12 }
  5: { sair }
`))

 if ( prato==5 ){
    alert("agradeço a preferencia, volte sempre.")
 } else{ 
    switch (prato) {
        case 1:
            Compra = "Hambúrguer"
            preço = 20
            alert("Hambúrguer - R$ 20")
            break
        case 2:
            Compra = "Pizza"
            preço = 35
            alert("Pizza - R$ 35")
            break
        case 3:
            Compra = "Refrigerante"
            preço = 5
            alert("Refrigerante - R$ 5")
            break
        case 4:
            Compra = "Batata Frita"
            preço = 12
            alert("Batata Frita - R$ 12")
            break
        default:
            alert(`Escolha uma das opções`)
   
    }
let prato2 =parseFloat(prompt(`escolha seu segundo prato de 1 a 4:
     1: { nome: "Hambúrguer" preco: 20 }
  2: { nome: "Pizza" preco: 35 }
  3: { nome: "Refrigerante" preco: 5 }
  4: { nome: "Batata Frita" preco: 12 }
  5: { sair } 
  `))
  if (prato2==5){
    ("agradeço a preferencia, volte sempre.")
  } else {
    switch (prato2) {
            case 1:
            Compra2 = "Hambúrguer"
            preço2 = 20
            alert("Hambúrguer - R$ 20")
            break
        case 2:
            Compra2 = "Pizza"
            preço2 = 35
            alert("Pizza - R$ 35")
            break
        case 3:
            Compra2 = "Refrigerante"
            preço2 = 5
            alert("Refrigerante - R$ 5")
            break
        case 4:
            Compra2 = "Batata Frita"
            preço2 = 12
            alert("Batata Frita - R$ 12")
           break
        }
 
let prato3 =parseFloat(prompt(`escolha seu segundo prato de 1 a 5:
     1: { nome: "Hambúrguer" preco: 20 }
  2: { nome: "Pizza" preco: 35 }
  3: { nome: "Refrigerante" preco: 5 }
  4: { nome: "Batata Frita" preco: 12 }
  5: { sair } 
  `))
  if (prato3==5) {
    ("agradeço a preferencia, volte sempre.")
  } else {
    switch (prato2) { 
        case 1:
            Compra3 = "Hambúrguer"
            preço3 = 20
            alert("Hambúrguer - R$ 20")
            break
        case 2:
            Compra3 = "Pizza"
            preço3 = 35
            alert("Pizza - R$ 35")
            break
        case 3:
            Compra3 = "Refrigerante"
            preço3 = 5
            alert("Refrigerante - R$ 5")
            break
        case 4:
            Compra3 = "Batata Frita"
            preço3 = 12
            alert("Batata Frita - R$ 12")
            break
      }

 if (estudante === "sim" && preço + preço2 + preço3 >= 50) {
    alert(`agradeço a preferencia! ${nome}
        Pratos escolhidos: 
        ${Compra} de ${preço}
        ${Compra2} de ${preço2} 
        ${Compra3} de ${preço3}
        Total sem desconto: R$ ${preço + preço2 + preço3}
        
        Total com desconto: R$ ${preço + preço2 + preço3 -  (((preço + preço2 + preço3) * 0.10) + ((preço + preço2 + preço3) * 0.05 ))}`)
 
 
    }else if (estudante === "n" && preço + preço2 + preço3 >= 50) {
        alert(`Obrigado ${nome}!
        Pratos escolhidos: 
        ${Compra} de ${preço}
        ${Compra2} de ${preço} 
        ${Compra3} de ${preço}
        Total sem desconto: R$ ${preço + preço2 + preço3}
        Total com desconto: R$ ${preço + preço2 + preço3 - ((preço + preço2 + preço3) * 0.05)}`)
 }else (estudante  === "sim" && preço1 + preço2 + preço3 <= 50) 
        
          {
        alert(`Obrigado ${nome}
        Pratos escolhidos: 
        ${Compra} de ${preço}
        ${Compra2} de ${preço2} 
        ${Compra3} de ${preço3}
        Total sem desconto: R$ ${preço + preço2 + preço3}
        Total com desconto: R$ ${preço + preço2 + preço3 - ((preço1 + preço2 + preço3) * 0.10)}`)
        }       
    
     else {alert(`Obrigado ${nome}!
            Pratos escolhidos: 
            ${Compra} de ${preço}
            ${Compra2} de ${preço2} 
            ${Compra3} de ${preço3}
            Total sem desconto: R$ ${preço + preço2 + preço3} 
            Total com desonto: você não possui nenhum desconto.`)
         }  
        }    
    }
 }






