let form = document.querySelector('.btn');

form.addEventListener('click', () => {
    let temp_value = document.getElementById('temp-value').value;
    let temp_scale = document.getElementById("scale").value;
    if (temp_value == "") {
        alert("First, Enter the value of temperature.")
    }
    if (temp_scale == 'cel' && temp_value != "") {
        let fahreheit = Math.round((temp_value * 9) / 5 + 32);
        document.getElementById('result').innerHTML = `${temp_value} &#8451; &#8594;  ${fahreheit} &#8457;`;
    } else if (temp_scale == 'fah' && temp_value != "") {
        let celsius = Math.round((temp_value - 32) * 5 / 9);
        document.getElementById('result').innerHTML = `${celsius} &#8451; &#8592;  ${temp_value} &#8457;`;
    }
});