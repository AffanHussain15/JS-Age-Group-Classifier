        function classifyAge() {
            let age = prompt("Enter your age:");

            age = parseInt(age, 10);

            if (isNaN(age) || age < 0) {
                alert("Invalid input. Please enter a valid age.");
                return;
            }

            let ageGroup;
            if (age >= 0 && age <= 12) {
                ageGroup = "Child";
            } else if (age >= 13 && age <= 19) {
                ageGroup = "Teenager";
            } else if (age >= 20 && age <= 64) {
                ageGroup = "Adult";
            } else {
                ageGroup = "Senior";
            }

            alert(`You are classified as a ${ageGroup}.`);
        }

        classifyAge();