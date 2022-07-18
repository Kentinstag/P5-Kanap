// requête des produits à l'API
fetch("http://localhost:3000/api/products")

.then(function(res)  {
    //traitement de la réponse, si ok capte la réponse sous format .json
    if (res.ok) {
        return res.json();
    }
 
})
.then((value)=>{
    console.log(value)
})
.catch((err) =>{
    console.log(err)
});
