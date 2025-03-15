// Object.freeze({...}) makes sure that the values inside NewsCategories cannot be modified.
// This simulates an enum in JavaScript.
export const NewsCategories = Object.freeze({
  TECHNOLOGY: "technology",
  BUSINESS: "business",
  ENTERTAINMENT: "entertainment",
  GENERAL: "general",
  HEALTH: "health",
  SCIENCE: "science",
  SPORTS: "sports",
});

