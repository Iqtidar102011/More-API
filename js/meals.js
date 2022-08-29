const loadMeals = (search) => {
    // to make the url dynamic
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayeMeals(data.meals));
}
const displayeMeals = (meals) => {

    const mealContainer = document.getElementById("mealContainer");
    // added later : to clear the previous elements from the div
    // dynnamic onclick .. the value is a number .. so no need to put inside a ''
    mealContainer.innerHTML = '';
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="mealDetails(${meal.idMeal})" class="card h-100">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div> -->
        `
        mealContainer.appendChild(div);
    });
}

const searchFoods = () => {
    const inputValue = document.getElementById("search_input").value
    // calling the load... function
    loadMeals(inputValue)
    document.getElementById("search_input").value = '';

}

const mealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)
        .then(res => res.json())
        .then(data => loadMealDetails(data.meals[0]))
}
const loadMealDetails = (mealDetails) => {
    const detailContainer = document.getElementById("detail_container")
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div')
    mealDiv.classList.add('card')
    mealDiv.innerHTML = `
    
    <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${mealDetails.strMeal}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
    
    
    `
    detailContainer.appendChild(mealDiv);
}





loadMeals('b');