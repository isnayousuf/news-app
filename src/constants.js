// Object.freeze({...}) makes sure that the values inside NewsCategories cannot be modified.
// This simulates an enum in JavaScript.
export const NewsCategories = Object.freeze({
  TOP: "top",
  TECHNOLOGY: "technology",
  BUSINESS: "business",
  ENTERTAINMENT: "entertainment",
  HEALTH: "health",
  SCIENCE: "science",
  SPORTS: "sports",
  CRIME: "crime",
  DOMESTIC: "domestic",
  EDUCATION: "education",
  ENVIRONMENT: "environment",
  FOOD: "food",
  LIFESTYLE: "lifestyle",
  POLITICS: "politics",
  TOURISM: "tourism",
  WORLD: "world",
});

