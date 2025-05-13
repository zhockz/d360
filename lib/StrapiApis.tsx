const baseUrl = "http://localhost:1337";

export async function getStrapiData(url) {
  
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();

    return data;

  } catch (error) {

    console.error(error);
    
  }
}