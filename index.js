const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "Shoyu Ramen.jpeg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Spicy Miso Ramen", restaurant: "Menya", image: "Spicy Miso Ramen.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "Tonkotsu Ramen.jpeg" }
 ];
// function to display ramens
 function displayRamens(){
    const ramenMenu = document.getElementById("ramen-menu");
    
    ramens.forEach (ramen => {
const img = document.createElement("img")
img.src =ramens.image;
img.alt=ramens.image;
img.className = "ramen-image";


//clickEventListener for image 
img.addEventListener("click",()=> handleClick(ramens));
ramenMenu.appendChild(img);
    });

    if(ramens.length > 0 ){
        handleClick(ramens[0])
    }
 }


 // Function to handle click events on ramen images
function handleClick(ramen) {
    const detailImage = document.querySelector("#ramen-detail img");
    const name = document.querySelector("#ramen-detail .name");
    const restaurant = document.querySelector("#ramen-detail .restaurant");
    const rating = document.querySelector("#ramen-detail .rating");
    const comment = document.querySelector("#ramen-detail .comment");

    // Update the ramen-detail div 
    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    name.textContent = ramen.name;
    restaurant.textContent = ramen.restaurant;
    rating.textContent = `Rating: ${ramen.rating}/10`;
    comment.textContent = `Comment: ${ramen.comment}`;

    // Update the edit form 
    document.getElementById("edit-rating").value = ramen.rating;
    document.getElementById("edit-comment").value = ramen.comment;

    
    const editForm = document.getElementById("edit-ramen");
    editForm.onsubmit = (e) => {
        e.preventDefault();
        ramen.rating = document.getElementById("edit-rating").value;
        ramen.comment = document.getElementById("edit-comment").value;
        handleClick(ramen); // Refresh the displayed details
    };

    const deleteButton = document.getElementById("delete-ramen");
    deleteButton.onclick = () => deleteRamen(ramen);
}


function deleteRamen(ramen) {
    const index = ramens.findIndex(r => r.id === ramen.id);
    if (index !== -1) {
        ramens.splice(index, 1); 
        const ramenMenu = document.getElementById("ramen-menu");
        ramenMenu.innerHTML = ""; 
        displayRamens(); 
        if (ramens.length > 0) {
            handleClick(ramens[0]); 
        } else {
            // 
            const detailImage = document.querySelector("#ramen-detail img");
            const name = document.querySelector("#ramen-detail .name");
            const restaurant = document.querySelector("#ramen-detail .restaurant");
            const rating = document.querySelector("#ramen-detail .rating");
            const comment = document.querySelector("#ramen-detail .comment");

            detailImage.src = "";
            detailImage.alt = "";
            name.textContent = "";
            restaurant.textContent = "";
            rating.textContent = "";
            comment.textContent = "";
        }
    }
}
 // Function to display new ramen details inputted
function addSubmitListener() {
    const form = document.getElementById("new-ramen");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 


        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const image = document.getElementById("image").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        // new ramen object 
        const newRamen = {
            id: ramens.length + 1, // Generate a new ID
            name,
            restaurant,
            image,
            rating,
            comment
        };
        // Adding the new ramen to the ramens array
        ramens.push(newRamen);

        // Display the new ramen image in the #ramen-menu div
        const ramenMenu = document.getElementById("ramen-menu");
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.dataset.id = newRamen.id;
        img.className = "ramen-image"; // Add class for styling

        // Add click event listener to the new image
        img.addEventListener("click", () => handleClick(newRamen));

        ramenMenu.appendChild(img);

        // Reset the form
        form.reset();
    });
}
// initialize the app
function main() {
    displayRamens();
    addSubmitListener();
}

// Ensure the DOM is fully loaded before running the main function
document.addEventListener("DOMContentLoaded", main);

 


 
















































 