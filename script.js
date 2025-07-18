let input = document.getElementById("input");
    let output = document.getElementById("output");
    let string = "";

    function stringAnalyzer () {
        string = input.value.toLowerCase();

        if (string == "") {
            alert("Enter a string");
            input.focus();
            output.innerText = ""
            return 0;
        }
        else {
            let words = wordCount();
            let characters = characterCount();
            let { vowels, consonants } = vowelAndConsonants();
            let palindromes = findPalindromes();

            output.classList.remove("fade");
            void output.offsetWidth;
            output.classList.add("fade");

            output.innerText =
                "Words: " + words + "\n" +
                "Characters (non-space): " + characters + "\n" +
                "Vowels: " + vowels + "\n" +
                "Consonants: " + consonants + "\n" +
                "Palindromes: " + palindromes.join(", ");

            input.value = ""
        }
    }

    function wordCount() {
        if (string.trim() === "") return 0;
        return string.trim().split(/\s+/).length;
    }

    function characterCount () {
        let characters = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] != " ") {
                characters++;
            }
        }
        return characters;
    }

    function vowelAndConsonants () {
        let vowels = 0;
        let consonants = 0;
        
        for (let i = 0; i < string.length; i++) {
            let char = string[i];

            if (/[a-z]/.test(char)) {
                if ("aeiou".includes(char)) {
                    vowels++;
                }
                else {
                    consonants++;
                }
            }
        }
        return { vowels, consonants }
    }

    function findPalindromes() {
        let words = string.split(" ");
        let palindromes = [];

        for (let word of words) {
            if (word.length > 1) {
                let reversed = word.split("").reverse().join("");
                if (word === reversed) {
                    palindromes.push(word);
                }
            };
        }

        return palindromes;
}