const backSpace = () =>{
    const num = document.querySelector("#result").value.slice(0 ,-1);
    document.querySelector("#result").value = num;
    }
    const inputField = document.getElementById('result');

    function appendCharacter(character) {
        result.value += character;
    }

    function clearInput() {
        result.value = '';
    }

    function calculateResult() {
        try {
            const enter = eval(result.value);
            result.value = enter;
        } catch (error) {
            result.value = 'Error';
        }
    }
        function calculatePercentage() {
            try {
            const percentage = eval(inputField.value) / 100;
                inputField.value = percentage;
            } catch (error) {
                inputField.value = 'Error';
            }
        }