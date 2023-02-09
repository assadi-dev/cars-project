$(document).ready(() => {
  //const urlData = location.protocol + location.host + "/";

  const generatePicture = (data) => {
    const { name, path, marque, annee, type, etat, description } = data;
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");
    let textMarque = document.createElement("p");
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
    $(img).prependTo(figure);
    $(figcaption).appendTo(figure);
    return figure;
  };

  $("#show").on("click", function (e) {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        res.map((data) => {
          let li = document.createElement("li");
          let img = generatePicture(data);
          $(img).appendTo(li);

          $(li).appendTo("#car-list");
        });
      });
    $(this).attr({
      disabled: true,
    });
  });
});
