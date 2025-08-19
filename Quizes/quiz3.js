const details = {
    name : "Daniyal",
    phone : "0312-3456789",
    address: "Nill"
}

for (key in details) {
    if ("phone" in details) {
    console.log("phone is present");
    break;
}
}