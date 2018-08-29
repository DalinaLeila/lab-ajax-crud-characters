const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(result => {
      $(".characters-container").html("");
      for (i = 0; i < result.length; i++) {
        console.log(result[i]);
        $(".characters-container").append(
          ` <div class="character-info">
            <div class="name"><i><b>Character Name</i></b> ${
              result[i].name
            }</div>
            <div class="occupation"><i><b>Character Occupation</i></b> ${
              result[i].occupation
            }</div>
            <div class="cartoon"><i><b>Is a Cartoon?</i></b> ${
              result[i].cartoon
            }</div>
            <div class="weapon"><i><b>Character Weapon</i></b> ${
              result[i].weapon
            }</div>
          </div>`
        );
      }
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    let currentId = $("input[name='character-id']").val();
    charactersAPI.getOneRegister(currentId).then(result => {
      $(".characters-container").html("");

      $(".characters-container").append(
        ` <div class="character-info">
          <div class="name"><i><b>Character Name</i></b> ${result.name}</div>
          <div class="occupation"><i><b>Character Occupation</i></b> ${
            result.occupation
          }</div>
          <div class="cartoon"><i><b>Is a Cartoon?</i></b> ${
            result.cartoon
          }</div>
          <div class="weapon"><i><b>Character Weapon</i></b> ${
            result.weapon
          }</div>
        </div>`
      );
    });
  };

  document.getElementById("delete-one").onclick = function() {
    const currentId = $("input[name='character-id-delete']").val();
    charactersAPI.deleteOneRegister(currentId);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    const currentId = $("input[name='character-id-delete']").val();
    // prevent form default behav. of redirectiong after input:
    event.preventDefault();
    // get user inputs to make a character:
    const info = {
      id: $("input[id='chr-id']").val(),
      name: $("input[name='name']").val(),
      occupation: $("input[name='occupation']").val(),
      weapon: $("input[name='weapon']").val(),
      cartoon: $("input[name='cartoon']").val()
    };
    // add character to the database
    charactersAPI.updateOneRegister(currentId, info).then(response => {
      // $("#charactersField").empty();
      // createCharacter(info);
      console.log(response);
    });
  };

  document.getElementById("new-character-form").onsubmit = function() {};
});
