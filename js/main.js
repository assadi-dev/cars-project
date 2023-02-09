$(document).ready(() => {
  const generatePicture = (src, alt) => {
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    $(img).attr({
      src,
      alt,
    });
    $(img).prependTo(figure);
    return figure;
  };

  $("#show").on("click", function (e) {
    fetch("../data/data.json")
      .then((res) => res.json())
      .then((res) => {
        res.map((data) => {
          let li = document.createElement("li");
          let img = generatePicture(data.path, data.name);
          $(img).appendTo(li);
          $(li).appendTo("#car-list");
        });
      });
    $(this).attr({
      disabled: true,
    });
  });
});
