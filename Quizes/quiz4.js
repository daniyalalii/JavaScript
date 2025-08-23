const details = {
    name : "Daniyal",
    phone : "0312-3456789",
    address: "Nill"
}

for(const [key, value] of Object.entries(details)){
    if(value=="Daniyal"){
        console.log(`value is present at: ${key}`);
    }
}