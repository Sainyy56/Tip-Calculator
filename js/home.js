function calculateTip() {
    let billamount = parseFloat(document.getElementById("Bill").value);
    let tip = parseFloat(document.getElementById("Tip").value);
    let tipdecimal = tip/100;
    let tipamount = billamount * tipdecimal;
    let totalamount = billamount + tipamount;
    document.getElementById("result").innerText = "Total: " + totalamount.toFixed(2);
}
