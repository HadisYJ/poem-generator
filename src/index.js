function displayPoem(response){

    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor:"",
      });
}

function generatePoem(event){
    event.preventDefault();
    let userInstructionInput = document.querySelector("#user-instruction");
    let apikey = "fe7b5aa15d53a1t7b432406eac34f4oa";
    let prompt = `Generate a poem about ${userInstructionInput.value}`;
    let context = "You are an expert romantic poet. Write a short romantic poem of no more than 6 lines. Separate each line using <br/>.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`

   axios.get(apiURL).then(displayPoem);

}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem)