function createCard(title, cName, views, monthsOld, duration, image) {
    let viewsStr;
    if (views >= 1000000) {
        viewsStr = (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
        viewsStr = (views / 1000).toFixed(1) + "K";
    } else {
        viewsStr = views.toString();
    }
    const html = `<div class="card">
        <div class="img">
            <img src="${image}" alt="Thumbnail">
            <div class="duration">${duration}</div>
        </div>
        <div class="details">
            <div class="title">${title}</div>
            <div class="meta">
                <div class="channelName">${cName}</div>
                <div class="monthsOld">${monthsOld}</div>
                <div class="views">${viewsStr}</div>
            </div>
        </div>
    </div>`;
    document.querySelector(".container").innerHTML += html;
}

createCard(
    "Welcome to our youtuve channel",
    "Anonymusk",
    200000,
    "2 months old",
    "11:30",
    "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuvVlRNxvKcLMpdtUybkODOxsbjw"
);

createCard(
    "Welcome to our youtuve channel",
    "Anonymusk",
    200000,
    "2 months old",
    "11:30",
    "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuvVlRNxvKcLMpdtUybkODOxsbjw"
);

createCard(
    "Welcome to our youtuve channel",
    "Anonymusk",
    200000,
    "2 months old",
    "11:30",
    "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuvVlRNxvKcLMpdtUybkODOxsbjw"
);

createCard(
    "Welcome to our youtuve channel",
    "Anonymusk",
    200000,
    "2 months old",
    "11:30",
    "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuvVlRNxvKcLMpdtUybkODOxsbjw"
);
