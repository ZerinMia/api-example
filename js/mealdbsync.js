const sarchFood = () => {
    const searchFeild = document.getElementById('search-field');
    const searchText = searchFeild.value;
    // console.log(searchText);
    searchFeild.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchFish(data.meals))
        .catch(error => console.log(error))
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (meals.length == 0) {

    }
    //for of loop const meal of meals
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
        </div>
        `;
        searchResult.appendChild(div)
    })
}
const loadMealDetail = async mealId => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card=title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)} </p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Click Here</a>
        </div>
    </div>
    `;
    mealDetails.appendChild(div);

}