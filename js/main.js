$(document).ready(() => {
  //const urlData = location.protocol + location.host + "/";

  const generatePicture = (data, index) => {
    const { name, path, marque, annee, type, etat, description } = data;
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");
    $(figcaption).addClass("card-content");
    let cardImage = document.createElement("div");
    $(cardImage).addClass("card-image");
    $(figure).addClass("card white rounded-2 shadow-1 mx-auto");

    $(figcaption).append(`<h2>${marque}</h2>`);
    $(figcaption).append(`<p><strong>Année: </strong> ${annee}</p>`);
    $(figcaption).append(`<p><strong>Type: </strong> ${type}</p>`);
    $(figcaption).append(`<p><strong>Etat: </strong> ${etat}</p>`);
    $(figcaption).append(
      `<p><strong>Description: </strong> ${description}</p>`
    );

    $(img).attr({
      src: path,
      alt: name,
    });
    $(img).appendTo(cardImage);
    $(cardImage).prependTo(figure);
    $(figcaption).appendTo(figure);
    $(figure)
      .addClass("hidden")
      .css({ "animation-delay": `${(index + 1) * 150}ms` });
    return figure;
  };

  $("#show").on("click", function (e) {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        res.voitures.map((data, i) => {
          let li = document.createElement("li");
          let card = generatePicture(data, i);
          $(card).appendTo(li);
          $(card).addClass("apparition");
          $(li).appendTo("#car-list");
        });
      });
    $(this).attr({
      disabled: true,
    });
  });
});
