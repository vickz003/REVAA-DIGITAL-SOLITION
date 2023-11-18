document.addEventListener("DOMContentLoaded", function () {
    // Function to handle the click event on an li element
    function handleLiClick(liElement, selectedValuesList) {
        // Toggle the "selected" class to change the color
        liElement.classList.toggle("selected");

        // Get the text content of the clicked li element
        const selectedValue = liElement.textContent.trim();

        // Check if the li element is selected or not
        if (liElement.classList.contains("selected")) {
            // Add the selected value to the list
            addValueToList(selectedValue, selectedValuesList);
        } else {
            // Remove the selected value from the list
            removeValueFromList(selectedValue, selectedValuesList);
        }
    }

    // Function to add a value to the selected values list
    function addValueToList(value, selectedValuesList) {
        const listItem = document.createElement("li");
        listItem.textContent = value;
        listItem.classList.add("selected");
        selectedValuesList.appendChild(listItem);
    }

    // Function to remove a value from the selected values list
    function removeValueFromList(value, selectedValuesList) {
        const listItems = selectedValuesList.getElementsByTagName("li");

        // Iterate through the list items to find and remove the matching value
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent.trim() === value) {
                selectedValuesList.removeChild(listItems[i]);
                break;
            }
        }
    }

    // Attach click event listeners to all li elements within the options container (Business Type)
    const busstypeOptionsContainer = document.getElementById("busstype-options");
    const busstypeLiElements = busstypeOptionsContainer.querySelectorAll("ul li");

    busstypeLiElements.forEach(function (liElement) {
        liElement.addEventListener("click", function () {
            const selectedValuesList = document.getElementById("selected-values-list");
            handleLiClick(liElement, selectedValuesList);
        });
    });

    // Add location functionality
    const addLocationBtn = document.getElementById("add-location-btn");
    const locationOptionsInput = document.getElementById("location-options");

    addLocationBtn.addEventListener("click", function () {
        const locationValue = locationOptionsInput.value.trim();
        if (locationValue !== "") {
            const locationOptionsUl = document.querySelector("#location-options-container ul");
            // Create a new li element
            const newLi = document.createElement("li");
            newLi.textContent = locationValue;
            newLi.classList.add("selected"); // Add "selected" class
            // Append the new li element to the ul
            locationOptionsUl.appendChild(newLi);

            // Clear the input field
            locationOptionsInput.value = "";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Function to handle the click event on an li element
    function handleLiClick(liElement, listId) {
        // Toggle the "selected" class to change the color
        liElement.classList.toggle("selected");

        // Get the text content of the clicked li element
        const selectedValue = liElement.textContent.trim();

        // Check if the li element is selected or not
        if (liElement.classList.contains("selected")) {
            // Add the selected value to the list
            addValueToList(selectedValue, listId);
        } else {
            // Remove the selected value from the list
            removeValueFromList(selectedValue, listId);
        }
    }

    // Function to add a value to the selected values list
    function addValueToList(value, listId) {
        const selectedList = document.getElementById(listId);
        const listItem = document.createElement("li");
        listItem.textContent = value;
        selectedList.appendChild(listItem);
    }

    // Function to remove a value from the selected values list
    function removeValueFromList(value, listId) {
        const selectedList = document.getElementById(listId);
        const listItems = selectedList.getElementsByTagName("li");

        // Iterate through the list items to find and remove the matching value
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent.trim() === value) {
                selectedList.removeChild(listItems[i]);
                break;
            }
        }
    }

    // Attach click event listeners to all li elements within the options container
    const liElements = document.querySelectorAll("#budget-options-container ul li");
    liElements.forEach(function (liElement) {
        liElement.addEventListener("click", function () {
            handleLiClick(liElement, "selected-budgets-list");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Function to handle the click event for priority options
    function handlePriorityClick(liElement) {
        // Toggle the "selected" class on the clicked li element
        liElement.classList.toggle("selected");

        // Get the text content of the clicked li element
        var priorityValue = liElement.textContent.trim();

        // Add or remove the value from the selected priorities list
        if (liElement.classList.contains("selected")) {
            addValueToList(priorityValue, 'selected-priorities');
        } else {
            removeValueFromList(priorityValue, 'selected-priorities');
        }
    }

    // Function to add a value to the selected priorities list
    function addValueToList(value, listId) {
        var selectedPriorities = document.getElementById(listId);
        if (selectedPriorities) {
            var newPriority = document.createElement('li');
            newPriority.textContent = value;
            newPriority.classList.add('selected');
            selectedPriorities.appendChild(newPriority);
        }
    }

    // Function to remove a value from the selected priorities list
    function removeValueFromList(value, listId) {
        var selectedPriorities = document.getElementById(listId);
        if (selectedPriorities) {
            var priorities = selectedPriorities.querySelectorAll('.selected');
            priorities.forEach(function (priority) {
                if (priority.textContent.trim() === value) {
                    priority.remove();
                }
            });
        }
    }

    // Attach click event to each priority option
    var priorityOptions = document.querySelectorAll('#priority-options-container ul li');
    priorityOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            handlePriorityClick(option);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Function to handle the click event for source options
    function handleSourceClick(liElement) {
        // Toggle the "selected" class on the clicked li element
        liElement.classList.toggle("selected");

        // Get the text content of the clicked li element
        var sourceValue = liElement.textContent.trim();

        // Add or remove the value from the selected sources list
        if (liElement.classList.contains("selected")) {
            addValueToList(sourceValue, 'selected-sources');
        } else {
            removeValueFromList(sourceValue, 'selected-sources');
        }
    }

    // Function to add a value to the selected sources list
    function addValueToList(value, listId) {
        var selectedSources = document.getElementById(listId);
        if (selectedSources) {
            var newSource = document.createElement('li');
            newSource.textContent = value;
            newSource.classList.add('selected');
            selectedSources.appendChild(newSource);
        }
    }

    // Function to remove a value from the selected sources list
    function removeValueFromList(value, listId) {
        var selectedSources = document.getElementById(listId);
        if (selectedSources) {
            var sources = selectedSources.querySelectorAll('.selected');
            sources.forEach(function (source) {
                if (source.textContent.trim() === value) {
                    source.remove();
                }
            });
        }
    }

    // Attach click event to each source option
    var sourceOptions = document.querySelectorAll('#source-options-container ul li');
    sourceOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            handleSourceClick(option);
        });
    });
});
 

document.addEventListener("DOMContentLoaded", function () {
    // Function to handle the click event for services options
    function handleServicesClick(liElement) {
        // Toggle the "selected" class on the clicked li element
        liElement.classList.toggle("selected");

        // Get the text content of the clicked li element
        var serviceValue = liElement.textContent.trim();

        // Add or remove the value from the selected services list
        if (liElement.classList.contains("selected")) {
            addValueToList(serviceValue, 'selected-services');
        } else {
            removeValueFromList(serviceValue, 'selected-services');
        }
    }

    // Function to add a value to the selected services list
    function addValueToList(value, listId) {
        var selectedServices = document.getElementById(listId);
        if (selectedServices) {
            var newService = document.createElement('li');
            newService.textContent = value;
            newService.classList.add('selected');
            selectedServices.appendChild(newService);
        }
    }

    // Function to remove a value from the selected services list
    function removeValueFromList(value, listId) {
        var selectedServices = document.getElementById(listId);
        if (selectedServices) {
            var services = selectedServices.querySelectorAll('.selected');
            services.forEach(function (service) {
                if (service.textContent.trim() === value) {
                    service.remove();
                }
            });
        }
    }

    // Attach click event to each services option
    var servicesOptions = document.querySelectorAll('#services-options-container ul li');
    servicesOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            handleServicesClick(option);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Global array to store selected values
    const selectedValues = [];

    // Function to handle the click event on an li element
    function handleLiClick(liElement, listId) {
        // Toggle the "selected" class to change the color
        liElement.classList.toggle("selected");

        // Get the text content of the clicked li element
        const selectedValue = liElement.textContent.trim();

        // Check if the li element is selected or not
        if (liElement.classList.contains("selected")) {
            // Add the selected value to the list
            addValueToList(selectedValue);
        } else {
            // Remove the selected value from the list
            removeValueFromList(selectedValue);
        }
    }

    // Function to add a value to the selected values list
    function addValueToList(value) {
        selectedValues.push(value);
        updateSelectedValuesList();
    }

    // Function to remove a value from the selected values list
    function removeValueFromList(value) {
        const index = selectedValues.indexOf(value);
        if (index !== -1) {
            selectedValues.splice(index, 1);
            updateSelectedValuesList();
        }
    }

    // Function to update the selected values list
    function updateSelectedValuesList() {
        const selectedValuesList = document.getElementById("selected-values-list");
        // Clear the existing list
        selectedValuesList.innerHTML = "";
        
        // Add each selected value to the list
        selectedValues.forEach(function (value) {
            const listItem = document.createElement("li");
            listItem.textContent = value;
            listItem.classList.add("selected"); // Add "selected" class
            selectedValuesList.appendChild(listItem);
        });
    }

    // Function to format the date as "dd-mm-yyyy"
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    // Attach click event listeners to all li elements within the options container (Follow up date)
    const fudLiElements = document.querySelectorAll("#fud-options-container ul li");
    fudLiElements.forEach(function (liElement) {
        liElement.addEventListener("click", function () {
            handleLiClick(liElement, "selected-values-list");
        });
    });

    // Add Follow up date functionality
    const addFudBtn = document.getElementById("add-fud-btn");
    const fudDateInput = document.getElementById("fud-date-input");
    const fudOptionsList = document.getElementById("fud-options-list");

    addFudBtn.addEventListener("click", function () {
        const fudDateValue = fudDateInput.value.trim();
        if (fudDateValue !== "") {
            // Create a new li element
            const newLi = document.createElement("li");
            newLi.textContent = formatDate(fudDateValue);
            newLi.classList.add("selected"); // Add "selected" class
            // Append the new li element to the ul
            fudOptionsList.appendChild(newLi);

            // Add the value to the selectedValues array
            addValueToList(fudDateValue);

            // Clear the input field
            fudDateInput.value = "";
        }
    });
});