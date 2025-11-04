
// --- Task 1: Live Search ---
$("#searchInput").on("keyup", function() {
  let value = $(this).val().toLowerCase();
  $("#itemList li").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

// --- Task 2: Autocomplete ---
let items = ["Cheeseburger", "Chicken Burger", "Veggie Burger", "Double Beef Burger", "Spicy Chicken"];

$("#searchInput").on("keyup", function() {
  let value = $(this).val().toLowerCase();
  let matched = items.filter(item => item.toLowerCase().includes(value));
  
  let suggestionsHTML = matched.map(item => `<div class="suggest-item" style="padding:5px; cursor:pointer;">${item}</div>`).join('');
  $("#suggestions").html(suggestionsHTML).toggle(matched.length > 0);

  $(".suggest-item").on("click", function(){
    $("#searchInput").val($(this).text());
    $("#suggestions").hide();
  });
});

// --- Task 3: Highlight Search ---
$("#highlightSearch").on("keyup", function() {
  let term = $(this).val();
  let text = $("#contentText").text();
  
  if (term.length > 0) {
    let regex = new RegExp(`(${term})`, "gi");
    let newText = text.replace(regex, '<span style="background:yellow;">$1</span>');
    $("#contentText").html(newText);
  } else {
    $("#contentText").text(text);
  }
});

// --- Task 4: Scroll Progress Bar ---
$(window).on("scroll", function() {
  let scrollTop = $(window).scrollTop();
  let docHeight = $(document).height() - $(window).height();
  let scrollPercent = (scrollTop / docHeight) * 100;
  $("#scrollBar").css("width", scrollPercent + "%");
});



