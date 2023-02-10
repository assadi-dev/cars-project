$(document).ready(() => {
  //const urlData = location.protocol + location.host + "/";

  const generatePicture = (data, index) => {
    const { name, path, marque, annee, type, etat, description } = data;
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");
    $(figcaption).addClass("card-content");
    let textMarque = document.createElement("h2");
    let cardImage = document.createElement("div");
    $(cardImage).addClass("card-image");
    $(figure).addClass("card white rounded-2 shadow-1 mx-auto");

    $(textMarque).text(marque);
    $(textMarque).appendTo(figcaption);
    let textannee = document.createElement("p");
    $(textannee).text(annee);
    $(textannee).appendTo(figcaption);
    let textype = document.createElement("p");
    $(textype).text(type);
    $(textype).appendTo(figcaption);
    let textetat = document.createElement("p");
    $(textetat).text(etat);
    $(textetat).appendTo(figcaption);
    let textDescription = document.createElement("p");
    $(textDescription).text(description);
    $(textDescription).appendTo(figcaption);

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
