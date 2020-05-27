

function makebadge(elm, uid) {
    url = `https://api.stackexchange.com/2.2/users/${uid}?order=desc&sort=reputation&site=stackoverflow`;
    $.getJSON((url), function(data) {
        //Create elements for avatar and detais4ls, and sub elements for details name and details flare
        avatar = document.createElement("div");
        avatar.className = "so-badge-avatar";
        avatarimg = document.createElement("img");
        details = document.createElement("div");
        details.className = "so-badge-details";
        detailsname = document.createElement("div");
        detailsname.className = "so-badge-details-name";
        detailsnamehref = document.createElement("a");
        detailsflair = document.createElement("div");
        detailsflair.className = "so-badge-details-flair";

        //Build the parent element lay-out
        elm.appendChild(avatar);
        avatar.appendChild(avatarimg);
        elm.appendChild(details);
        details.appendChild(detailsname);
        detailsname.appendChild(detailsnamehref);
        details.appendChild(detailsflair);

        //Fill content of all childs
        avatarimg.setAttribute("src", data["items"][0]["profile_image"]);
        detailsnamehref.setAttribute("href", data["items"][0]["link"]);
        detailsnamehref.append(data["items"][0]["display_name"]);
        detailsflair.append("R: " + data["items"][0]["reputation"] + " | B: " + data["items"][0]["badge_counts"]["bronze"] + " | S: " + data["items"][0]["badge_counts"]["silver"] + " | G: " + data["items"][0]["badge_counts"]["gold"]);
    });
};


$(document).ready(function(){
    elm = document.getElementById('so-badge');
    uid = elm.innerHTML;
    elm.innerHTML = "";
    makebadge(elm, uid);
});